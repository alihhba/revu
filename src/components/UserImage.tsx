import { cn } from "../lib/utils";

interface userImageProps {
  image: string;
  className?: string;
}

const UserImage = ({ image, className }: userImageProps) => {
  return (
    <div className={cn("w-p-p22 h-full rounded-full", className)}>
      <img src={image} className="w-full h-full object-contain" alt="" />
    </div>
  );
};

export default UserImage;
