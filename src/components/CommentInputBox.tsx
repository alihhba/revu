import { cn } from "../lib/utils";
import Button from "./Button";
import Icon from "./Icon";

interface props {
  className?: string;
  content?: any;
}

const CommentInputBox = ({ className, content }: props) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between bg-grey-default py-p-12 px-p-20 rounded-[8px]",
        className
      )}
    >
      <div className="pe-p-16">{content}</div>

      <div className="w-full">
        <input
          type="text"
          placeholder="Type to add your comment"
          className="w-full outline-none focus:ring-0 bg-transparent text-base-14 font-regular"
        />
      </div>

      <div className="flex items-center gap-p-17">
        <Icon
          icon="/icons/emoji.svg"
          width="18px"
          height="18px"
          className="max-md:hidden"
        />
        <Icon
          icon="/icons/plus_2.svg"
          width="15px"
          height="15px"
          className="max-md:hidden"
        />

        <Button
          className="bg-[#CCDCFF] px-p-8 ps-p-10 py-p8"
          content={<Icon icon="/icons/send.svg" />}
        />
      </div>
    </div>
  );
};

export default CommentInputBox;
