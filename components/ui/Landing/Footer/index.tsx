import { Button } from "@/components/ui/button"

export default function FooterCTA() {
  return (
    <section className="w-full px-6 py-28 bg-primary text-white">
      <div className="mx-auto max-w-4xl flex flex-col items-center gap-6 text-center">

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Right now, something you care about
          <br />
          is happening without you.
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl max-w-2xl text-white/80">
          Your agent would already know. Brief it once — it handles the rest.
        </p>

        {/* CTA */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <Button size="lg" className="px-10 py-5">
            Start your free trial
          </Button>
          <p className="text-sm text-white/70">
            3 days free. Cancel anytime. Just Telegram — nothing else to install.
          </p>
        </div>
      </div>
    </section>
  )
}