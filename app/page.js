import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[url('/landing.png')] w-screen h-[90vh] bg-cover">
        {/* <h1 className="text-4xl">Hello Next!!</h1> */}
        {/* <Image
        src="/landing.png"
        width={500}
        height={500}
        alt="landing"
        className="w-screen h-[90vh]"
      /> */}
      </main>
    </>
  );
}
