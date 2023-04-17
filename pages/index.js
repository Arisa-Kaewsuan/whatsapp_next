import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title> Whatsapp 2.0 </title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Sidebar />
    </>
  );
}
