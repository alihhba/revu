import { useCalender } from "../../context/CalenderContext";
import Button from "../Button";
import Icon from "../Icon";

const HandleButton = () => {
  const { handleNextMonth, handlePreviousMonth, date } = useCalender();

  return (
    <div className="flex items-center gap-p-14">
      <div className="flex items-center gap-p-4 w-full">
        <Button
          onclick={() => handlePreviousMonth()}
          type="square_Border"
          className="px-p-10"
          content={
            <Icon
              icon="/icons/down.svg"
              className="rotate-90"
              height="12px"
              width="12px"
            />
          }
        />
        <Button
          onclick={() => handleNextMonth()}
          type="square_Border"
          content={
            <Icon
              icon="/icons/down.svg"
              className="-rotate-90"
              height="12px"
              width="12px"
            />
          }
        />
      </div>

      <div className="flex items-center gap-p-3 text-base-14 font-bold max-md:text-h5">
        <p>{date.toString().split(" ")[1]}</p>
        <p>{date.getFullYear()}</p>
      </div>
    </div>
  );
};

export default HandleButton;
