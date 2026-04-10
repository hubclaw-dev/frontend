import { CTAButton } from "@/shared/components/ui/Button/cta-button";
import VagueCirclesImage from "../images/vague-circles.png";
import Image from "next/image";

export function TryFreeHeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[32px] my-[50px] px-[16px] md:px-[20px] lg:my-[64px] lg:max-w-[1520px] lg:mx-auto">
      <div className="grid-col block grid place-items-center md:place-items-start">
        <div className="mb-[16px] flex gap-4">
          <Image
            src={VagueCirclesImage}
            alt="vague circles"
            width={VagueCirclesImage.width / 4}
            height={VagueCirclesImage.height / 4}
          />
          <p className="font-regular text-[10px] leading-[120%] text-[#999999] lg:text-[12px]">
            Trusted by{" "}
            <span className="font-medium text-[#0D8AF2] dark:text-blue-500">
              10,000+
            </span>{" "}
            people <br /> running personal agents
          </p>
        </div>

        <div className="mb-[32px] text-center md:text-left">
          <p className="text-[40px] leading-[100%] font-medium tracking-[-0.06em] md:text-[44px] lg:text-[54px] 3xl:text-[96px]">
            <span className="font-medium text-[#CCCCCC]">
              Chatbots just talk <br />
            </span>Your agent gets things <span className="text-[#0188FD]">done</span>
          </p>
        </div>

        <div className="mb-[32px] text-center md:text-left">
          <p className="text-[12px] text-[#808080] lg:text-[14px] 3xl:text-[20px]">
            HubClaw agents work on their own - researching, deciding, executing.
            You brief them once in Telegram. They handle the rest. No prompts. No
            babysitting. No technical setup
          </p>
        </div>

        <div className="grid-col grid gap-[8px]">
          <CTAButton text="Try for free" classNames="lg:py-[16px] px-[80px]" />
          <p className="text-[10px] font-medium text-[#B3B3B3]">
            No technical skill required. Cancel anytime
          </p>
        </div>
      </div>

      <VideoBlock />
    </div>

  );
}

function VideoBlock() {

  return (
    <div className="my-[50px] md:my-[0px] border border-1 border-[#F0F0F0] rounded-[16px] w-[328px] h-[300px] md:w-full md:h-full mx-auto flex items-center justify-center">
      <div className="">
        <CTAButton text="Create New Agent" />
      </div>
    </div>
  )
}