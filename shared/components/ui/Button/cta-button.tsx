
export function CTAButton({ text }: { text: string }) {
  return (
    <button className="bg-[#0D8AF2] py-[12px] px-[40px] rounded-[12px] btn-cta">
      <span className="text-[#FFFFFF] font-bold">{text}</span>
    </button>
  )
}