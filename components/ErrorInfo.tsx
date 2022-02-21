import Image from "next/image";
import React from "react";
import Text from "./Text";

type ErrorInfoProps = {
  message: string;
};

export default function ErrorInfo({ message }: ErrorInfoProps) {
  return (
    <div className="tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center">
      <Image src="/glass.svg" alt="searching glass" width="200" height="200" />
      <Text
        text={message}
        cssProps="tw-text-green-2 tw-font-semibold tw-text-sm tw-mt-2"
      />
    </div>
  );
}
