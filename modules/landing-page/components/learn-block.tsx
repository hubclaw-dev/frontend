import Image, { StaticImageData } from "next/image"

export function LearnBlock({ icon, color, title, desc }: { icon: StaticImageData, color: string, title: string, desc: string }) {
  return (
    <div className="flex flex-col justify-between p-[16px] border border-[1px] border-[#EDEDED] rounded-[16px]">
      <div className="h-[40px] w-[40px] rounded-[12px] mb-[24px] flex items-center justify-center" style={{
        backgroundColor: color
      }}>
        <Image src={icon} alt="icon" width={icon.width / 2} height={icon.height / 2} />
      </div>
      <div>
        <div className="font-medium text-[18px] leading-[120%] tracking-[-0.02em] mb-[2px]">{title}</div>
        <div className="font-regular text-[12px] leading-[120%] tracking-[-0.02em] text-[#999999]">{desc}</div>
      </div>
    </div>
  )
}