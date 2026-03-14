import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

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
  ]

  return (
    <section className="w-full px-6 py-28 bg-surface">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-12 text-center">
        
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Three steps. Then it's just — working.
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 w-full mt-8">
          {steps.map((step, idx) => (
            <Card key={idx} className="text-left border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">{`Step ${idx + 1} - ${step.title}`}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}