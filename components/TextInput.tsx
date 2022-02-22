import { TwitterContext } from "@/context/context.action";
import { instance } from "@/helpers/axiosHook";
import useName from "@/hooks/useName";
import React, { useContext, useEffect } from "react";

export type TextInputProps = {
  id: string;
  val: string;
  placeholderText: string;
  cssProps: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TextInput({
  id,
  val,
  placeholderText,
  setValue,
  setStatus,
  cssProps,
}: TextInputProps) {
  const { getLoading } = useContext(TwitterContext);
  const { isLoading } = useName(val);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    setStatus(false);
  }

  function setModalVisibility() {
    // modal hide
    setStatus(true);
  }

  useEffect(() => {
    getLoading(isLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <div>
      <label htmlFor={id}>
        <input
          id={id}
          type="text"
          className={`tw-mt-5 tw-px-2 ${cssProps}`}
          placeholder={placeholderText}
          value={val}
          onChange={(e) => handleChange(e)}
        />
        {val && (
          <span
            className="tw-relative -tw-left-7 tw-text-lg tw-text-green-8 tw-font-extrabold"
            onClick={() => setModalVisibility()}
          >
            OK
          </span>
        )}
      </label>
    </div>
  );
}
