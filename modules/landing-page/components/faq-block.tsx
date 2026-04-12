import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";

const FAQ_ITEMS = [
  {
    id: "item-1",
    question: "Do I need any technical skills?",
    answer: "Nothing. If you can send a Telegram message, you're ready.",
  },
  {
    id: "item-2",
    question: "Does it remember what I told it last week?",
    answer:
      "Yes, the bot remembers the context of previous messages (depending on memory settings).",
  },
  {
    id: "item-3",
    question: "What if it can't do something I need?",
    answer:
      "In that case, it will honestly tell you about it and suggest alternative options.",
  },
  {
    id: "item-4",
    question: "Can I use my own OpenAI or Anthropic key?",
    answer:
      "Yes, you can connect your own OpenAI or Anthropic API key in the bot settings.",
  },
];

export function FaqBlock() {
  return (
    <div className="3xl:mb-[100px] xs:pt-[40px] 3xl:pt-[96px] mb-[50px] px-[16px] lg:mx-auto lg:mb-[64px] lg:max-w-[1200px] lg:pt-[64px]">
      <div className="mb-[40px] flex flex-col gap-[24px] text-center">
        <p className="text-[24px] leading-[100%] font-medium tracking-[-0.06em] lg:text-[32px]">
          FAQ
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-3"
        defaultValue="item-1"
      >
        {FAQ_ITEMS.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border-border bg-card rounded-xl border p-[16px]"
          >
            <AccordionTrigger className="text-left text-[16px] font-medium hover:no-underline lg:text-[18px]">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground h-fit text-[14px] lg:text-[16px]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
