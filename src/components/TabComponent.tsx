import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { cn } from "../lib/utils";

interface props {
  tabTitles: {
    title: string;
    path?: string;
    state?: string;
    path2?: string;
  }[];
  activeId: string;
  classname?: string;
}

const TabComponent = ({ tabTitles, activeId, classname }: props) => {
  const navigate = useNavigate();
  return (
    <div
      className={cn(
        "flex  items-center md:gap-p-2 overflow-x-auto max-md:max-w-[70vw]",
        classname
      )}
    >
      {tabTitles.map((tab) => (
        <Button
          type={"tab"}
          className={cn(
            "capitalize max-md:text-base-12 w-fit min-w-fit ",
            activeId === tab.path?.split("/").pop()
              ? "text-white"
              : "bg-transparent text-black "
          )}
          content={tab.title}
          onclick={() => {
            if (tab.path) {
              if (tab.path2) {
                navigate(tab.path2);
              } else {
                navigate(tab.path || tab.path2 || tab.title);
              }
            }
          }}
        />
      ))}
    </div>
  );
};

export default TabComponent;
