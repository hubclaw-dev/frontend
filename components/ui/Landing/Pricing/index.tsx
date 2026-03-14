import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function PricingSection(props: { id: string }) {
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
  ];

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
  ];

  return (
    <section id={props.id} className="bg-muted w-full px-6 py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 text-center">
        {/* Headline */}
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Free to start.
          <br />
          <span className="text-foreground/80">
            Probably the best $19 you'll spend.
          </span>
        </h2>

        {/* Plans */}
        <div className="mt-8 grid w-full gap-6 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`flex flex-col justify-between border p-6 transition-shadow hover:shadow-lg ${
                plan.title.includes("PRO") ? "border-primary" : ""
              }`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold">
                  {plan.title}
                </CardTitle>
                <p className="mt-2 text-2xl font-semibold">{plan.price}</p>
              </CardHeader>
              <CardContent className="text-muted-foreground flex flex-1 flex-col gap-2 text-sm">
                <ul className="flex flex-col gap-1">
                  {plan.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
                <Button className="mt-6 cursor-pointer">
                  Start with a free 3-day trial
                </Button>
                <p className="text-muted-foreground mt-2 text-xs">
                  Cancel anytime. No contracts. Pick up where you left off.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16 w-full max-w-2xl text-left">
          <h3 className="mb-6 text-center text-2xl font-semibold">FAQ</h3>
          <Accordion type="single" collapsible>
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-b"
              >
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
