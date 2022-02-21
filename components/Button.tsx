import Image from "next/image";
import React from "react";

export type ButtonProps = {
  text: string;
  icon: string;
  style?: React.CSSProperties;
  cssProps: string;
  cmd?: () => void;
};

export default function Button({
  text,
  icon,
  style,
  cssProps,
  cmd,
}: ButtonProps) {
  return (
    <button
      className={`tw-truncate tw-mt-7 tw-py-2 tw-px-5 tw-w-full md:tw-w-3/4 lg:tw-w-1/2 tw-font-extrabold tw-text-base tw-rounded-md ${cssProps}`}
      style={style}
      onClick={cmd}
    >
      {text}
      {icon && (
        <span className="tw-float-right">
          <Image src={icon} alt={text} width="15" height="15" />
        </span>
      )}
    </button>
  );
}
