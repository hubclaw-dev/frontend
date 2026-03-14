import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

export default function SkillsSection(props: {id: string}) {
  return (
    <section id={props.id} className="w-full px-6 py-28">
      <div className="mx-auto max-w-6xl flex flex-col items-center text-center gap-8">
        
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Your agent can do almost anything.
          <br />
          <span className="text-muted-foreground">
            And what it can't do today — it figures out tomorrow.
          </span>
        </h2>

        {/* Body */}
        <p className="text-lg text-muted-foreground max-w-3xl">
          HubClaw comes with a Skills Hub — a growing library of capabilities your
          agent can tap into. Brief it on a goal. It finds what it needs to get
          there on its own.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-10">
          
          <Card className="text-left">
            <CardHeader>
              <CardTitle>For your business</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Monitors competitors daily and sends you a briefing with what changed
              and what it means. Tracks industry news and surfaces what's relevant
              to you — before your morning coffee.
            </CardContent>
          </Card>

          <Card className="text-left">
            <CardHeader>
              <CardTitle>For your money</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Watches market signals and executes trades based on rules you set.
              No dashboards to check. No alerts to act on. It acts.
            </CardContent>
          </Card>

          <Card className="text-left">
            <CardHeader>
              <CardTitle>For your day</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Books restaurants, schedules meetings, handles routine emails.
              The small stuff that eats your time — gone.
            </CardContent>
          </Card>

          <Card className="text-left">
            <CardHeader>
              <CardTitle>For your projects</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Researches, writes, builds. Give it a goal — it breaks it down,
              executes step by step, and ships.
            </CardContent>
          </Card>

        </div>

        {/* Closing line */}
        <p className="text-muted-foreground text-lg max-w-3xl mt-8">
          There's a Skills Hub with hundreds of capabilities — and it keeps
          growing. If your agent doesn't know how to do something, it finds a way
          to learn.
        </p>

      </div>
    </section>
  )
}