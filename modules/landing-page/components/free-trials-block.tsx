import Image from "next/image";
import TokensUsedImage from "../images/tokens-used.png";

export function FreeTrialBlock() {
  return (
    <div className="px-[16px] pb-[24px]">
      <div className="rounded-[16px] bg-[#0D8AF2]">
        <div className="mb-[24px] p-[4px]">
          <Image src={TokensUsedImage} alt="icon" />
        </div>
        <div className="mb-[32px] text-center text-[28px] leading-[100%] font-medium tracking-[-0.06em] text-white">
          Right now,{" "}
          <span className="text-white/30">
            something <br /> you care about <br />
          </span>{" "}
          is happening without you
        </div>
        <div className="mb-[32px] text-center text-[16px] leading-[120%] font-medium tracking-[-0.02em] text-white">
          <span className="text-white/30">Your agent would already know.</span>
          <br /> Brief it once - it handles the rest
        </div>

        <div className="mb-[8px] flex items-center justify-center">
          <button className="rounded-[12px] bg-[#FFFFFF] px-[40px] py-[12px]">
            <span className="leading-[100%] font-bold tracking-[-0.02em] text-[#0D8AF2]">
              Start with a free 3-day trial
            </span>
          </button>
        </div>

        <div className="pb-[24px] text-center text-[10px] leading-[160%] font-medium tracking-[-0.02em] text-[#FFFFFF]/50">
          Cancel anytime. No contracts. Pick up where you left off
        </div>
      </div>
    </div>
  );
}
