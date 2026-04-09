import Image from "next/image"
import TokensUsedImage from "../images/tokens-used.png"

export function FreeTrialBlock() {
  return (
    <div className="px-[16px] pb-[24px]">
      <div className="bg-[#0D8AF2] rounded-[16px]">
        <div className="p-[4px] mb-[24px]">
          <Image src={TokensUsedImage} alt="icon" />
        </div>
        <div className="text-white font-medium text-[28px] leading-[100%] tracking-[-0.06em] text-center mb-[32px]">
          Right now, <span className="text-white/30">something <br /> you care about <br /></span> is happening without you
        </div>
        <div className="text-white font-medium text-[16px] leading-[120%] tracking-[-0.02em] text-center mb-[32px]">
          <span className="text-white/30">Your agent would already know.</span><br /> Brief it once - it handles the rest
        </div>

        <div className="flex items-center justify-center mb-[8px]">
          <button className="bg-[#FFFFFF] px-[40px] py-[12px] rounded-[12px]">
            <span className="text-[#0D8AF2] font-bold leading-[100%] tracking-[-0.02em]">Start with a free 3-day trial</span>
          </button>
        </div>

        <div className="text-[#FFFFFF]/50 font-medium text-[10px] tracking-[-0.02em] leading-[160%] text-center pb-[24px]">
          Cancel anytime. No contracts. Pick up where you left off
        </div>
      </div>
    </div>
  )
}