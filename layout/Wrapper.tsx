import Image from "next/image";
import React, { Fragment } from "react";

export type WrapperType = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: WrapperType) {
  return (
    <main className="tw-p-4 tw-bg-sand">
      <nav>
        <Image
          src="/vendly-logo.svg"
          alt="Vendly Logo"
          width="200"
          height="60"
        />
      </nav>
      {children}
    </main>
  );
}
