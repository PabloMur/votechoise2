"use client";
import Image from "next/image";
import homebg from "../../public/home-bg.jpg";
import { useGoTo } from "@/lib/hooks";

export default function Home() {
  const goto = useGoTo();

  const handleClick = () => {
    goto("/login");
  };

  return (
    <main className="bg-white h-[90vh] w-full flex justify-center items-center">
      <div className="h-full w-1/2 flex flex-col text-black p-20 justify-center gap-10">
        <h1 className="font-bold text-5xl">Decisions made collectively</h1>
        <p className="text-lg">
          Our platform focuses on simplifying the voting process and bringing
          people together in decision-making.
        </p>
        <button
          className="bg-purple-800 py-2 px-4 text-xl font-bold rounded-full text-white w-fit shadow-lg"
          onClick={handleClick}
        >
          Join us
        </button>
      </div>
      <div className="h-full w-1/2 p-10 pr-0">
        <div className="relative h-full w-full rounded-l-[90px] overflow-hidden">
          <Image
            src={homebg}
            alt="home page image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </main>
  );
}
