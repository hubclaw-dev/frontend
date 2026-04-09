import { Button } from "@/shared/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full px-6 py-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        {/* Headline */}
        <h1 className="text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
          You have an AI that answers questions.
          <br />
          <span className="text-muted-foreground">
            We give you one that gets things done.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed md:text-xl">
          HubClaw agents work on their own — researching, deciding, executing.
          You brief them once in Telegram. They handle the rest. No prompts. No
          babysitting. No technical setup.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 pt-2">
          <Button size="lg" className="cursor-pointer px-8 py-6 text-base">
            Try your agent for free
          </Button>

          <p className="text-muted-foreground text-sm">
            No technical skill required. Cancel anytime.
          </p>
        </div>

        {/* Social Proof */}
        <div className="text-muted-foreground w-full max-w-3xl border-t pt-10 text-sm">
          <p>
            <span className="text-foreground font-medium">10,000+ people</span>{" "}
            running personal agents · From booking restaurants to trading stocks
          </p>
        </div>
      </div>
    </section>
  );
}
