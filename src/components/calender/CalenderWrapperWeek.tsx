import moment from "jalali-moment";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useCalender } from "../../context/CalenderContext";
import CalenderWeekViewCart from "./CalenderWeekViewCart";
import HandleButton from "./HandleButton";
import { calenderWeekTime } from "../../initials";
import { cn } from "../../lib/utils";

const CalenderWrapperWeek = ({ type, isSelectToday = false }: any) => {
  const [monthState, _setMonthState] = useState(0);
  const { date, handlePreviousMonth, handleNextMonth } = useCalender();
  const [selectedYear, _setSelectedYear] = useState("");
  const [_selectDayState] = useState("");
  const jalaliDate = moment().locale(type).format("YYYY/MM/DD");
  const today = jalaliDate.replace(/\//g, "-");
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [weekSelectedIndex, setWeekSelectedIndex] = useState(-1);

  const persianDate = moment(
    `${selectedYear ? selectedYear : date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`,
    "YYYY-M-D"
  ).locale(type);
  const persianDate2 = moment(
    `${selectedYear ? selectedYear : date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`,
    "YYYY-M-D"
  ).locale(type);

  const months = [] as any;

  for (let i = 0; i < 3; i++) {
    const month = {
      monthName: persianDate.format("MMMM"),
      days: [],
    } as any;

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

    // additional for when typ === 'en' and persianDate.day() === 0
    if (+persianDate.day() === 0 && type !== "fa") {
      [0, 1, 2, 3, 4, 5].reverse().map((item) =>
        month.days.push({
          dayName: "",
          dayDate: `d-d-${+endOfMonth - item}`,
        })
      );
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
  }

  const currentMonthIndex = months.findIndex(
    (m: any) =>
      m.days[15]?.dayDate.split("-")[1] === today.split("-")[1] &&
      m.days[15]?.dayDate.split("-")[0] === today.split("-")[0]
  );

  const findToday = months[currentMonthIndex]?.days.find(
    (a: any) => a.dayDate === today
  );

  const filteredDays = months[monthState]?.days?.filter(
    (day: any) => day?.dayDate === today
  );

  const weeksNum = months[monthState]?.days.length / 7;

  const index = months[monthState]?.days.indexOf(filteredDays[0]);

  let weekIndex;

  weekIndex = Math.ceil((index + 1) / 7);

  const weeKDays =
    weekSelectedIndex >= 0
      ? months[monthState].days.slice(
          weekSelectedIndex * 7,
          (weekSelectedIndex + 1) * 7
        )
      : months[monthState]?.days.slice((weekIndex - 1) * 7, weekIndex * 7);

  useEffect(() => {
    if (isSelectToday && !selectedYear) {
      searchQuery.set("d", today.split("-").join(""));
      searchQuery.set("n", findToday?.dayName);
      setSearchQuery(searchQuery, { replace: true });
      setWeekSelectedIndex(weekIndex - 1);
    }
  }, []);

  const handleNextWeek = () => {
    if (weekSelectedIndex < 0) {
      if (weekIndex < weeksNum) {
        setWeekSelectedIndex(weekSelectedIndex + 1);
      } else {
        handleNextMonth();
        setWeekSelectedIndex(0);
      }
    } else {
      if (weekSelectedIndex < weeksNum - 1) {
        setWeekSelectedIndex(weekSelectedIndex + 1);
      } else {
        handleNextMonth();
        setWeekSelectedIndex(0);
      }
    }
  };

  const handlePreviousWeek = () => {
    if (weekSelectedIndex < 0) {
      if (weekIndex !== 0) {
        setWeekSelectedIndex(weekIndex - 1);
      } else {
        handlePreviousMonth();
        setWeekSelectedIndex(weeksNum - 1);
      }
    } else {
      if (weekSelectedIndex !== 0) {
        setWeekSelectedIndex(weekSelectedIndex - 1);
      } else {
        handlePreviousMonth();
        if (weekSelectedIndex === 0) {
          setWeekSelectedIndex(weeksNum - 1);
        }
      }
    }
  };

  return (
    <div className="lg:flex lg:h-screen  lg:flex-col rounded-[8px]">
      <div className="">
        <div className="flex w-full ">
          <div className="min-w-[40px] bg-white border-b border-outline-default max-md:hidden"></div>
          <div className="grid w-full md:w-[calc(100%-40px)] grid-cols-7 max-md:bg-transparent  md:bg-white text-end lg:flex-none py-p-17 pe-p-13 border-b text-base-12 font-bold border-outline-default">
            {type === "fa" ? (
              <div>شنبه</div>
            ) : (
              <div>{`Mon, ${weeKDays[0]?.dayDate.split("-").pop()}`}</div>
            )}
            {type === "fa" ? (
              <div>یک‌شنبه</div>
            ) : (
              <div>{`Tue, ${weeKDays[1]?.dayDate.split("-").pop()}`}</div>
            )}
            {type === "fa" ? (
              <div>دوشنبه</div>
            ) : (
              <div>{`Wed, ${weeKDays[2]?.dayDate.split("-").pop()}`}</div>
            )}
            {type === "fa" ? (
              <div>سه‌شنبه</div>
            ) : (
              <div>{`Thu, ${weeKDays[3]?.dayDate.split("-").pop()}`}</div>
            )}
            {type === "fa" ? (
              <div>چهارشنبه</div>
            ) : (
              <div>{`Fri, ${weeKDays[4]?.dayDate.split("-").pop()}`}</div>
            )}
            {type === "fa" ? (
              <div>پنج‌شنبه</div>
            ) : (
              <div>{`Sat, ${weeKDays[5]?.dayDate.split("-").pop()}`}</div>
            )}
            {type === "fa" ? (
              <div>جمعه</div>
            ) : (
              <div>{`Sun, ${weeKDays[6]?.dayDate.split("-").pop()}`}</div>
            )}
          </div>
        </div>

        <div className="w-full md:hidden py-p-28 px-p-24">
          <HandleButton />
        </div>

        <div className="flex w-full ">
          <div className="min-w-[40px] flex flex-col bg-white divide-y border-outline-default border-e">
            {calenderWeekTime.map((time, i) => (
              <div
                className={cn(
                  "text-[10px] flex items-center justify-center font-bold min-h-[40px]  border-outline-default"
                )}
              >
                <p className={cn(i % 2 === 0 ? "" : "opacity-0")}>
                  {time.time}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 w-full md:divide-x  rounded-[8px] disabled:border-outline-default">
            {weeKDays.map((day: any) => (
              <CalenderWeekViewCart key={day.dayDate} day={day} />
            ))}
          </div>
        </div>

        <div onClick={handleNextWeek} className="cursor-pointer">
          next
        </div>
        <div onClick={handlePreviousWeek} className="cursor-pointer">
          prev
        </div>
      </div>
    </div>
  );
};

export default CalenderWrapperWeek;
