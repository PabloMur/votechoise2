import { Navlink } from "./ui/Navlinks";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-4">
        <Navlink emphasys={false} text={"About"} route={"/about"}></Navlink>
        <Navlink emphasys={false} text={"Contact"} route={"/contact"}></Navlink>
        <Navlink emphasys={true} text={"Join Us"} route={"/login"}></Navlink>
      </ul>
    </nav>
  );
};

export { Navigation };
