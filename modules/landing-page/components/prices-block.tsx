import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import cn from "classnames";
import { Card, CardContent } from "@/shared/components/ui/card";
import StarterBg from "../images/prices/starter-price.svg";
import ProBg from "../images/prices/pro-price.svg";
import MaxBg from "../images/prices/max-price.svg";
import Image from "next/image";
import { CTAButton } from "@/shared/components/ui/Button/cta-button";

type PriceRange = "monthly" | "yearly";

interface PricesCardInterface {
  id: number;
  title: string;
  monthlyPrice: number;
  image: string;
  yearlyPrice: number;
  crossedPrice: number;
  list: string[];
  button: string;
  className?: string;
  priceRange: string;
}

const PRICES = [
  {
    id: 1,
    title: "Starter",
    monthlyPrice: 7,
    image: StarterBg,
    yearlyPrice: 23,
    crossedPrice: 9,
    list: [
      "Core Skills Hub access",
      "Works in Telegram",
      "Basic memory",
      "Standard response speed",
      "Great for getting started",
    ],
    button: "Select Starter",
  },
  {
    id: 2,
    title: "PRO",
    monthlyPrice: 23,
    image: ProBg,
    yearlyPrice: 43,
    crossedPrice: 29,
    list: [
      "Full Skills Hub access",
      "Deep memory - learns how you work over time",
      "Anti-prompt injection protection",
      "Priority response speed",
      "Early access to new skills",
    ],
    button: "Get Pro",
  },
  {
    id: 3,
    title: "Max",
    monthlyPrice: 63,
    image: MaxBg,
    yearlyPrice: 79,
    crossedPrice: 9,
    list: [
      "Everything in Pro",
      "White-glove onboarding",
      "Custom skill requests",
      "For people who want their agent running everything",
    ],
    button: "Select Max",
  },
];

export function PricesBlock() {
  const [priceRange, setPriceRange] = useState<PriceRange>("yearly");

  return (
    <div className="3xl:max-w-[1200px] 3xl:mx-auto 3xl:pb-[96px] pb-[40px] lg:pb-[64px]">
      <h2 className="3xl:pt-[100px] 3xl:text-[64px] mb-[40px] pt-[50px] pr-[16px] text-center text-[32px] leading-[100%] font-medium tracking-[-0.06em] md:text-[36px] lg:mb-[64px] lg:text-[40px]">
        Free to start
      </h2>

      <div
        className={cn(
          "grid grid-cols-2 gap-[4px] px-[16px] text-center text-[12px] leading-[120%] font-medium tracking-[-0.02em]",
          priceRange === "yearly" ? "xs:mb-[12]" : "mb-[40px]",
        )}
      >
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

      {priceRange === "yearly" && (
        <div className="xs:mb-[16px] text-center text-[10px] leading-[120%] tracking-[-0.02em] text-[#B3B3B3] md:text-[12px] lg:mb-[32px] lg:text-[14px]">
          Switch to Yearly to save <span className="text-[#000000]">20%</span>
        </div>
      )}

      <div className="block flex justify-center px-[16px] md:hidden">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="">
            {PRICES.map((item) => (
              <CarouselItem key={item.id} className="basis-auto pl-4">
                <div className="p-1">
                  <PricesCard
                    id={item.id}
                    title={item.title}
                    monthlyPrice={item.monthlyPrice}
                    image={item.image}
                    yearlyPrice={item.yearlyPrice}
                    crossedPrice={item.crossedPrice}
                    list={item.list}
                    button={item.button}
                    priceRange={priceRange}
                    className="py-0"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="hidden px-[16px] md:block md:h-[339px]">
        <div className="3xl:gap-[20px] grid grid-cols-3 gap-[16px]">
          {PRICES.map((item) => (
            <PricesCard
              key={item.id}
              id={item.id}
              title={item.title}
              monthlyPrice={item.monthlyPrice}
              image={item.image}
              yearlyPrice={item.yearlyPrice}
              crossedPrice={item.crossedPrice}
              list={item.list}
              button={item.button}
              className="py-0 md:h-full md:w-[229px]"
              priceRange={priceRange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PricesCard(props: PricesCardInterface) {
  const {
    title,
    monthlyPrice,
    image,
    yearlyPrice,
    crossedPrice,
    list,
    button,
    className,
    priceRange,
  } = props;
  const isPro = title === "PRO";

  return (
    <Card
      className={cn(
        "xs:w-[290px] xs:h-[339px] 3xl:w-full 3xl:rounded-[24px] md:h-full md:w-full lg:w-[315px]",
        className,
        isPro && "border border-1 border-[#0C8AF259]",
      )}
    >
      <CardContent className="flex items-center justify-center p-[4px]">
        <div className="3xl:gap-[32px] flex flex-col justify-between gap-[16px]">
          <div className="xs:w-[282px] xs:h-[100px] 3xl:w-[368px] 3xl:h-[140px] relative md:h-[100px] md:w-[221px] lg:w-[307px]">
            <Image
              src={image}
              alt={title}
              fill
              className="3xl:rounded-[20px] rounded-[12px] bg-[#FFFFFF26]/15 object-cover"
            />

            <div className="">
              <div className="xs:w-full 3xl:p-[24px] absolute z-10 flex justify-between p-[16px] md:w-[221px] lg:w-full">
                <span className="3xl:text-[28px] text-[20px] leading-[120%] font-medium tracking-[-0.02em]">
                  {title}
                </span>

                <div className="3xl:gap-[12px] flex items-start gap-[8px]">
                  {priceRange === "yearly" && (
                    <div className="relative flex items-center justify-center">
                      <div className="absolute h-[4px] w-full bg-[#C6E0F4]"></div>
                      <span className="xs:text-[40px] 3xl:text-[52px] text-[32px] leading-[100%] font-medium tracking-[-0.06em] text-[#C6E0F4] md:text-[24px]">
                        ${crossedPrice}
                      </span>
                    </div>
                  )}
                  <span className="xs:text-[40px] 3xl:text-[52px] text-[32px] leading-[100%] font-medium tracking-[-0.06em] text-[#0D8AF2] md:text-[32px]">
                    ${priceRange === "yearly" ? yearlyPrice : monthlyPrice}
                  </span>
                  <span className="3xl:text-[20px] text-[16px] leading-[120%] font-medium tracking-[-0.02em] text-[#CCCCCC]">
                    /mo
                  </span>
                </div>
              </div>
            </div>
          </div>

          <ul className="3xl:w-[341px] 3xl:px-[20px] flex flex-col gap-[12px] px-[12px] md:h-[144px]">
            {list.map((item, index) => (
              <div key={index} className="flex items-center gap-[8px]">
                <div className="h-[4px] w-[4px] rounded-full bg-[#0D8AF2]"></div>
                <li className="3xl:text-[14px] text-[12px] leading-[120%] tracking-[-0.02em] text-[#999999]">
                  {item}
                </li>
              </div>
            ))}
          </ul>

          <div className="3xl:px-[20px] px-[12px] py-[16px]">
            {isPro && (
              <CTAButton
                text="Get Pro"
                classNames="w-full py-[12px] text-[14px] 3xl:w-[341px] 3xl:text-[20px]"
              />
            )}
            {!isPro && (
              <button className="3xl:py-[16px] 3xl:text-[20px] w-full cursor-pointer rounded-[12px] border border-1 border-[#0D8AF226] py-[12px] text-center text-[14px] leading-[100%] font-bold tracking-[-0.02em] text-[#0D8AF2]">
                {button}
              </button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
