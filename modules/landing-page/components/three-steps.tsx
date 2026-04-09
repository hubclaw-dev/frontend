import classNames from "classnames";
import { AnimatePresence, motion, PanInfo } from "motion/react";
import { useState } from "react";
import { SeeInActionBlock } from "./see-in-action-block";
import { CTAButton } from "@/shared/components/ui/Button/cta-button";

const STEPS = [
  {
    title: "Creating",
    description: "Say hello. Tell it what matters.",
    subtext: "Your first message sets everything in motion. Tell it what you’re working on, what you want tracked, what you hate dealing with. It listens. Then it starts.",
  },
  {
    title: "Connecting",
    description: "It starts connecting the dots.",
    subtext: "Your AI begins linking your tools, data, and workflows. It quietly builds connections so everything works together seamlessly.",
  },
  {
    title: "Working",
    description: "It’s already working for you.",
    subtext: "Now it runs in the background — tracking, summarizing, notifying. You just focus on what matters.",
  },
];

export function ThreeSteps() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    const nextStep = (currentStep + newDirection + STEPS.length) % STEPS.length;
    setDirection(newDirection);
    setCurrentStep(nextStep);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipeThreshold = 70;
    const velocityThreshold = 0.4;

    if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      paginate(-1);
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      paginate(1);
    }
  };



  return (
    <div className="px-[16px] mb-[50px]">
      <div className="text-center flex flex-col gap-[24px] mb-[40px]">
        <p className="text-[32px] leading-[100%] tracking-[-0.06em] font-medium"><span className="text-[#CCCCCC]">Three steps</span><br />Then it's just - working</p>
      </div>
      <div>
        <div className="flex justify-center align-center gap-[4px] text-[16px] font-medium text-[#CCCCCC]">
          <div className="pt-[8px] pb-[18px] px-[24px]">
            Creating
          </div>
          <div className="pt-[8px] pb-[18px] px-[24px]">
            Connecting
          </div>
          <div className="pt-[8px] pb-[18px] px-[24px]">
            Working
          </div>
        </div>
        <div className="flex align-center justify-center mb-[40px]">

          <div className="flex flex-col justify-between">

            {/* Progress Bar — width 228px*/}
            <div className="flex justify-center mb-[16px]">
              <div className="flex items-center max-w-[228px] w-full mx-auto">
                {STEPS.map((step, index) => (
                  <div key={index} className="flex items-center flex-1 last:flex-none">
                    {/* Dot */}
                    <div
                      onClick={() => {
                        const dir = index > currentStep ? 1 : -1;
                        setDirection(dir);
                        setCurrentStep(index);
                      }}
                      className={classNames(
                        "w-2 h-2 rounded-full transition-all duration-300 cursor-pointer z-10",
                        index <= currentStep
                          ? "bg-[#0D8AF2]"
                          : "bg-[#0D8AF2]/15"
                      )}
                    />

                    {/* Line between dots */}
                    {index < STEPS.length - 1 && (
                      <div
                        className={classNames(
                          "flex-1 h-[4px] transition-all duration-300",
                          index <= currentStep - 1 ? "bg-[#0D8AF2]" : "bg-[#0D8AF2]/15"
                        )}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* slider with content */}
            <div className="">
              <div className="relative z-10">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                    transition={{ type: "spring", stiffness: 300, damping: 32 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    className="cursor-grab active:cursor-grabbing touch-pan-y select-none"
                  >
                    <SeeInActionBlock title={STEPS[currentStep].description} desc={STEPS[currentStep].subtext} height={275} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          <CTAButton text="Create your agent now" />
        </div>

      </div>
    </div>
  )
}