import { calenderTasksItem, calenderWeekTime } from "../../initials";
import Badge from "../Badge";
import DotPoint from "../DotPoint";

interface props {
  day: any;
}

const CalenderWeekViewCart = ({ day }: props) => {
  const tasks = calenderTasksItem?.filter(
    (item) => item?.date === day.dayDate
  )[0]?.tasks;

  return (
    <div className="flex ">
      <div className=" flex-col h-full w-full">
        <div className="flex flex-col divide-y items-center justify-center bg-white">
          {calenderWeekTime.map((colTime) => (
            <div className="bg-white min-w-full min-h-[40px] flex items-center justify-center ">
              {tasks
                ?.filter((item: any) => colTime.time === item.time)
                .map((task: any) => (
                  <Badge
                    className="w-full mx-p-10 flex items-center max-md:justify-center md:justify-start"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalenderWeekViewCart;
