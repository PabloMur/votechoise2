import Image from "next/image";
import loginImage from "../../../public/home-bg.jpg";
import { LoginForm } from "@/components/forms/LoginForm";
import { CreateAccountModal } from "@/components/modals/CreateAccountModal";
const LoginPage = () => {
  return (
    <>
      <div className="h-[90vh] w-full flex justify-center items-center bg-white">
        <div className="w-1/2 h-full p-20 flex justify-center items-center">
          <LoginForm></LoginForm>
        </div>
        <div className="h-full w-1/2 p-10 pr-0">
          <div className="relative h-full w-full rounded-l-[90px] overflow-hidden">
            <Image
              src={loginImage}
              alt="home page image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <CreateAccountModal></CreateAccountModal>
    </>
  );
};

export default LoginPage;
