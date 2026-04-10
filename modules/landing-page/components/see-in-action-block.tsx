import cn from "classnames";

interface Props {
  title: string;
  desc: string;
  height?: number;
  threeSteps?: boolean;
}

export function SeeInActionBlock(props: Props) {
  const { title, desc, height, threeSteps } = props;
  const heightClass = height === 275 ? "h-[275px]" : "h-[258px]";

  return (
    <div
      className={cn(
        "border-1px flex flex-col justify-between rounded-[16px] border border-[#EDEDED]",
        heightClass,
        threeSteps
          ? "xs:max-w-[328px] md:max-w-[544px]"
          : "3xl:max-w-[496px] md:max-w-[230px] lg:max-w-[314px]",
      )}
    >
      <div></div>
      <div className="flex flex-col gap-[8px] p-[16px]">
        <p className="3xl:text-[24px] text-[20px] font-medium">{title}</p>
        <p className="font-regular 3xl:text-[16px] text-[14px] leading-[100%] tracking-[-0.04em] text-[#999999]">
          {desc}
        </p>
      </div>
    </div>
  );
}
