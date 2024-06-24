"use client";
import { useGoTo } from "@/lib/hooks";
const EnphasysNavLink = ({ text, route, action }: any) => {
  const goto = useGoTo();

  const handleClick = () => {
    if (route) {
      goto(route);
    } else if (action) {
      action();
    }
  };

  return (
    <button
      className="text-white bg-purple-800  text-md font-bold p-2 px-4 rounded-full"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

const LightNavLink = ({ text, route, action }: any) => {
  const goto = useGoTo();

  const handleClick = () => {
    if (route) {
      goto(route);
    } else if (action) {
      action();
    }
  };
  return (
    <button
      className="text-zinc-700 text-md font-bold p-2"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

const Navlink = ({ text, emphasys, route, action }: any) => {
  return emphasys ? (
    <EnphasysNavLink
      text={text}
      route={route}
      action={action}
    ></EnphasysNavLink>
  ) : (
    <LightNavLink text={text} route={route} action={action}></LightNavLink>
  );
};

export { Navlink };
