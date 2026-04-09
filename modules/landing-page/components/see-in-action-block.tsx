import cn from "classnames";

interface Props {
  title: string;
  desc: string;
  height?: number;
}

export function SeeInActionBlock(props: Props) {
  const { title, desc, height } = props;

  return (
    <div
      className={cn(
        "border-1px 3xl:max-w-[496px] flex max-w-full flex-col justify-between rounded-[16px] border border-[#EDEDED] sm:max-w-[230px] lg:max-w-[314px]",
        height ? `h-[${height}px]` : "h-[258px]",
      )}
    >
      <div></div>
      <div className="flex flex-col gap-[8px] p-[16px]">
        <p className="text-[20px] font-medium">{title}</p>
        <p className="font-regular text-[14px] leading-[100%] tracking-[-0.04em] text-[#999999]">
          {desc}
        </p>
      </div>
    </div>
  );
}
