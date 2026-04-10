import Link from "next/link";

const NAV_BLOCK = [
  {
    id: 1,
    page: "Use Cases",
  },
  {
    id: 2,
    page: "How it works",
  },
  {
    id: 3,
    page: "Pricing",
  },
  {
    id: 4,
    page: "FAQ",
  },
];

const DOC_BLOCK = [
  {
    id: 1,
    title: "Terms & Conditions",
    link: "/terms",
  },
  {
    id: 2,
    title: "Privacy Policy",
    link: "/privacy",
  },
];

export function Footer() {
  return (
    <div className="lg:max-w-[1520px] lg:mx-auto px-[16px] pt-[50px]">
      <div className="mb-[40px] grid grid-cols-2 gap-[8px]">
        <div className="py-[9px] font-bold">HubClaw</div>

        <div className="py-[9px] text-[10px] leading-[120%] font-medium tracking-[-0.02em] text-[#808080]">
          Proactive AI agents for Telegram Automate your daily tasks seamlessly
        </div>
      </div>

      <div className="mb-[40px] grid grid-cols-2 gap-[8px]">
        <div>
          <span className="mb-[24px] block font-medium">Navigation</span>

          <ul className="flex flex-col gap-[16px] text-[14px] leading-[120%] tracking-[-0.04em] text-[#999999]">
            {NAV_BLOCK.map((i) => (
              <li key={i.id}>{i.page}</li>
            ))}
          </ul>
        </div>

        <div>
          <span className="mb-[24px] block font-medium">Documents</span>

          <ul className="flex flex-col gap-[16px] text-[14px] leading-[120%] tracking-[-0.04em] text-[#999999]">
            {DOC_BLOCK.map((i) => (
              <Link href={i.link} key={i.id}>
                {i.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-[50px] py-[12px] text-[10px] leading-[120%] tracking-[-0.04em] text-[#999999]">
        © 2026 HubClaw. All rights reserved
      </div>
    </div>
  );
}
