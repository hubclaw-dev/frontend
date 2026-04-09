"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import classNames from "classnames";
import { CTAButton } from "@/shared/components/ui/Button/cta-button";
import TestimonialsBg from "../images/testimonial-bg.png";

const TESTIMONIALS = [
  {
    text: "I told it to track three competitors and send me a morning briefing. It did. Every day. Without me asking again. That was two months ago.",
    author: "Small business owner, Dubai",
  },
  {
    text: "This tool completely changed how I manage my team. I just set it once and it keeps everything running smoothly.",
    author: "CEO at Growth Startup, London",
  },
  {
    text: "The automation is insane. I saved over 15 hours a week just by giving it simple instructions.",
    author: "Marketing Director, Singapore",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    const nextIndex =
      (currentIndex + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length;
    setDirection(newDirection);
    setCurrentIndex(nextIndex);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipeThreshold = 50;
    const velocityThreshold = 0.3;

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
    <div className="mb-[50px] px-[16px]">
      <div className="relative rounded-[16px] border border-[#EDEDED]">
        <Image
          src={TestimonialsBg}
          alt="background"
          // width={TestimonialsBg.width / 2}
          // height={TestimonialsBg.height / 2}
          fill
          className="rounded-[16px] object-cover"
          priority={false}
        />
        <div className="relative z-10">
          {/* Заголовок */}
          <div className="pt-[24px] pb-[40px] text-center">
            <h2 className="text-[32px] leading-[100%] font-medium tracking-[-0.06em] text-[#000000]">
              <span className="text-[#CCCCCC]">
                People who <br />
              </span>
              stopped doing things themselves
            </h2>
          </div>

          {/* Slider */}
          <div className="relative flex items-center justify-center overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.blockquote
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className={classNames(
                  "h-[125px] cursor-grab px-[24px] text-center select-none active:cursor-grabbing",
                  "mx-auto max-w-lg text-xl leading-relaxed text-gray-700 md:text-2xl",
                )}
              >
                <div className="mb-[32px] text-[16px] leading-[120%] font-medium tracking-[-0.02em] text-[#000000]">
                  "{TESTIMONIALS[currentIndex].text}"
                </div>
                <p className="mb-[20px] text-[12px] leading-[120%] font-medium tracking-[-0.02em] text-[#CCCCCC]">
                  {TESTIMONIALS[currentIndex].author}
                </p>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Blue lines */}
          <div className="flex justify-center gap-[2px] py-[40px]">
            {TESTIMONIALS.map((_, index) => (
              <div
                key={index}
                onClick={() => {
                  const dir = index > currentIndex ? 1 : -1;
                  setDirection(dir);
                  setCurrentIndex(index);
                }}
                className={classNames(
                  "h-1 cursor-pointer rounded-full transition-all duration-300",
                  {
                    "h-[4px] w-[26px] bg-[#0D8AF2]": index === currentIndex,
                    "h-[4px] w-[26px] bg-[#0D8AF2]/15": index !== currentIndex,
                  },
                )}
              />
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center pb-[24px]">
            <CTAButton text="Join 10,000+ happy users" />
          </div>
        </div>
      </div>
    </div>
  );
}
