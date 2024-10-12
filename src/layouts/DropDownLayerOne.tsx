import { ClassValue } from "clsx";
import { cn } from "../lib/utils";

interface props {
  children: React.ReactNode;
  className?: ClassValue;
}

const DropDownLayerOne = ({ children, className }: props) => {
  return (
    <div
      className={cn(
        "py-p-7 bg-primary-white-default min-w-[230px] rounded-[12px] ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default DropDownLayerOne;
