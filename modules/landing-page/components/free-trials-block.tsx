import Image from "next/image";
import FreeTrialBg from "../images/free-trial/free-trial.svg";
import TestimonialBg from "../images/testimonial-bg.png";

export function FreeTrialBlock() {
  return (
    <div className="3xl:pb-[54px] px-[16px] pb-[24px] lg:mx-auto lg:max-w-[1520px]">
      <div className="grid grid-cols-1 rounded-[16px] bg-[#0D8AF2] lg:grid-cols-2 lg:gap-[16px] lg:rounded-[20px]">
        <div className="mb-[24px] p-[4px] lg:order-2 lg:m-0">
          <Image
            src={TestimonialBg}
            alt="icon"
            className="xs:h-[144px] xs:w-[320px] 3xl:h-[502px] rounded-[12px] md:mx-auto md:h-[176px] md:w-full lg:h-[368px] lg:rounded-[20px]"
          />
        </div>
        <div className="3xl:p-[48px] lg:p-[32px] lg:pr-0">
          <div className="3xl:text-[48px] 3xl:mb-[32px] mb-[32px] text-center text-[28px] leading-[100%] font-medium tracking-[-0.06em] text-white md:text-[32px] lg:mb-[24px] lg:text-left">
            Right now,{" "}
            <span className="text-white/30">
              something <br /> you care about <br />
            </span>{" "}
            is happening without you
          </div>

          <div className="3xl:text-[20px] 3xl:mb-[106px] mb-[32px] text-center text-[16px] leading-[120%] font-medium tracking-[-0.02em] text-white lg:mb-[74px] lg:text-left">
            <span className="text-white/30">
              Your agent would already know.
            </span>
            <br /> Brief it once - it handles the rest
          </div>

          <div className="mb-[8px] flex items-center justify-center lg:place-content-start">
            <button className="cursor-pointer rounded-[12px] bg-[#FFFFFF] px-[40px] py-[12px]">
              <span className="leading-[100%] font-bold tracking-[-0.02em] text-[#0D8AF2]">
                Start with a free 3-day trial
              </span>
            </button>
          </div>

          <div className="pb-[24px] text-center text-[10px] leading-[160%] font-medium tracking-[-0.02em] text-[#FFFFFF]/50 lg:pb-0 lg:text-left">
            Cancel anytime. No contracts. Pick up where you left off
          </div>
        </div>
      </div>
    </div>
  );
}
