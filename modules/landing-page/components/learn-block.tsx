import Image, { StaticImageData } from "next/image";

interface Props {
  icon: StaticImageData;
  color: string;
  title: string;
  desc: string;
}

export function LearnBlock(props: Props) {
  const { icon, color, title, desc } = props

  return (
    <div className="flex flex-col justify-between rounded-[16px] border border-[1px] border-[#EDEDED] p-[16px]">
      <div
        className="mb-[24px] flex h-[40px] w-[40px] items-center justify-center rounded-[12px]"
        style={{
          backgroundColor: color,
        }}
      >
        <Image
          src={icon}
          alt="icon"
          width={icon.width / 2}
          height={icon.height / 2}
        />
      </div>
      <div>
        <div className="mb-[2px] text-[18px] leading-[120%] font-medium tracking-[-0.02em]">
          {title}
        </div>
        <div className="font-regular text-[12px] leading-[120%] tracking-[-0.02em] text-[#999999]">
          {desc}
        </div>
      </div>
    </div>
  );
}
