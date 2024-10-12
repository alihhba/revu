import { cn } from "../lib/utils";
import UserImage from "./UserImage";

interface props {
  item: {
    image: string;
    title: string;
    desc?: string;
  };
  classname?: string;
}

const UserImageTitleInfoOne = ({ classname, item }: props) => {
  return (
    <div className={cn("flex items-center gap-p-16 w-fit", classname)}>
      <div>
        <UserImage image={item.image} className="w-p-36 h-p-36" />
      </div>

      <div className="flex flex-col">
        <p className="font-bold text-base-14">{item.title}</p>
        {item.desc && (
          <p className="font-regular text-base-14 text-font-storm">
            {" "}
            {item.desc}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserImageTitleInfoOne;
