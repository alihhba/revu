import { cn } from "../../lib/utils";
import CircleBadge from "../CircleBadge";
import UserImage from "../UserImage";

interface textMessageCartProps {
  type: "self" | "other";
}

const TextMessageCart = ({ type }: textMessageCartProps) => {
  return (
    <div
      className={cn("flex", type === "other" ? "flex-row-reverse" : "flex-row")}
    >
      {/* user image */}
      <div className="relative w-[2rem] h-[2rem] min-w-[2rem] ">
        <UserImage
          image="/images/user_4.svg"
          className="w-full h-full object-cover"
        />
        <div className="absolute -bottom-1 -end-1">
          <CircleBadge isPadding />
        </div>
      </div>

      {/* username and time */}
      <div
        className={cn(
          "flex flex-col  gap-[9px] ",
          type === "other" ? "pe-[13px] items-end" : "ps-[13px] items-start"
        )}
      >
        <div
          className={cn(
            "flex items-center  gap-[6px] mb-auto  -mt-[6px]",
            type === "other" ? "flex-row-reverse" : "flex-row"
          )}
        >
          <p className="text-[14px] font-bold">username</p>

          <div className="text-[12px]">1:00 AM</div>
        </div>

        {/* message content */}
        <div
          className={cn(
            " pt-[7px] px-[15px] pb-[14.6px] rounded-[12px]  text-[14px] max-w-[90%] ",
            type === "other"
              ? "bg-primary-blue-default text-white  rounded-tr-none"
              : " bg-[#F3F4F9] max-md:bg-white rounded-tl-none"
          )}
        >
          You don’t need to have a full time ecommerce business to earn a little
          extra money through your website. You don’t even need to be there all
          the time. All you need to do is wait for the day your advertisers will
          pay you.
        </div>
      </div>
    </div>
  );
};

export default TextMessageCart;
