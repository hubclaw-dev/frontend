import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full px-6 py-28">
      <div className="mx-auto max-w-5xl text-center flex flex-col items-center gap-8">
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          You have an AI that answers questions.
          <br />
          <span className="text-muted-foreground">
            We give you one that gets things done.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          HubClaw agents work on their own — researching, deciding, executing.
          You brief them once in Telegram. They handle the rest.
          No prompts. No babysitting. No technical setup.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 pt-2">
          <Button size="lg" className="cursor-pointer text-base px-8 py-6">
            Try your agent for free
          </Button>

          <p className="text-sm text-muted-foreground">
            No technical skill required. Cancel anytime.
          </p>
        </div>

        {/* Social Proof */}
        <div className="pt-10 text-sm text-muted-foreground border-t w-full max-w-3xl">
          <p>
            <span className="font-medium text-foreground">
              10,000+ people
            </span>{" "}
            running personal agents · From booking restaurants to trading stocks
          </p>
        </div>

      </div>
    </section>
  )
}