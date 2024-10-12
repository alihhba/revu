import { channelsHashtagItems } from "../initials";
import HashtagComponent from "./HashtagComponent";
import Icon from "./Icon";

const ChannelsUpdatesWrapper = () => {
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
        {channelsHashtagItems.slice(0, 6).map((item) => (
          <HashtagComponent
            postNum={item.posts}
            title={item.title}
            key={item.id}
            tagNum={item.tagNum}
          />
        ))}
      </div>
    </div>
  );
};

export default ChannelsUpdatesWrapper;
