import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Button from "../components/Button";
import Icon from "../components/Icon";
import TabComponent from "../components/TabComponent";
import { useNavbar } from "../context/NavbarContext";
import { sidebarMenuItems } from "../initials";
import MainLayout from "./MainLayout";

const NavBar2 = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="md:mt-p-5 max-md:px-p-24 max-md:pb-p-20 md:pt-0  sticky top-[74px] pt-p-4 md:top-[72px] z-[2] bg-grey-default">
      <div className="flex caret-inherit justify-between sticky ">
        <div>
          <TabComponent
            classname="max-md:max-w-[87vw]"
            activeId={pathname.split("/")[1]}
            tabTitles={sidebarMenuItems[1].items.slice(0, 7)}
          />
        </div>

        <div className="max-md:hidden">
          <Button
            content={
              <div className="flex items-center gap-p-6">
                <Icon icon="/icons/more_2.svg" />
                <p className="text-base-12 font-bold min-w-fit">Sort: A-Z</p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

const NavigationsItemsLayout = () => {
  const location = useLocation();
  const { pathname } = location;
  const { changeNavbarDesktopHandler, resetNavbar, ChangeMobileTitleHandler } =
    useNavbar();

  useEffect(() => {
    changeNavbarDesktopHandler({
      type: pathname.split("/")[1] === "tasks" ? 1 : 2,
      contentUnderNavbar: NavBar2,
    });
    ChangeMobileTitleHandler({
      type: pathname.split("/")[1] === "tasks" ? 2 : 3,
    });

    return () => {
      resetNavbar();
    };
  }, [pathname]);

  return (
    <div className="relative">
      <MainLayout className="max-md:pt-p-20">
        <Outlet />
      </MainLayout>
    </div>
  );
};

export default NavigationsItemsLayout;
