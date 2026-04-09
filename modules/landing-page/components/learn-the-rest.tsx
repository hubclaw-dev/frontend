import BlueCube from "../images/blue-cube.png"
import DollarSign from "../images/dollar-sign.png"
import CalendarSign from "../images/calendar-sign.png"
import CodeSign from "../images/code-sign.png"
import { LearnBlock } from "./learn-block"
import { CTAButton } from "@/shared/components/ui/Button/cta-button"

const LEARN_BLOCKS = [
  {
    id: 1,
    icon: BlueCube,
    color: "#0D8AF21A",
    title: "For your business",
    desc: "Monitors competitors daily and sends you a briefing with what changed and what it means. Tracks industry news and surfaces what's relevant to you — before your morning coffee"
  },
  {
    id: 2,
    icon: DollarSign,
    color: "#16A34A1A",
    title: "For your money",
    desc: "Watches market signals and executes trades based on rules you set. No dashboards to check. No alerts to act on. It acts"
  },
  {
    id: 3,
    icon: CalendarSign,
    color: "#EA580C1A",
    title: "For your day",
    desc: "Books restaurants, schedules meetings, handles routine emails. The small stuff that eats your time — gone"
  },
  {
    id: 4,
    icon: CodeSign,
    color: "#9333EA1A",
    title: "For your projects",
    desc: "Researches, writes, builds. Give it a goal — it breaks it down, executes step by step, and ships"
  },
]

export function LearnTheRest() {
  return (
    <div className="px-[16px]">
      <div className="text-center flex flex-col gap-[24px] mb-[40px]">
        <p className="text-[32px] leading-[100%] tracking-[-0.06em] font-medium"><span className="text-[#CCCCCC]">Does almost anything</span><br />Learns the rest</p>
        <p className="text-[12px] leading-[120%] tracking-[-0.02em] font-medium text-[#808080]">HubClaw comes with a Skills Hub - a growing library of capabilities your agent can tap into. Brief it on a goal. It finds what it needs to get there on its own.</p>
      </div>

      <div className="flex flex-col gap-[16px] mb-[40px]">
        {
          LEARN_BLOCKS.map((block) => <LearnBlock key={block.id} icon={block.icon} color={block.color} title={block.title} desc={block.desc} />)
        }
      </div>

      <div className="text-center font-medium text-[12px] leading-[160%] tracking-[-0.02em] text-[#B3B3B3] mb-[40px]">
        There's a Skills Hub with hundreds of capabilities - and it keeps growing. If your agent doesn't know how to do something, it finds a way to learn
      </div>

      <div className="flex justify-center mb-[100px]">
        <CTAButton text="Explore all skills" />
      </div>
    </div>
  )
}