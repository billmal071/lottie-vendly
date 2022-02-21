import React from "react";
import { Oval } from "react-loader-spinner";
import Text from "./Text";

type LoadProps = {
  message: string;
};

export default function Load({ message }: LoadProps) {
  return (
    <div className="tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center">
      <div className="tw-p-4 tw-bg-white">
        <Oval width={200} height={200} color="#C6F6F4" strokeWidth="5" />
      </div>
      <Text
        text={message}
        cssProps="tw-text-green-2 tw-font-semibold tw-text-sm tw-mt-2"
      />
    </div>
  );
}
