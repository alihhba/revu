import { calenderTasksItem } from "../../initials";
import { cn } from "../../lib/utils";
import Badge from "../Badge";
import DotPoint from "../DotPoint";
import Icon from "../Icon";

interface props {
  day: any;
}

const CalenderMonthCart = ({ day }: props) => {
  return (
    <div
      className={cn(
        "max-md:bg-transparent md:bg-white w-full flex items-start  justify-center min-h-[80px] md:min-h-[120px] md:border-b relative",
        day.dayName
          ? "max-md:border-t-2 max-md:border-x-outline-default"
          : "max-md:border-t-2 max-md:border-transparent"
      )}
    >
      <div
        className={cn(
          "absolute top-[10px] md:end-[10px] ",
          day.dayName
            ? "text-black text-base-12 font-bold"
            : "text-font-storm opacity-45 text-base-12 font-bold max-md:hidden"
        )}
      >
        {day.dayDate.split("-").pop()}
      </div>

      <div className="mt-[35px] w-full px-[12px] flex flex-col gap-1 ">
        {calenderTasksItem
          ?.filter((item) => item?.date === day.dayDate)[0]
          ?.tasks?.slice(0, 2)
          .map((task: any) => (
            <Badge
              className="w-full flex items-center max-md:justify-center md:justify-start"
              type="primary"
              title={
                <div className="flex items-center  gap-p-8 w-full">
                  <DotPoint type="primary" />
                  <p className="text-base-12 font-bold text-black max-md:hidden">
                    {task.task}
                  </p>
                </div>
              }
            />
          ))}

        {calenderTasksItem?.filter((item) => item?.date === day.dayDate)[0]
          ?.tasks.length >= 3 ? (
          <div className="flex items-center gap-p-3 ps-p-5 max-md:hidden">
            <Icon
              icon="/icons/more.svg"
              className="rotate-90"
              width="12px"
              height="12px"
              color="#5f646d"
            />
            <p className="text-base-12 font-medium text-font-storm">
              More event
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CalenderMonthCart;
