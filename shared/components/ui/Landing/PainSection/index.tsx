import { Button } from "@/shared/components/ui/button";

export default function PainSection() {
  return (
    <section className="w-full px-6 py-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        {/* Headline */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Every day, you're doing work your agent should be doing.
          </h2>
        </div>

        {/* Content blocks */}
        <div className="grid gap-10 text-left md:grid-cols-3">
          {/* Before */}
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
              Before
            </p>

            <p className="text-muted-foreground leading-relaxed">
              You open ChatGPT. You write the prompt. You wait. You read. You
              copy. You paste. You repeat.
            </p>

            <p className="font-medium">Every. Single. Time.</p>
          </div>

          {/* Agitation */}
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
              Meanwhile
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Your competitor's prices changed this morning. A market signal
              appeared at 7am. A client email is sitting unanswered. Three
              things slipped while you were handling one.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Your AI saw none of it. It was waiting for you to ask.
            </p>
          </div>

          {/* After */}
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
              With HubClaw
            </p>

            <p className="text-muted-foreground leading-relaxed">
              HubClaw agents don't wait. They wake up, check what matters, act
              on what they can, and tell you only what needs you.
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
  );
}
