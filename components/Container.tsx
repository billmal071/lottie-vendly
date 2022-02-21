import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Text from "./Text";
import TextInput from "./TextInput";

export type ContainerProps = {
  header?: string;
  logo: string;
  altText: string;
  bigText?: string;
  midText?: string;
  greenText: string;
  textInput?: boolean;
  btn?: boolean;
  btnText?: string;
  btnIcon?: string;
  goBack?: boolean;
  width: number | string;
  height: number | string;
  bgProps?: string;
  greenBlock?: boolean;
  show?: boolean;
};

export default function Container({
  header,
  logo,
  altText,
  bigText,
  midText,
  greenText,
  textInput,
  btn,
  btnText,
  btnIcon,
  goBack,
  width,
  height,
  bgProps,
  greenBlock,
  show,
}: ContainerProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(false);

  const skip = search ? "tw-text-white" : "tw-text-green-4";

  function reset() {
    setSearch("");
    setStatus(false);
  }

  return (
    <section className="md:tw-w-1/2 tw-mx-auto tw-border-2 tw-border-green-1 tw-rounded-md tw-p-4 tw-flex tw-flex-col tw-justify-center tw-items-center tw-mt-8">
      {search && !status && <Modal />}
      {header && (
        <Text
          text={header}
          cssProps="tw-text-left tw-w-full tw-font-extrabold tw-text-xl tw-text-black-1 tw-my-4"
        />
      )}
      <div className={`tw-mb-4 ${bgProps}`}>
        <Image src={logo} alt={altText} width={width} height={height} />
      </div>
      {bigText && (
        <Text
          text={bigText}
          cssProps="tw-font-black tw-text-xl tw-mb-7 tw-text-black-1"
        />
      )}
      {midText && (
        <Text
          text={midText}
          cssProps="tw-font-semibold tw-text-lg tw-mb-2 tw-text-black-2"
        />
      )}
      {greenText && (
        <Text
          text={greenText}
          cssProps="tw-font-medium tw-text-sm tw-mb-2 tw-text-green-2"
        />
      )}
      {textInput && (
        <TextInput
          placeholderText="Search/Insert their Twitter handle"
          id={"search"}
          val={search}
          setValue={setSearch}
          setStatus={setStatus}
          cssProps="tw-border-b-2 tw-border-green-5 tw-text-green-4"
        />
      )}
      {greenBlock && (
        <div className="tw-py-4 tw-bg-green-1 tw-mt-9 tw-mb-4 tw-w-full tw-flex tw-justify-center tw-items-center">
          <span className="tw-w-2 tw-h-2 tw-rounded-full tw-inline-block tw-bg-green-2 tw-mr-2"></span>
          <span className="tw-w-2 tw-h-2 tw-rounded-full tw-inline-block tw-bg-green-2 tw-mr-2"></span>
          <span className="tw-w-2 tw-h-2 tw-rounded-full tw-inline-block tw-bg-green-2"></span>
        </div>
      )}
      {btn && !status && (
        <Button
          text={btnText!}
          icon={search ? "/white-right-arrow.svg" : btnIcon!}
          cssProps={`tw-border tw-border-green-1 tw-bg-green-6 ${skip}`}
        />
      )}
      {status && (
        <Button
          text="Continue"
          icon="/white-right-arrow.svg"
          cssProps={
            "tw-border tw-border-green-1 tw-text-white tw-bg-green-2"
          }
          cmd={() => router.push("/done")}
        />
      )}
      {search && (
        <button
          className="tw-capitalize tw-text-green-2 tw-font-semibold tw-text-xs tw-mt-4"
          onClick={() => reset()}
        >
          <Image
            src="/arrow-left.svg"
            alt="back arrow"
            width="13"
            height="13"
          />
          go back
        </button>
      )}
      {search === "" && show && (
        <div className="tw-mt-5">
          <span className="tw-capitalize tw-text-green-2 tw-font-medium tw-text-sm">
            Read
          </span>{" "}
          <span className="tw-capitalize tw-text-green-1 w-font-medium tw-text-sm">
            Instructions
          </span>
        </div>
      )}
    </section>
  );
}
