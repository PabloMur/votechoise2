"use client";
import { Navigation } from "./Navigation";
import { Logo } from "./ui/Logo";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const hiddenRoutes = ["/", "/login", "/about", "/contact"];
  const hidden = hiddenRoutes.includes(pathname);

  return (
    hidden && (
      <header className="bg-white p-4 px-16 border-b-2 shadow-lg flex items-center justify-between max-h-[10vh]">
        <Logo></Logo>
        <Navigation></Navigation>
      </header>
    )
  );
};

export { Header };
