import type { NextPage } from "next";
import Head from "next/head";
import { useSelector } from "react-redux";
import ProgressBar from "../components/ProgressBar";
import TokenTable from "../components/TokenTable";
import { barData } from "../redux/dataSlice";

const Home: NextPage = () => {
  const progressBarData = useSelector(barData);

  return (
    <>
      <Head>
        <title>TROOD TEST</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <ProgressBar
          barInfo={progressBarData}
          width={700}
          height={20}
        ></ProgressBar>

        <TokenTable></TokenTable>
      </main>
    </>
  );
};

export default Home;