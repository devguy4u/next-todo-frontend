import Image, { StaticImageData } from "next/image";
import Plus from "../assets/plus.png";

export type CustomButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  img: StaticImageData;
  handleClick?: (e: any) => void;
  href?: string;
};

const CustomButton = ({ text, img, handleClick, href }: CustomButtonProps) => {
  return (
    <a
      href={href}
      className="w-full bg-[#1E6F9F] py-4 rounded-lg font-bold leading-[19.6px] text-[#F2F2F2] text-center flex justify-center items-center gap-2 cursor-pointer"
      onClick={handleClick}
    >
      <span>{text}</span>
      <Image src={img} alt="+" height={16} width={16} />
    </a>
  );
};

export default CustomButton;
