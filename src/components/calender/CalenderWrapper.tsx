import moment from "jalali-moment";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useCalender } from "../../context/CalenderContext";
import CalenderMonthCart from "./CalenderMonthCart";
import HandleButton from "./HandleButton";

const CalenderWrapper = ({ type, isSelectToday = false }: any) => {
  const [monthState, _setMonthState] = useState(0);
  const { date } = useCalender();
  const [selectedYear, _setSelectedYear] = useState("");
  //   const [yearsToSelect, setYearsToSelect] = useState([]);
  const [_selectDayState] = useState("");
  const jalaliDate = moment().locale(type).format("YYYY/MM/DD");
  const today = jalaliDate.replace(/\//g, "-");
  //   const [date, setDate] = useState(new Date());
  const [searchQuery, setSearchQuery] = useSearchParams();
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
  //   const query2 = searchQuery.get(query || "");

  const months = [] as any;

  //   const handleNextMonth = () => {
  //     const nextMonth = date.getMonth() + 1;
  //     if (nextMonth > 11) {
  //       setDate(new Date(date.getFullYear() + 1, 0, 1));
  //     } else {
  //       setDate(new Date(date.getFullYear(), nextMonth, 1));
  //     }
  //   };

  //   const handlePreviousMonth = () => {
  //     const previousMonth = date.getMonth() - 1;
  //     if (previousMonth < 0) {
  //       setDate(new Date(date.getFullYear() - 1, 11, 1));
  //     } else {
  //       setDate(new Date(date.getFullYear(), previousMonth, 1));
  //     }
  //   };

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
      m.days[15].dayDate.split("-")[1] === today.split("-")[1] &&
      m.days[15].dayDate.split("-")[0] === today.split("-")[0]
  );

  //   const selectedIndex = months.findIndex(
  //     (m: any) =>
  //       m.days[15].dayDate.split("-")[1] === query2?.slice(4, 6) &&
  //       m.days[15].dayDate.split("-")[0] === query2?.slice(0, 4)
  //   );

  const findToday = months[currentMonthIndex]?.days.find(
    (a: any) => a.dayDate === today
  );

  //   const filteredDays = months[monthState]?.days?.filter(
  //     (day: any) => day?.dayDate === today
  //   );
  //   const index = months[monthState]?.days.indexOf(filteredDays[0]);

  //   const weekIndex = Math.ceil((index + 1) / 7);
  // const weekIndex = Math.ceil(index  / 7) ;

  // const weekIndex = 2;

  //   const weeKDays = months[monthState]?.days.slice(
  //     (weekIndex - 1) * 7,
  //     weekIndex * 7
  //   );

  useEffect(() => {
    if (isSelectToday && !selectedYear) {
      searchQuery.set("d", today.split("-").join(""));
      searchQuery.set("n", findToday?.dayName);
      setSearchQuery(searchQuery, { replace: true });
    }
  }, []);

  return (
    <div className="lg:flex lg:h-screen overflow-y-auto lg:flex-col rounded-[8px]">
      <div className="">
        <div className="grid grid-cols-7 max-md:bg-transparent  md:bg-white text-end lg:flex-none py-p-17 pe-p-13 border-b text-base-12 font-bold border-outline-default">
          {type === "fa" ? <div>شنبه</div> : <div>Mon</div>}
          {type === "fa" ? <div>یک‌شنبه</div> : <div>Tue</div>}
          {type === "fa" ? <div>دوشنبه</div> : <div>Wed</div>}
          {type === "fa" ? <div>سه‌شنبه</div> : <div>Thu</div>}
          {type === "fa" ? <div>چهارشنبه</div> : <div>Fri</div>}
          {type === "fa" ? <div>پنج‌شنبه</div> : <div>Sat</div>}
          {type === "fa" ? <div>جمعه</div> : <div>Sun</div>}
        </div>

        <div className="w-full md:hidden py-p-28 max-md:px-p-24">
          <HandleButton />
        </div>

        <div className="grid grid-cols-7 md:divide-x  rounded-[8px] disabled:border-outline-default max-md:px-p-24">
          {months[monthState].days.map((day: any) => (
            <CalenderMonthCart day={day} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalenderWrapper;
