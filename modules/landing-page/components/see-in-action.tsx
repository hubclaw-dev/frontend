import { CTAButton } from "@/shared/components/ui/Button/cta-button";
import { SeeInActionBlock } from "./see-in-action-block";
import BeforeImage from "../images/see-in-action/before-img.svg";
import AgitationImage from "../images/see-in-action/agitation-img.svg";
import AfterImage from "../images/see-in-action/after-img.svg";

const SECTION_BLOCKS = [
  {
    id: 1,
    title: "Before",
    image: BeforeImage,
    desc: "You open ChatGPT. You write the prompt. You wait. You read. You copy. You paste. You repeat",
  },
  {
    id: 2,
    title: "Agitation",
    image: AgitationImage,
    desc: "Meanwhile - your competitor's prices changed this morning. A market signal appeared at 7am. A client email is sitting unanswered. Three things slipped while you were handling one. Your AI saw none of it. It was waiting for you to ask",
  },
  {
    id: 3,
    title: "After",
    image: AfterImage,
    desc: "HubClaw agents don't wait. They wake up, check what matters, act on what they can, and tell you only what needs you",
  },
];

export function SeeInActionSection() {
  return (
    <div className="3xl:max-w-[1520px] 3xl:mx-auto mb-[100px] px-[16px]">
      <div className="mb-[40px] block text-center text-[32px] leading-[100%] font-medium tracking-[-0.06em] md:hidden">
        <span className="text-[#CCCCCC]">
          Every day, <br /> you&apos;re doing work that
        </span>{" "}
        <br /> agent should be doing
      </div>

      <div className="mb-[40px] hidden text-center text-[36px] leading-[100%] font-medium tracking-[-0.06em] md:block lg:hidden">
        <span className="text-[#CCCCCC]">
          Every day, you&apos;re doing work that
        </span>{" "}
        <br /> agent should be doing
      </div>

      <div className="3xl:hidden mb-[64px] hidden text-center text-[40px] leading-[100%] font-medium tracking-[-0.06em] lg:block">
        <span className="text-[#CCCCCC]">
          Every day, you&apos;re doing work that
        </span>{" "}
        <br /> agent should be doing
      </div>

      <div className="3xl:block mb-[64px] hidden text-left text-[64px] leading-[100%] font-medium tracking-[-0.06em]">
        <span className="text-[#CCCCCC]">
          Every day, you&apos;re doing work that
        </span>{" "}
        <br /> agent should be doing
      </div>

      <div className="3xl:mb-[96px] mb-[40px] flex flex-col justify-center gap-[16px] md:flex-row lg:mb-[64px]">
        {SECTION_BLOCKS.map((block) => (
          <SeeInActionBlock
            key={block.id}
            title={block.title}
            desc={block.desc}
            className="3xl:h-[385px] md:h-[312px] lg:h-[302px]"
            image={block.image}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <CTAButton text="See it in action" />
      </div>
    </div>
  );
}
