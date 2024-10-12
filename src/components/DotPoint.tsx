import { cn } from "../lib/utils";

const dotType = {
  primary: "bg-primary-blue-default",
  secondary: "bg-secondary-yellow-default",
  success: "bg-secondary-green-default",
  danger: "bg-secondary-red-default",
};

interface props {
  type: keyof typeof dotType;
}

const DotPoint = ({ type }: props) => {
  return (
    <div
      className={cn(
        "w-[8px] h-[8px] min-w-[8px] max-w-[8px] min-h-[8px] max-h-[8px] rounded-full",
        dotType[type]
      )}
    ></div>
  );
};

export default DotPoint;
