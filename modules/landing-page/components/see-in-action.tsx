import { CTAButton } from "@/shared/components/ui/Button/cta-button";
import { SeeInActionBlock } from "./see-in-action-block";

const SECTION_BLOCKS = [
  {
    id: 1,
    title: "Before",
    desc: "You open ChatGPT. You write the prompt. You wait. You read. You copy. You paste. You repeat",
  },
  {
    id: 2,
    title: "Agitation",
    desc: "Meanwhile - your competitor's prices changed this morning. A market signal appeared at 7am. A client email is sitting unanswered. Three things slipped while you were handling one. Your AI saw none of it. It was waiting for you to ask",
  },
  {
    id: 3,
    title: "After",
    desc: "HubClaw agents don't wait. They wake up, check what matters, act on what they can, and tell you only what needs you",
  },
];

export function SeeInActionSection() {
  return (
    <div className="mb-[100px] px-[16px]">
      <div className="mb-[40px] text-center text-[32px] leading-[100%] font-medium tracking-[-0.06em]">
        <span className="text-[#CCCCCC]">
          Every day, <br /> you&apos;re doing work that
        </span>{" "}
        <br /> agent should be doing
      </div>

      <div className="mb-[40px] flex flex-col justify-center gap-[16px] sm:flex-row">
        {SECTION_BLOCKS.map((block) => (
          <SeeInActionBlock
            key={block.id}
            title={block.title}
            desc={block.desc}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <CTAButton text="See it in action" />
      </div>
    </div>
  );
}
