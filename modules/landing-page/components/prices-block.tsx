import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import cn from "classnames"
import { Card, CardContent } from "@/shared/components/ui/card"

type PriceRange = "monthly" | "yearly"

export function PricesBlock() {
  const [priceRange, setPriceRange] = useState<PriceRange>("monthly")

  return (
    <div className="px-[16px] mb-[40px]">
      <h2 className="pt-[50px] text-[32px] leading-[100%] tracking-[-0.06em] font-medium text-center mb-[40px]">
        Free to start
      </h2>

      <div className="grid grid-cols-2 mb-[40px] font-medium text-[12px] leading-[120%] tracking-[-0.02em] text-center gap-[4px]">
        <div
          onClick={() => setPriceRange("monthly")}
          className={cn(
            "px-[42px] pb-[8px] cursor-pointer transition-all duration-300",
            priceRange === "monthly"
              ? "text-[#0D8AF2] border-b-[1px] border-[#0D8AF2]"
              : "text-[#CCCCCC] border-b-[1px] border-transparent"
          )}>Monthly billing</div>

        <div
          onClick={() => setPriceRange("yearly")}
          className={cn(
            "px-[42px] pb-[8px] cursor-pointer transition-all duration-300",
            priceRange === "yearly"
              ? "text-[#0D8AF2] border-b-[1px] border-[#0D8AF2]"
              : "text-[#CCCCCC] border-b-[1px] border-transparent"
          )}>Yearly billing</div>

      </div>

      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "start",     // важно — выравнивание по левому краю
            loop: false,        // или true, если хочешь бесконечную прокрутку
          }}
          className="w-full"    // убираем max-w, чтобы занимал всю ширину экрана
        >
          <CarouselContent className="-ml-4">   {/* отрицательный отступ для компенсации pl-4 */}
            {Array.from({ length: 3 }).map((_, index) => (   // увеличил до 5 для примера
              <CarouselItem
                key={index}
                className="pl-4 basis-auto"   // basis-auto + фиксированная ширина внутри
              >
                <div className="p-1">
                  <Card className="w-[290px]">   {/* фиксированная ширина здесь */}
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

    </div>)
}