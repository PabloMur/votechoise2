"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
import logoWhite from "../../../public/logo-white.png";
import { useGoTo } from "@/lib/hooks";
const Logo = ({ type }: any) => {
  const goto = useGoTo();

  const handleClick = () => {
    return goto("/");
  };

  return (
    <button className="cursor-pointer" onClick={handleClick}>
      <Image
        src={type == "white" ? logoWhite : logo}
        alt="logo de la aplicacion"
        height={40}
      ></Image>
    </button>
  );
};

export { Logo };
