"use client";
import { useSetRecoilState } from "recoil";
import { ModalCreateAccountActive } from "@/lib/atoms";
const LoginForm = () => {
  const CreateAccountModalStateSetter = useSetRecoilState(
    ModalCreateAccountActive
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("hola");
  };

  const handleOpenCreateAccountModal = () => {
    CreateAccountModalStateSetter(true);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-between ">
      <h2 className="text-4xl text-black font-bold">Log In</h2>
      <form
        onSubmit={handleSubmit}
        className="text-black w-[80%] h-fit gap-2 flex flex-col"
      >
        <label htmlFor="">
          <p className="font-bold">Email:</p>
          <input
            type="email"
            className="border-b border-black w-full p-2 outline-none"
            required={true}
          />
        </label>
        <label htmlFor="">
          <p className="font-bold">Password:</p>
          <input
            type="password"
            className="border-b border-black w-full p-2 outline-none"
            required={true}
          />
        </label>

        <button className="bg-purple-800 mt-2 p-2 w-full rounded-full text-white font-bold">
          Login
        </button>
      </form>
      <div className="h-10 w-[80%] flex justify-center items-center ">
        <div className="h-[1px] bg-black w-full"></div>
        <p className="mx-4 text-black font-bold">OR</p>
        <div className="h-[1px] bg-black w-full"></div>
      </div>
      <div className="h-10 w-[80%] ">
        <button
          className="p-2 flex justify-center items-center border-purple-800 border-2 font-bold rounded-full text text-purple-800 w-full"
          onClick={handleOpenCreateAccountModal}
        >
          Create an account
        </button>
      </div>
    </div>
  );
};

export { LoginForm };
