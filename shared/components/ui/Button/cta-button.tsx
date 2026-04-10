import cn from "classnames";

interface Props {
  text: string;
  classNames?: string;
}

export function CTAButton(props: Props) {
  const { text, classNames } = props;

  return (
    <button
      className={cn(
        "btn-cta rounded-[12px] bg-[#0D8AF2] px-[40px] py-[12px]",
        classNames,
      )}
    >
      <span className="font-bold text-[#FFFFFF]">{text}</span>
    </button>
  );
}
