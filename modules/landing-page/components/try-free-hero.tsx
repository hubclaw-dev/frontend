import { CTAButton } from "@/shared/components/ui/Button/cta-button";
import VagueCirclesImage from "../images/circles-gray.svg";
import Image from "next/image";

interface Props {
  id?: string;
}

export function TryFreeHeroSection(props: Props) {
  const { id } = props;

  return (
    <div
      id={id}
      className="3xl:my-[100px] 3xl:mt-[167px] mt-[90px] mb-[50px] grid grid-cols-1 px-[16px] md:mt-[130px] md:grid-cols-2 md:gap-[32px] md:px-[20px] lg:mx-auto lg:my-[64px] lg:max-w-[1520px]"
    >
      <div className="grid-col block grid place-items-center md:place-items-start">
        <div className="3xl:mb-[64px] xs:gap-[8px] mb-[16px] flex gap-4 lg:mb-[24px]">
          <Image
            src={VagueCirclesImage}
            alt="vague circles"
            width={VagueCirclesImage.width}
            height={VagueCirclesImage.height}
            className="xs:h-[24px] xs:w-[60px] 3xl:h-[32px] 3xl:w-[92px] lg:h-[28px] lg:w-[76px]"
          />
          <p className="font-regular text-[10px] leading-[120%] text-[#999999] lg:text-[12px]">
            Trusted by{" "}
            <span className="font-medium text-[#0D8AF2] dark:text-blue-500">
              10,000+
            </span>{" "}
            people <br /> running personal agents
          </p>
        </div>

        <div className="3xl:mb-[64px] mb-[32px] text-center md:text-left lg:mb-[40px]">
          <p className="3xl:text-[96px] text-[40px] leading-[100%] font-medium tracking-[-0.06em] md:text-[44px] lg:text-[54px]">
            <span className="font-medium text-[#CCCCCC]">
              Chatbots just talk <br />
            </span>
            Your agent gets things <span className="text-[#0188FD]">done</span>
          </p>
        </div>

        <div className="3xl:mb-[64px] mb-[32px] text-center md:text-left lg:mb-[40px]">
          <p className="3xl:text-[20px] text-[12px] text-[#808080] lg:text-[14px]">
            HubClaw agents work on their own - researching, deciding, executing.
            You brief them once in Telegram. They handle the rest. No prompts.
            No babysitting. No technical setup
          </p>
        </div>

        <div className="grid-col grid gap-[8px]">
          <CTAButton
            text="Try for free"
            classNames="md:text-[14px] md:py-[12px] md:px-[57px] lg:py-[16px] lg:px-[80px] 3xl:px-[114px] lg:text-[20px]"
          />
          <p className="text-center text-[10px] font-medium text-[#B3B3B3]">
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
    <div className="mx-auto my-[50px] flex h-[300px] w-[328px] items-center justify-center rounded-[16px] border border-1 border-[#F0F0F0] md:my-[0px] md:h-full md:w-full">
      <div className="">
        <CTAButton text="Create New Agent" />
      </div>
    </div>
  );
}
