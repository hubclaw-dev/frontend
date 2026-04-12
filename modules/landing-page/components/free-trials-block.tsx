import Image from "next/image";
import FreeTrialBg from "../images/free-trial/free-trial.svg";
import FreeTrial768 from "../images/free-trial/free-trial-768.svg";
import FreeTrial1024 from "../images/free-trial/free-trial-1024.svg";

export function FreeTrialBlock() {
  return (
    <div className="3xl:pb-[54px] 3xl:pt-[100px] px-[16px] pb-[24px] md:px-[24px] lg:mx-auto">
      <div className="xs:p-[4px] 3xl:w-[1520px] 3xl:rounded-[36px] 3xl:max-h-[510px] grid grid-cols-1 rounded-[16px] bg-[#0D8AF2] lg:mx-auto lg:grid-cols-2 lg:gap-[16px] lg:rounded-[20px]">
        <div className="xs:h-[144px] xs:min-w-[320px] relative mb-[24px] block w-full md:hidden lg:order-2 lg:m-0">
          <Image
            src={FreeTrialBg}
            alt="icon"
            fill
            className="xs:rounded-[12px] object-cover"
            priority={false}
          />
        </div>

        <div className="md:mix-w-[712px] relative mb-[24px] hidden w-full md:block md:h-[176px] lg:order-2 lg:m-0 lg:hidden">
          <Image
            src={FreeTrial768}
            alt="icon"
            fill
            className="xs:rounded-[12px] object-cover"
            priority={false}
          />
        </div>

        <div className="3xl:hidden relative mb-[24px] hidden w-full lg:order-2 lg:m-0 lg:block lg:h-[368px] lg:min-w-[476px]">
          <Image
            src={FreeTrial1024}
            alt="icon"
            fill
            className="xs:rounded-[12px] object-cover"
            priority={false}
          />
        </div>

        <div className="3xl:block 3xl:min-w-[748px] 3xl:h-[502px] 3xl: relative mb-[24px] hidden w-full lg:order-2 lg:m-0">
          <Image
            src={FreeTrialBg}
            alt="icon"
            fill
            className="xs:rounded-[12px] 3xl:rounded-[36px] object-cover lg:rounded-[20px]"
            priority={false}
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

          <div className="3xl:max-w-[334px] lg:max-w-[291px]">
            <div className="mb-[8px] flex items-center justify-center lg:place-content-start">
              <button className="3xl:px-[48px] 3xl:py-[16px] 3xl:w-[334px] cursor-pointer rounded-[12px] bg-[#FFFFFF] px-[40px] py-[12px] lg:w-[291px]">
                <span className="leading-[100%] font-bold tracking-[-0.02em] text-[#0D8AF2]">
                  Start with a free 3-day trial
                </span>
              </button>
            </div>

            <div className="3xl:text-center pb-[24px] text-center text-[10px] leading-[160%] font-medium tracking-[-0.02em] text-[#FFFFFF]/50 lg:mx-auto lg:pb-0 lg:text-left lg:text-[12px]">
              Cancel anytime. No contracts. Pick up where you left off
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
