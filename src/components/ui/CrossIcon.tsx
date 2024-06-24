import Image from "next/image";
import cross from "../../../public/cross.svg";
const CrossIcon = () => {
  return <Image src={cross} alt="cross icon" height={50} width={50}></Image>;
};

export { CrossIcon };
