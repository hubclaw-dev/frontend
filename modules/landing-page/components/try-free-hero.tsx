import { CTAButton } from '@/shared/components/ui/Button/cta-button'
import VagueCirclesImage from '../images/vague-circles.png'
import Image from "next/image"

export function TryFreeHeroSection() {
  return (
    <div className="grid grid-col place-items-center block px-[16px] mb-[50px] mt-[90px]">
      <div className="flex gap-4 mb-[16px]">
        <Image src={VagueCirclesImage} alt="vague circles" width={VagueCirclesImage.width / 4} height={VagueCirclesImage.height / 4} />
        <p className="text-[#999999] font-regular text-[10px] leading-[120%]">
          Trusted by{' '}
          <span className="text-[#0D8AF2] dark:text-blue-500 font-medium">
            10,000+
          </span>{' '}
          people <br /> running personal agents
        </p>
      </div>

      <div className="text-center mb-[32px]">
        <p className="text-[#CCCCCC] text-[40px] font-medium">
          Chatbots just talk
        </p>
        <p className="text-[40px] font-medium tracking-[-0.06em] leading-[100%]">
          Your agent gets things <span className="text-[#0188FD]">done</span>
        </p>
      </div>

      <div className="text-center mb-[32px]">
        <p className="text-[12px] text-[#808080]">
          HubClaw agents work on their own - researching, deciding, executing. You brief them once in Telegram. They handle the rest. No prompts. No babysitting. No technical setup
        </p>
      </div>


      <div className="grid grid-col gap-[8px]">
        <CTAButton text="Try for free" />
        <p className="text-[#B3B3B3] text-[10px] font-medium">No technical skill required. Cancel anytime</p>
      </div>
    </div>
  )
}