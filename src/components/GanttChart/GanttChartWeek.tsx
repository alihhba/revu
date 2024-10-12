/* eslint-disable @typescript-eslint/no-explicit-any */

import moment from "jalali-moment";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GanttChartEventCart from "./GanttChartEventCart";

interface props {
  type: "fa" | "en";
}

interface Day {
  dayName: string;
  dayDate: string;
}

interface Month {
  monthName: string;
  days: Day[];
}

export default function GanttChartWeek({ type }: props) {
  const currentDate = new Date().toISOString().slice(0, 10).replace(/\//g, "-");
  const [weekState, setWeekState] = useState(0);
  const persianDate = moment(currentDate, "YYYY-M-D").locale(type);
  const persianDate2 = moment(currentDate, "YYYY-M-D").locale(type);
  const jalaliDate = moment().locale(type).format("YYYY/MM/DD");
  const today = jalaliDate.replace(/\//g, "-");

  const months: any = [];
  const weekDay: any = [];

  for (let i = 0; i < 1; i++) {
    const month: Month = {
      monthName: persianDate.format("MMMM"),
      days: [],
    };

    const endOfMonth = persianDate2
      .subtract(1, "month")
      .endOf("month")
      .format("YYYY/MM/D")
      .split("/")[2];

    persianDate2.add(2, "month");

    persianDate.startOf("month");

    for (let j = type === "fa" ? 0 : 2; j <= +persianDate.day(); j++) {
      if (+persianDate.day() !== 6) {
        month.days.push({
          dayName: "",
          dayDate: `d-d-${+endOfMonth + (j - +persianDate.day())}`,
        });
      }
    }

    const thisMonth = persianDate.format("MM/DD/YY").split("/")[0];

    for (let j = 0; j < persianDate.daysInMonth(); j++) {
      if (persianDate.format("MM/DD/YY").split("/")[0] === thisMonth) {
        month.days.push({
          dayName: persianDate.format("ddd"),
          dayDate: persianDate.format("YYYY-MM-DD"),
        });

        persianDate.add(1, "day");
      }
    }

    const numNextMonth =
      Math.ceil(month.days.length / 7) * 7 - month.days.length;

    for (let j = 0; j < numNextMonth; j++) {
      month.days.push({
        dayName: "",
        dayDate: `d-d-${j + 1}`,
      });
    }

    months.push(month);
    const filteredDays = months[0].days.filter(
      (day: any) => day.dayDate === today
    );
    const index = months[0].days.indexOf(filteredDays[0]);

    const weekIndex = Math.ceil(index / 7);

    // const weeKDays = months[0].days.slice(
    //   ((weekIndex === 1 ? 2 : weekIndex) - 1) * 7 + weekState * 7,
    //   (weekIndex === 1 ? 2 : weekIndex) * 7 + weekState * 7
    // );
    const weeKDays = months[0].days.slice(
      ((weekIndex === 1 ? 2 : weekIndex) - 1) * 7 + weekState * 7,
      (weekIndex === 1 ? 2 : weekIndex) * 7 + weekState * 7
    );

    weekDay.push(weeKDays);
  }

  return (
    <div className="flex h-full flex-col rounded-[8px]">
      {/* header */}
      <div className="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden rounded-lg">
        {weekDay[0].map((day: any) => (
          <div className="flex flex-col items-center pb-3 pt-2">
            <span className=" flex items-center flex-col ">
              {day.dayName}
              <span
                className={`${
                  day.dayDate === today
                    ? "rounded-full bg-blue-600 text-white"
                    : "text-gray-900"
                }  flex h-8 w-8 items-center justify-center font-semibold `}
              >
                {day.dayDate.split("-").pop().replace(/^0/, "")}
              </span>
            </span>
          </div>
        ))}
      </div>

      {/* main */}
      <div className="flex flex-auto rounded-[8px]">
        <div className="grid flex-auto grid-cols-1 grid-rows-1">
          {/* Vertical lines */}
          <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-8 grid-rows-1 divide-x divide-gray-200 sm:grid sm:grid-cols-8">
            <div className="col-start-1 row-span-full" />
            <div className="col-start-1 row-span-full" />
            <div className="col-start-2 row-span-full" />
            <div className="col-start-3 row-span-full" />
            <div className="col-start-4 row-span-full" />
            <div className="col-start-5 row-span-full" />
            <div className="col-start-6 row-span-full" />
            <div className="col-start-7 row-span-full" />
            <div className="col-start-8 row-span-full" />
          </div>
          {/* Horizontal lines */}
          <div
            className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-200"
            style={{ gridTemplateRows: "repeat(48, minmax(3.5rem, 1fr))" }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 6, 6].map((item) => (
              <div key={item}>
                <div className="sticky left-0 z-30 -ml-14 -mt-2.5 w-14    text-right text-xs leading-5 text-gray-400" />
              </div>
            ))}
          </div>
          {/* weeks */}
          <div
            className="relative col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-8"
            style={{
              gridTemplateRows: "3.5rem repeat(300, minmax(0, 1fr)) auto",
            }}
          >
            {/* first empty row col */}
            <div
              className={` w-full border-l  border-gray-200 mx-auto bg-white  flex sm:col-start-1 col-span-1  `}
            >
              <div className=" items-center justify-center w-full h-full gap-5 hidden ">
                <div
                  onClick={() => setWeekState(weekState - 1)}
                  className="cursor-pointer"
                >
                  <ChevronLeft />
                </div>
                <div
                  onClick={() => setWeekState(weekState + 1)}
                  className="cursor-pointer"
                >
                  <ChevronRight />
                </div>
              </div>
            </div>
            {/* days row */}
            {weekDay[0].map((day: any, i: any) => (
              <div
                key={day}
                className={` w-full border-l  border-gray-200 mx-auto bg-white  flex sm:col-start-${
                  i + 2
                } col-span-1  `}
              >
                <div className="flex items-center justify-center py-3 h-full min-h-full   gap-2 w-full">
                  <span className="gap-3 flex items-center w-[97%] justify-center  h-full min-h-full   ">
                    {day.dayName}
                    <span
                      className={`${
                        day.dayDate === today
                          ? "rounded-full bg-blue-600 text-white"
                          : "text-gray-900"
                      } items-center justify-center font-semibold h-8 w-8 flex `}
                    >
                      {day.dayDate.split("-").pop().replace(/^0/, "")}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Events  */}
          {[1, 2].map((event: any) => (
            <GanttChartEventCart event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
