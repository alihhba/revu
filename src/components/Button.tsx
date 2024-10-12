import { type ClassValue } from "clsx";
import { cn } from "../lib/utils";

interface buttonProps {
  className?: ClassValue;
  content: any;
  type?: keyof typeof buttonTitle;
  onclick?: () => void;
  icon?: string;
  title?: string;
}

const buttonTitle = {
  border: "border  border-outline-default",
  square_Border: "border px-[10px] py-[10px]  border-outline-default",
  border_white: "border  bg-white",
  purple: "bg-primary-blue-default text-font-white ",
  cancel: "bg-primary-blue-10 text-font-blue",
  blue: "border  bg-[#EDEDF7]",
  primary_white:
    "bg-white  w-[56px] h-[56px] flex items-center justify-center shadow-lg",
  tab: "bg-black text-[#fff] px-p-12 md:px-p-13 py-p-8 text-base-12 font-bold",
};

const Button = ({ className, content, type, onclick }: buttonProps) => {
  return (
    <button
      onClick={() => {
        onclick && onclick();
      }}
      className={cn(
        "px-[21px] py-[10px] rounded-[8px] text-font-black font-bold text-[12px]",
        buttonTitle[type!],
        className
      )}
    >
      <div className="flex items-center justify-center">
        {content ? content : null}
      </div>
    </button>
  );
};

export default Button;
