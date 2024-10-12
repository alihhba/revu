import { cn } from "../lib/utils";

interface props {
  image: string;
  className?: string;
}

const Image = ({ image, className }: props) => {
  return (
    <div className={cn("w-p-22  h-full", className)}>
      <img src={image} className="w-full h-full object-contain" alt="" />
    </div>
  );
};

export default Image;
