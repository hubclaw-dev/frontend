"use client";

import classNames from "classnames";
import { AnimatePresence, motion, PanInfo } from "motion/react";
import { useState } from "react";
import { SeeInActionBlockThreeSteps } from "./see-in-action-block";
import { CTAButton } from "@/shared/components/ui/Button/cta-button";
import ConnectImage from "../images/three-steps/connect-img.svg";
import CreatingImage from "../images/three-steps/create-img.svg";
import WorkingImage from "../images/three-steps/say-hello-img.svg";

const STEPS = [
  {
    id: 1,
    title: "Creating",
    description: "Say hello. Tell it what matters.",
    image: CreatingImage,
    subtext:
      "Your first message sets everything in motion. Tell it what you’re working on, what you want tracked, what you hate dealing with. It listens. Then it starts.",
  },
  {
    id: 2,
    title: "Connecting",
    description: "It starts connecting the dots.",
    image: ConnectImage,
    subtext:
      "Your AI begins linking your tools, data, and workflows. It quietly builds connections so everything works together seamlessly.",
  },
  {
    id: 3,
    title: "Working",
    description: "It’s already working for you.",
    image: WorkingImage,
    subtext:
      "Now it runs in the background — tracking, summarizing, notifying. You just focus on what matters.",
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
    } else if (
      info.offset.x < -swipeThreshold ||
      info.velocity.x < -velocityThreshold
    ) {
      paginate(1);
    }
  };

  return (
    <div className="3xl:mb-[100px] 3xl:pt-[100px] mb-[50px] px-[16px] lg:mb-[64px]">
      <div className="3xl:mb-[64px] mb-[40px] flex flex-col gap-[24px] text-center lg:mx-auto lg:mb-[60px] lg:max-w-[1520px] lg:flex-row lg:justify-between lg:text-left">
        <p className="3xl:text-[64px] text-[32px] leading-[100%] font-medium tracking-[-0.06em] md:text-[36px] lg:text-[40px]">
          <span className="text-[#CCCCCC]">Three steps</span>
          <br />
          Then it&apos;s just - working
        </p>

        <div className="mt-auto flex hidden lg:block">
          <CTAButton
            text="Create your agent now"
            classNames="lg:px-[48px] lg:py-[16px]"
          />
        </div>
      </div>

      <div>
        <div className="align-center block flex justify-center gap-[4px] text-[16px] font-medium text-[#CCCCCC] lg:hidden">
          <div className="px-[24px] pt-[8px] pb-[18px] md:px-[88px] lg:px-[131px]">
            Creating
          </div>
          <div className="px-[24px] pt-[8px] pb-[18px] md:px-[88px] lg:px-[131px]">
            Connecting
          </div>
          <div className="px-[24px] pt-[8px] pb-[18px] md:px-[88px] lg:px-[131px]">
            Working
          </div>
        </div>
        <div className="align-center mb-[40px] block flex justify-center lg:hidden">
          <div className="flex flex-col justify-between">
            {/* Progress Bar */}
            <div className="mb-[16px] block flex justify-center lg:hidden">
              <div className="mx-auto flex w-full max-w-[228px] items-center md:max-w-[484px] lg:max-w-[666px]">
                {STEPS.map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-1 items-center last:flex-none"
                  >
                    {/* Dot */}
                    <div
                      onClick={() => {
                        const dir = index > currentStep ? 1 : -1;
                        setDirection(dir);
                        setCurrentStep(index);
                      }}
                      className={classNames(
                        "z-10 h-2 w-2 cursor-pointer rounded-full transition-all duration-300",
                        index <= currentStep
                          ? "bg-[#0D8AF2]"
                          : "bg-[#0D8AF2]/15",
                      )}
                    />

                    {/* Line between dots */}
                    {index < STEPS.length - 1 && (
                      <div
                        className={classNames(
                          "h-[4px] flex-1 transition-all duration-300",
                          index <= currentStep - 1
                            ? "bg-[#0D8AF2]"
                            : "bg-[#0D8AF2]/15",
                        )}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* slider with content */}
            <div className="block lg:hidden">
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
                    className="cursor-grab touch-pan-y select-none active:cursor-grabbing"
                  >
                    <SeeInActionBlockThreeSteps
                      title={STEPS[currentStep].description}
                      desc={STEPS[currentStep].subtext}
                      className="h-[275px] md:h-[337px]"
                      image={STEPS[currentStep].image}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="block flex justify-center lg:hidden">
          <CTAButton text="Create your agent now" />
        </div>
      </div>

      <ThreeStepsBlock />
    </div>
  );
}

function ThreeStepsBlock() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="hidden lg:block">
      <div className="align-center block flex justify-center gap-[4px] text-[16px] font-medium text-[#CCCCCC]">
        <div className="px-[24px] pt-[8px] pb-[18px] md:px-[88px] lg:px-[131px]">
          Creating
        </div>
        <div className="px-[24px] pt-[8px] pb-[18px] md:px-[88px] lg:px-[131px]">
          Connecting
        </div>
        <div className="px-[24px] pt-[8px] pb-[18px] md:px-[88px] lg:px-[131px]">
          Working
        </div>
      </div>
      <div className="mb-[16px] block flex justify-center lg:mb-[48px]">
        <div className="mx-auto flex w-full max-w-[228px] items-center md:max-w-[484px] lg:max-w-[666px]">
          {STEPS.map((_, index) => (
            <div
              key={index}
              className="flex flex-1 items-center last:flex-none"
            >
              {/* Dot */}
              <div
                onClick={() => {
                  setCurrentStep(index);
                }}
                className={classNames(
                  "z-10 h-2 w-2 cursor-pointer rounded-full transition-all duration-300",
                  index <= currentStep ? "bg-[#0D8AF2]" : "bg-[#0D8AF2]/15",
                )}
              />

              {/* Line between dots */}
              {index < STEPS.length - 1 && (
                <div
                  className={classNames(
                    "h-[4px] flex-1 transition-all duration-300",
                    index <= currentStep - 1
                      ? "bg-[#0D8AF2]"
                      : "bg-[#0D8AF2]/15",
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid grid-cols-3 gap-[16px] lg:max-w-[1520]">
        {STEPS.map((step, index) => (
          <SeeInActionBlockThreeSteps
            key={index}
            className="lg:mx-auto lg:max-w-full"
            title={step.description}
            desc={step.subtext}
            image={step.image}
            isSelected={index === currentStep}
            onCardClick={() => setCurrentStep(index)}
          />
        ))}
      </div>
    </div>
  );
}
