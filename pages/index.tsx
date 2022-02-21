import Container from "@/components/Container";
import Wrapper from "@/layout/Wrapper";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Vendly Survey</title>
        <meta name="home" content="home" />
      </Head>
      <Wrapper>
        <Container
          header="Survey complete!"
          logo="/flag.svg"
          bgProps="tw-bg-green-3 tw-border-2 tw-border-green-1 md:tw-w-1/2 tw-w-full tw-flex tw-justify-center"
          altText="flag"
          midText="Pass it on?"
          greenText="Nominate someone else to take this incentivized survey."
          width="120"
          height="200"
          textInput
          btn
          btnText="Skip"
          btnIcon="/rightarrow.svg"
          show
        />
      </Wrapper>
    </Fragment>
  );
};

export default Home;
