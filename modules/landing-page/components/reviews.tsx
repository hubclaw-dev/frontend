'use client';

import Image from "next/image"
import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import classNames from 'classnames';
import { CTAButton } from '@/shared/components/ui/Button/cta-button';
import TestimonialsBg from "../images/testimonial-bg.png"

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
    const nextIndex = (currentIndex + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length;
    setDirection(newDirection);
    setCurrentIndex(nextIndex);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipeThreshold = 50;
    const velocityThreshold = 0.3;

    if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      paginate(-1);
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      paginate(1);
    }
  };

  return (
    <div className="px-[16px] mb-[50px]">

      <div className="relative border border-[#EDEDED] rounded-[16px]">
        <Image
          src={TestimonialsBg}
          alt="background"
          // width={TestimonialsBg.width / 2}
          // height={TestimonialsBg.height / 2}
          fill
          className="object-cover rounded-[16px]"
          priority={false}
        />
        <div className="relative z-10">
          {/* Заголовок */}
          <div className="text-center pt-[24px] pb-[40px]">
            <h2 className="text-[32px] font-medium leading-[100%] tracking-[-0.06em] text-[#000000]">
              <span className="text-[#CCCCCC]">People who <br /></span>
              stopped doing things themselves
            </h2>
          </div>

          {/* Slider */}
          <div className="flex items-center justify-center overflow-hidden relative">
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
                  "text-center cursor-grab active:cursor-grabbing select-none px-[24px] h-[125px]",
                  "text-xl md:text-2xl text-gray-700 leading-relaxed max-w-lg mx-auto"
                )}
              >
                <div className="text-[#000000] text-[16px] leading-[120%] font-medium tracking-[-0.02em] mb-[32px]">
                  "{TESTIMONIALS[currentIndex].text}"
                </div>
                <p className="text-[12px] font-medium leading-[120%] tracking-[-0.02em] text-[#CCCCCC] mb-[20px]">
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
                  "h-1 rounded-full transition-all duration-300 cursor-pointer",
                  {
                    "bg-[#0D8AF2] w-[26px] h-[4px]": index === currentIndex,
                    "bg-[#0D8AF2]/15 w-[26px] h-[4px]": index !== currentIndex,
                  }
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