import cn from 'classnames';

interface Props {
  title: string,
  desc: string,
  height?: number
}

export function SeeInActionBlock(props: Props) {
  const { title, desc, height } = props

  return (
    <div className={cn("border border-1px rounded-[16px] border-[#EDEDED] max-w-full flex flex-col justify-between", height ? `h-[${height}px]` : "h-[258px]")}>
      <div>

      </div>
      <div className="p-[16px] flex flex-col gap-[8px]">
        <p className="text-[20px] font-medium">
          {title}
        </p>
        <p className="text-[14px] text-[#999999] font-regular leading-[100%] tracking-[-0.04em]">
          {desc}
        </p>
      </div>
    </div>
  )
}