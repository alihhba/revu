import { createContext, useContext, useState } from "react";

const CalenderContext = createContext<any>(null);

export const CalenderProvider = ({ children }: any) => {
  const [date, setDate] = useState(new Date());

  const handleNextMonth = () => {
    const nextMonth = date.getMonth() + 1;
    if (nextMonth > 11) {
      setDate(new Date(date.getFullYear() + 1, 0, 1));
    } else {
      setDate(new Date(date.getFullYear(), nextMonth, 1));
    }
  };

  const handlePreviousMonth = () => {
    const previousMonth = date.getMonth() - 1;
    if (previousMonth < 0) {
      setDate(new Date(date.getFullYear() - 1, 11, 1));
    } else {
      setDate(new Date(date.getFullYear(), previousMonth, 1));
    }
  };

  return (
    <CalenderContext.Provider
      value={{ date, handleNextMonth, handlePreviousMonth }}
    >
      {children}
    </CalenderContext.Provider>
  );
};

export const useCalender = () => useContext(CalenderContext);
