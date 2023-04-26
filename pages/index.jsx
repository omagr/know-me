import Head from "next/head";
import Home from "../components/Home";
import "remixicon/fonts/remixicon.css";
export default function Index() {
  return (
    <>
      <Head>
        <title>🤘🏻 yo! omagr - home.</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Home />
    </>
  );
}
