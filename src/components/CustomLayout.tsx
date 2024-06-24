"use client";
import { RecoilRoot } from "recoil";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
const CustomLayout = ({ children }: any) => {
  return (
    <RecoilRoot>
      <Header></Header>
      <div className="flex">
        <Sidebar></Sidebar>
        {children}
      </div>
    </RecoilRoot>
  );
};

export { CustomLayout };
