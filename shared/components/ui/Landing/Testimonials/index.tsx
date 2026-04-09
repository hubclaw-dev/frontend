import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/shared/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I told it to track three competitors and send me a morning briefing. It did. Every day. Without me asking again. That was two months ago.",
      author: "Small business owner, Dubai",
    },
    {
      quote:
        "I'm not technical at all. I just typed what I wanted in Telegram. Now it manages my content calendar, follows up with clients, and books my calls. I genuinely forget it's AI.",
      author: "Marketing consultant, London",
    },
    {
      quote:
        "It made a trade while I was at dinner. Based on signals I set up in five minutes. I checked my phone and it was just - done.",
      author: "Retail investor, Berlin",
    },
  ];

  return (
    <section className="bg-surface w-full px-6 py-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 text-center">
        {/* Headline */}
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          People who stopped doing things themselves.
        </h2>

        {/* Testimonials */}
        <div className="mt-12 grid w-full gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Card
              key={idx}
              className="flex flex-col justify-between p-6 transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">
                  &quot;{t.quote}&quot;
                </CardTitle>
              </CardHeader>
              <CardFooter className="text-muted-foreground pt-4 text-sm">
                {t.author}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
