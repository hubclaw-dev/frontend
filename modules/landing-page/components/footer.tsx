import Link from "next/link";
import FooterLogo from "../images/footer/logo-footer.svg";
import Image from "next/image";

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
    <div className="px-[16px] md:px-[24px]">
      <div className="pt-[50px] md:grid-cols-2 md:gap-[16px] lg:mx-auto lg:grid lg:max-w-[1520px]">
        <div className="3xl:gap-[16px] mb-[40px] grid grid-cols-2 gap-[8px] lg:grid-cols-1 lg:gap-[109px]">
          <div className="align-center flex items-center">
            <Image
              src={FooterLogo}
              alt="logo"
              className="xs:h-[23px] xs:w-[54px] lg:h-[40px] lg:w-[96px]"
            />
          </div>

          <div className="py-[9px] text-[10px] leading-[120%] font-medium tracking-[-0.02em] text-[#808080]">
            <span className="block md:hidden">
              Proactive AI agents for Telegram Automate your daily tasks
              seamlessly
            </span>
            <span className="hidden text-[12px] md:block lg:text-[16px]">
              Proactive AI agents for Telegram <br /> Automate your daily tasks
              seamlessly
            </span>
          </div>
        </div>

        <div className="mb-[40px] grid grid-cols-2 gap-[8px]">
          <div>
            <span className="mb-[24px] block font-medium md:text-[14px] lg:text-[18px]">
              Navigation
            </span>

            <ul className="flex flex-col gap-[16px] text-[14px] leading-[120%] tracking-[-0.04em] text-[#999999] lg:text-[18px]">
              {NAV_BLOCK.map((i) => (
                <li key={i.id}>{i.page}</li>
              ))}
            </ul>
          </div>

          <div>
            <span className="mb-[24px] block font-medium md:text-[14px] lg:text-[18px]">
              Documents
            </span>

            <ul className="flex flex-col gap-[16px] text-[14px] leading-[120%] tracking-[-0.04em] text-[#999999] lg:text-[18px]">
              {DOC_BLOCK.map((i) => (
                <Link href={i.link} key={i.id}>
                  {i.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="3xl:text-[14px] mb-[24px] py-[12px] text-[10px] leading-[120%] tracking-[-0.04em] text-[#999999] md:text-[12px] lg:mx-auto lg:max-w-[1520px]">
        © 2026 HubClaw. All rights reserved
      </div>
    </div>
  );
}
