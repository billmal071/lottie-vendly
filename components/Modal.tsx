import { TwitterContext } from "@/context/context.action";
import Image from "next/image";
import React, { Fragment, useContext } from "react";
import ErrorInfo from "./ErrorInfo";
import Loader from "./Load";
import Text from "./Text";

export default function Modal({}) {
  const { loading, data, error } = useContext(TwitterContext);
  const isLoading = loading || error ? "tw-bg-green-3" : "tw-bg-white";

  return (
    <section className="tw-fixed tw-left-0 tw-right-0 tw-top-10 tw-bottom-32 md:tw-bottom-[15%] md:tw-h-3/5 tw-z-10">
      <div
        className={`tw-border tw-border-green-7 ${isLoading} tw-w-[280px] tw-h-[85%] tw-relative tw-left-4 md:tw-left-1/4 tw-top-[10%] tw-z-10 tw-rounded-md`}
      >
        {loading && <Loader message="fetching search results" />}
        {error && <ErrorInfo message="No results found" />}
        {!loading && !error && (
          <div className="tw-flex tw-p-4">
            <div className="tw-flex-1">
              <Image
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt={data[0].name || "user"}
                width="40"
                height="40"
              />
            </div>
            <div className="tw-flex-[3] tw-ml-2">
              {data.map((result) => (
                <Fragment key={result.id}>
                  <Text
                    text={result.name}
                    cssProps="tw-text-black-1 tw-text-sm tw-font-semibold"
                  />
                  <Text
                    text={`@${result.username}`}
                    cssProps="tw-text-green-2 tw-text-sm tw-font-medium"
                  />
                </Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
