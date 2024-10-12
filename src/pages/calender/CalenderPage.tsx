import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CalenderWrapper from "../../components/calender/CalenderWrapper";
import CalenderWrapperWeek from "../../components/calender/CalenderWrapperWeek";
import HandleButton from "../../components/calender/HandleButton";
import TabComponent from "../../components/TabComponent";
import { useNavbar } from "../../context/NavbarContext";

const Navbar2 = () => {
  const location = useLocation();
  const { pathname } = location;

  const navTabId = [
    {
      title: "Month",
      path: `month`,
      path2: `${pathname.replace(`${pathname.split("/").pop()}`, "month")}`,
    },
    {
      title: "Week",
      path: "week",
      path2: `${pathname.replace(`${pathname.split("/").pop()}`, "week")}`,
    },
    {
      title: "Day",
      path: "day",
      path2: `${pathname.replace(`${pathname.split("/").pop()}`, "day")}`,
    },
  ];
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-p-14 ">
        <div className="max-md:hidden">
          <HandleButton />
        </div>
      </div>
      <TabComponent
        classname="max-md:max-w-[87vw]"
        activeId={pathname.split("/").pop()!}
        tabTitles={navTabId}
      />

      <div></div>
    </div>
  );
};

const CalenderPage = () => {
  const { changeNavbarDesktopHandler, ChangeMobileTitleHandler } = useNavbar();
  const navigate = useNavigate();
  const { tabId } = useParams();

  useEffect(() => {
    changeNavbarDesktopHandler({ contentUnderNavbar: Navbar2 });
    ChangeMobileTitleHandler({ type: 2 });

    return () => {
      changeNavbarDesktopHandler({ contentUnderNavbar: null });
    };
  }, [navigate]);

  useEffect(() => {
    if (!tabId) navigate(`month`);
  }, [navigate]);

  return (
    <div>
      <div className="2xl:px-[70px] md:px-[30px] md:pt-[20px] md:pb-p-15  max-md:py-p-4 bg-transparent">
        <div className="max-md:pt-p-20">
          {tabId === "month" ? <CalenderWrapper type="en" /> : null}
        </div>
        <div className="max-md:pt-p-20">
          {tabId === "week" ? <CalenderWrapperWeek type="en" /> : null}
        </div>
      </div>
    </div>
  );
};

export default CalenderPage;
