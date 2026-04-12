import BlueCube from "../images/blue-cube.png";
import DollarSign from "../images/dollar-sign.png";
import CalendarSign from "../images/calendar-sign.png";
import CodeSign from "../images/code-sign.png";
import { LearnBlock } from "./learn-block";
import { CTAButton } from "@/shared/components/ui/Button/cta-button";

const LEARN_BLOCKS = [
  {
    id: 1,
    icon: BlueCube,
    color: "#0D8AF21A",
    title: "For your business",
    desc: "Monitors competitors daily and sends you a briefing with what changed and what it means. Tracks industry news and surfaces what's relevant to you — before your morning coffee",
  },
  {
    id: 2,
    icon: DollarSign,
    color: "#16A34A1A",
    title: "For your money",
    desc: "Watches market signals and executes trades based on rules you set. No dashboards to check. No alerts to act on. It acts",
  },
  {
    id: 3,
    icon: CalendarSign,
    color: "#EA580C1A",
    title: "For your day",
    desc: "Books restaurants, schedules meetings, handles routine emails. The small stuff that eats your time — gone",
  },
  {
    id: 4,
    icon: CodeSign,
    color: "#9333EA1A",
    title: "For your projects",
    desc: "Researches, writes, builds. Give it a goal — it breaks it down, executes step by step, and ships",
  },
];

export function LearnTheRest() {
  return (
    <div className="3xl:max-w-[1520px] 3xl:mx-auto px-[16px]">
      <div className="3xl:flex-row 3xl:justify-between mb-[40px] flex flex-col gap-[24px] text-center lg:mb-[64px]">
        <p className="3xl:text-[64px] 3xl:text-left text-[32px] leading-[100%] font-medium tracking-[-0.06em] md:text-[36px] lg:text-[40px]">
          <span className="text-[#CCCCCC]">Does almost anything</span>
          <br />
          Learns the rest
        </p>
        <p className="3xl:text-[20px] 3xl:mx-0 3xl:mt-auto 3xl:text-right 3xl:w-[720px] text-[12px] leading-[120%] font-medium tracking-[-0.02em] text-[#808080] md:mx-auto md:w-[460px] lg:w-[600px] lg:text-[14px]">
          HubClaw comes with a Skills Hub - a growing library of capabilities
          your agent can tap into. Brief it on a goal. It finds what it needs to
          get there on its own.
        </p>
      </div>

      <div className="3xl:mb-[96px] 3xl:h-[253px] mb-[40px] grid grid-cols-1 gap-[16px] md:grid-cols-2 lg:mx-auto lg:mb-[64px] lg:max-w-[1520px] lg:grid-cols-4">
        {LEARN_BLOCKS.map((block) => (
          <LearnBlock
            key={block.id}
            icon={block.icon}
            color={block.color}
            title={block.title}
            desc={block.desc}
          />
        ))}
      </div>

      <div className="3xl:max-w-[504px] 3xl:text-[16px] mb-[40px] text-center text-[12px] leading-[160%] font-medium tracking-[-0.02em] text-[#B3B3B3] md:mx-auto md:max-w-[460px] lg:mb-[32px] lg:max-w-[600px] lg:text-[14px]">
        There&apos;s a Skills Hub with hundreds of capabilities - and it keeps
        growing. If your agent doesn&apos;t know how to do something, it finds a
        way to learn
      </div>

      <div className="mb-[100px] flex justify-center">
        <CTAButton
          text="Explore all skills"
          classNames="text-[14px] lg:text-[20px] lg:py-[16px] lg:px-[48px] lg:rounded-[16px]"
        />
      </div>
    </div>
  );
}
