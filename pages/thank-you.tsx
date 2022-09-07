import Head from "next/head";
import type { NextPage } from "next";
import Container from "../components/utils/Container";

const ThankYou: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thank You</title>
        <meta
          name="description"
          content="Your technical partner towards web success"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>Thank you</h1>
        <h6>Your message has been sent.</h6>
      </Container>
    </>
  );
};

export default ThankYou;
