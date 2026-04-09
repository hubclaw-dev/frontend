import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import cn from "classnames";
import { Card, CardContent } from "@/shared/components/ui/card";

type PriceRange = "monthly" | "yearly";

export function PricesBlock() {
  const [priceRange, setPriceRange] = useState<PriceRange>("monthly");

  return (
    <div className="mb-[40px] px-[16px]">
      <h2 className="mb-[40px] pt-[50px] text-center text-[32px] leading-[100%] font-medium tracking-[-0.06em]">
        Free to start
      </h2>

      <div className="mb-[40px] grid grid-cols-2 gap-[4px] text-center text-[12px] leading-[120%] font-medium tracking-[-0.02em]">
        <div
          onClick={() => setPriceRange("monthly")}
          className={cn(
            "cursor-pointer px-[42px] pb-[8px] transition-all duration-300",
            priceRange === "monthly"
              ? "border-b-[1px] border-[#0D8AF2] text-[#0D8AF2]"
              : "border-b-[1px] border-transparent text-[#CCCCCC]",
          )}
        >
          Monthly billing
        </div>

        <div
          onClick={() => setPriceRange("yearly")}
          className={cn(
            "cursor-pointer px-[42px] pb-[8px] transition-all duration-300",
            priceRange === "yearly"
              ? "border-b-[1px] border-[#0D8AF2] text-[#0D8AF2]"
              : "border-b-[1px] border-transparent text-[#CCCCCC]",
          )}
        >
          Yearly billing
        </div>
      </div>

      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "start", // важно — выравнивание по левому краю
            loop: false, // или true, если хочешь бесконечную прокрутку
          }}
          className="w-full" // убираем max-w, чтобы занимал всю ширину экрана
        >
          <CarouselContent className="-ml-4">
            {" "}
            {/* отрицательный отступ для компенсации pl-4 */}
            {Array.from({ length: 3 }).map(
              (
                _,
                index, // увеличил до 5 для примера
              ) => (
                <CarouselItem
                  key={index}
                  className="basis-auto pl-4" // basis-auto + фиксированная ширина внутри
                >
                  <div className="p-1">
                    <Card className="w-[290px]">
                      {" "}
                      {/* фиксированная ширина здесь */}
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ),
            )}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
