import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export default function PricingSection(props:{id: string}) {
  const plans = [
    {
      title: "STARTER",
      price: "$9/mo",
      features: [
        "Core Skills Hub access",
        "Works in Telegram",
        "Basic memory",
        "Standard response speed",
        "Great for getting started",
      ],
    },
    {
      title: "PRO ★ Most popular",
      price: "$29/mo",
      features: [
        "Full Skills Hub access",
        "Deep memory - learns how you work over time",
        "Anti-prompt injection protection",
        "Priority response speed",
        "Early access to new skills",
      ],
    },
    {
      title: "MAX",
      price: "$79/mo",
      features: [
        "Everything in Pro",
        "White-glove onboarding",
        "Custom skill requests",
        "For people who want their agent running everything",
      ],
    },
  ]

  const faqs = [
    {
      question: "Do I need any technical skills?",
      answer: "Nothing. If you can send a Telegram message, you're ready.",
    },
    {
      question: "Does it remember what I told it last week?",
      answer:
        "Yes. It builds context over time. The longer it works with you, the less you need to explain.",
    },
    {
      question: "What if it can't do something I need?",
      answer:
        "It figures it out. The agent searches for a path, tries what's available, and gets as close as possible. If a capability is missing entirely — you can request it and we'll add it.",
    },
    {
      question: "Can I use my own OpenAI or Anthropic key?",
      answer:
        "Yes. All plans support BYOK - you stay in control of your model and costs.",
    },
  ]

  return (
    <section id={props.id} className="w-full px-6 py-28 bg-muted">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-12 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Free to start.
          <br />
          <span className="text-foreground/80">
            Probably the best $19 you'll spend.
          </span>
        </h2>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 w-full mt-8">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`border p-6 flex flex-col justify-between hover:shadow-lg transition-shadow ${
                plan.title.includes("PRO") ? "border-primary" : ""
              }`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold">{plan.title}</CardTitle>
                <p className="text-2xl font-semibold mt-2">{plan.price}</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-2 text-sm text-muted-foreground">
                <ul className="flex flex-col gap-1">
                  {plan.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
                <Button className="cursor-pointer mt-6">Start with a free 3-day trial</Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Cancel anytime. No contracts. Pick up where you left off.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ */}
        <div className="w-full max-w-2xl mt-16 text-left">
          <h3 className="text-2xl font-semibold mb-6 text-center">FAQ</h3>
          <Accordion type="single" collapsible>
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b">
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}