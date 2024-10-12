import { ClassValue } from "clsx";
import { cn } from "../lib/utils";
import Icon from "./Icon";

export const badgeTypes = {
  primary: "text-font-storm  bg-grey-default",
  secondary: "text-font-blue  bg-primary-blue-10",
  border: "border border-outline text-font-storm",
  danger: "text-white  , bg-secondary-red-default",
  success: "text-white bg-secondary-green-default",
  success2: "text-font-green bg-secondary-green-85",
  transparent: "",
};

interface props {
  title?: any;
  icon?: string;
  className?: ClassValue;
  type?: keyof typeof badgeTypes;
}

const Badge = ({ className, icon, title, type = "primary" }: props) => {
  return (
    <div
      className={cn(
        "flex items-center w-fit justify-center px-p-13 py-p-4   gap-p-4 rounded-[12px] min-w-fit",
        badgeTypes[type!],
        className
      )}
    >
      {icon ? <Icon icon={icon} color="#5f646d" /> : null}

      {title ? <p className={cn("text-base-12 font-bold ")}>{title}</p> : null}
    </div>
  );
};

export default Badge;
