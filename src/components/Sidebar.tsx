import { usePathname } from "next/navigation";
import { SidebarNavigation } from "./SidebarNavigation";
import { Logo } from "./ui/Logo";

const Sidebar = () => {
  const pathname = usePathname();
  const hiddenRoutes = ["/", "/login", "/about"];
  const hidden = hiddenRoutes.includes(pathname);

  return (
    !hidden && (
      <div className="bg-purple-800 w-1/4 flex flex-col justify-start items-center pt-10">
        <Logo type="white"></Logo>
        <SidebarNavigation></SidebarNavigation>
      </div>
    )
  );
};

export { Sidebar };
