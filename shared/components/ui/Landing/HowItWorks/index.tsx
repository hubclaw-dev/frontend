import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/shared/components/ui/card";

export default function HowItWorks() {
  const steps = [
    {
      title: "Create your agent via BotFather",
      description:
        "Open Telegram, go to BotFather, create a bot in two taps. That's your agent's home. No app downloads. No accounts. You already have it.",
    },
    {
      title: "Connect your AI",
      description:
        "Use your own OpenAI or Anthropic subscription — or bring your API key. Your agent, your model, your cost.",
    },
    {
      title: "Say hello. Tell it what matters.",
      description:
        "Your first message sets everything in motion. Tell it what you're working on, what you want tracked, what you hate dealing with. It listens. Then it starts.",
    },
  ];

  return (
    <section className="bg-surface w-full px-6 py-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 text-center">
        {/* Headline */}
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Three steps. Then it&apos;s just — working.
        </h2>

        {/* Steps */}
        <div className="mt-8 grid w-full gap-6 md:grid-cols-3">
          {steps.map((step, idx) => (
            <Card
              key={idx}
              className="border text-left transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">{`Step ${idx + 1} - ${step.title}`}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
