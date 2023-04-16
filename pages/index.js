import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>DxU</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Image
            src="/images/dallas.png"
            alt="Dallas"
            className="rounded-lg"
            width={1280}
            height={720}
            priority
          />
        </div>
      </main>
    </>
  );
}
