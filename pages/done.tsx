import Container from "@/components/Container";
import Wrapper from "@/layout/Wrapper";
import Head from "next/head";
import React, { Fragment } from "react";

export default function done() {
  return (
    <Fragment>
      <Head>
        <title>Vendly Survey</title>
        <meta name="done" content="done" />
      </Head>
      <Wrapper>
        <Container
          logo="/padlock.svg"
          altText="green padlock"
          bigText="₦2000.00"
          midText="Please wait."
          greenText="Validating user credentials..."
          width="140"
          height="120"
          greenBlock
        />
      </Wrapper>
    </Fragment>
  );
}
