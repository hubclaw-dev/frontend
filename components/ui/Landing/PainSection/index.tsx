import { Button } from "@/components/ui/button"

export default function PainSection() {
  return (
    <section className="w-full px-6 py-28">
      <div className="mx-auto max-w-5xl flex flex-col gap-16">

        {/* Headline */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Every day, you're doing work your agent should be doing.
          </h2>
        </div>

        {/* Content blocks */}
        <div className="grid md:grid-cols-3 gap-10 text-left">

          {/* Before */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Before
            </p>

            <p className="text-muted-foreground leading-relaxed">
              You open ChatGPT. You write the prompt. You wait. You read.
              You copy. You paste. You repeat.
            </p>

            <p className="font-medium">
              Every. Single. Time.
            </p>
          </div>

          {/* Agitation */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Meanwhile
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Your competitor's prices changed this morning. A market signal
              appeared at 7am. A client email is sitting unanswered.
              Three things slipped while you were handling one.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Your AI saw none of it. It was waiting for you to ask.
            </p>
          </div>

          {/* After */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              With HubClaw
            </p>

            <p className="text-muted-foreground leading-relaxed">
              HubClaw agents don't wait. They wake up, check what matters,
              act on what they can, and tell you only what needs you.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center pt-6">
          <Button size="lg" variant="outline">
            See it in action →
          </Button>
        </div>

      </div>
    </section>
  )
}