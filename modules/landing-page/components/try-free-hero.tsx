import { CTAButton } from "@/shared/components/ui/Button/cta-button";
import VagueCirclesImage from "../images/vague-circles.png";
import Image from "next/image";

export function TryFreeHeroSection() {
  return (
    <div className="grid-col mt-[90px] mb-[50px] block grid place-items-center px-[16px]">
      <div className="mb-[16px] flex gap-4">
        <Image
          src={VagueCirclesImage}
          alt="vague circles"
          width={VagueCirclesImage.width / 4}
          height={VagueCirclesImage.height / 4}
        />
        <p className="font-regular text-[10px] leading-[120%] text-[#999999]">
          Trusted by{" "}
          <span className="font-medium text-[#0D8AF2] dark:text-blue-500">
            10,000+
          </span>{" "}
          people <br /> running personal agents
        </p>
      </div>

      <div className="mb-[32px] text-center">
        <p className="text-[40px] font-medium text-[#CCCCCC]">
          Chatbots just talk
        </p>
        <p className="text-[40px] leading-[100%] font-medium tracking-[-0.06em]">
          Your agent gets things <span className="text-[#0188FD]">done</span>
        </p>
      </div>

      <div className="mb-[32px] text-center">
        <p className="text-[12px] text-[#808080]">
          HubClaw agents work on their own - researching, deciding, executing.
          You brief them once in Telegram. They handle the rest. No prompts. No
          babysitting. No technical setup
        </p>
      </div>

      <div className="grid-col grid gap-[8px]">
        <CTAButton text="Try for free" />
        <p className="text-[10px] font-medium text-[#B3B3B3]">
          No technical skill required. Cancel anytime
        </p>
      </div>
    </div>
  );
}
