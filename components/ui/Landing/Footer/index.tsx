import { Button } from "@/components/ui/button";

export default function FooterCTA() {
  return (
    <section className="bg-primary w-full px-6 py-28 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        {/* Headline */}
        <h2 className="text-3xl leading-tight font-bold md:text-5xl">
          Right now, something you care about
          <br />
          is happening without you.
        </h2>

        {/* Subheadline */}
        <p className="max-w-2xl text-lg text-white/80 md:text-xl">
          Your agent would already know. Brief it once — it handles the rest.
        </p>

        {/* CTA */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <Button size="lg" className="px-10 py-5">
            Start your free trial
          </Button>
          <p className="text-sm text-white/70">
            3 days free. Cancel anytime. Just Telegram — nothing else to
            install.
          </p>
        </div>
      </div>
    </section>
  );
}
