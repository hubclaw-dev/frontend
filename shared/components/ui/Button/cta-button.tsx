export function CTAButton({ text }: { text: string }) {
  return (
    <button className="btn-cta rounded-[12px] bg-[#0D8AF2] px-[40px] py-[12px]">
      <span className="font-bold text-[#FFFFFF]">{text}</span>
    </button>
  );
}
