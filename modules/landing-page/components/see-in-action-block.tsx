import cn from "classnames";
import Image from "next/image";

interface Props {
  title: string;
  desc: string;
  image: string;
  className?: string;
  onCardClick?: () => void;
  isSelected?: boolean;
}

export function SeeInActionBlock(props: Props) {
  const { title, desc, className, image } = props;

  return (
    <div
      className={cn(
        "border-1px 3xl:max-w-[496px] grid grid-cols-1 justify-between gap-[16px] rounded-[16px] border border-[#EDEDED] md:max-w-[230px] lg:max-w-[314px]",
        className,
      )}
    >
      <div className="relative">
        <Image
          src={image}
          alt={title}
          className={cn(
            "xs:h-[160px] 3xl:h-[220px] rounded-t-[16px] object-cover md:h-[112px] lg:h-[154px]",
          )}
        />
      </div>
      <div
        className={cn(
          "3xl:h-[141px] flex flex-col justify-between gap-[8px] p-[16px] pt-0 md:h-[184px] lg:h-[133px]",
        )}
      >
        <p className="3xl:text-[24px] text-[20px] font-medium">{title}</p>
        <p className="font-regular 3xl:text-[16px] text-[14px] leading-[100%] tracking-[-0.04em] text-[#999999]">
          {desc}
        </p>
      </div>
    </div>
  );
}

export function SeeInActionBlockThreeSteps(props: Props) {
  const { title, desc, className, image, onCardClick, isSelected } = props;

  return (
    <div
      className={cn(
        "border-1px xs:max-w-[328px] 3xl:max-w-[496px] 3xl:h-[385px] grid grid-cols-1 justify-between gap-[16px] rounded-[16px] border border-[#EDEDED] transition-all duration-200 md:max-w-[544px] lg:h-[268px] lg:max-w-[315px]",
        className,
        isSelected ? "lg:opacity-100" : "lg:opacity-20",
      )}
      onClick={onCardClick}
    >
      <div className="relative">
        <Image
          src={image}
          alt={title}
          className={cn(
            "xs:h-[160px] 3xl:h-[220px] rounded-t-[16px] object-cover md:h-[112px] md:h-[230px] md:h-[239px] md:w-[544px] lg:h-[154px]",
          )}
        />
      </div>
      <div
        className={cn(
          "3xl:h-[141px] 3xl:justify-between flex flex-col justify-normal gap-[8px] p-[16px] pt-0 md:h-[82px] lg:h-[99px]",
        )}
      >
        <p className="3xl:text-[24px] text-[20px] font-medium">{title}</p>
        <p className="font-regular 3xl:text-[16px] text-[14px] leading-[100%] tracking-[-0.04em] text-[#999999]">
          {desc}
        </p>
      </div>
    </div>
  );
}
