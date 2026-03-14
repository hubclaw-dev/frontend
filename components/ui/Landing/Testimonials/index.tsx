import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

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
  ]

  return (
    <section className="w-full px-6 py-28 bg-surface">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-12 text-center">
        
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          People who stopped doing things themselves.
        </h2>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 w-full mt-12">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="flex flex-col justify-between p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">&quot;{t.quote}&quot;</CardTitle>
              </CardHeader>
              <CardFooter className="pt-4 text-sm text-muted-foreground">
                {t.author}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}