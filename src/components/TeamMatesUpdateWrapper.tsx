import { teammateUpdatesItems } from "../initials";
import Icon from "./Icon";
import UserImageTitleInfoOne from "./UserImageTitleInfoOne";

const TeamMatesUpdateWrapper = () => {
  return (
    <div className="flex items-start flex-col gap-p-20 w-full">
      {/* header */}
      <div className="flex items-center justify-between w-full">
        <p className="text-h6 font-bold">Channels</p>

        <div className="flex items-center gap-p-6 cursor-pointer">
          <Icon icon="/icons/add.svg" color="#000" />
          <p className="text-base-12 font-bold">Add</p>
        </div>
      </div>

      {/* main */}
      <div className="flex flex-col items-start gap-p-14 w-full">
        {teammateUpdatesItems.slice(0, 6).map((item) => (
          <UserImageTitleInfoOne key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TeamMatesUpdateWrapper;
