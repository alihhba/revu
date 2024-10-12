import { useEffect } from "react";
import { useNavbar } from "../../context/NavbarContext";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import TabComponent from "../../components/TabComponent";
import Button from "../../components/Button";
import Icon from "../../components/Icon";

const tabsItems = [
  {
    title: "all projects",
    path: "/projects/all_projects",
  },
  {
    title: "pending",
    path: "/projects/pending",
  },
  {
    title: "done",
    path: "/projects/done",
  },
  {
    title: "archived",
    path: "/projects/archived",
  },
];

const Navbar2 = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="flex items-center justify-between w-full max-md:px-p-20">
      <div className="max-md:me-p-10">
        <TabComponent tabTitles={tabsItems} activeId={pathname.split("/")[2]} />
      </div>
      {/* desktop buttons */}
      <div className="max-md:hidden flex items-center gap-p-6 ">
        <Button
          className="font-black text-base-12"
          content={
            <div className="flex items-center gap-p-6">
              <Icon icon="/icons/more_2.svg" />
              <p>Sort:A-Z</p>
            </div>
          }
        />
      </div>
      {/* mobile button */}
      <div className="md:hidden">
        <Button
          type="border"
          className="px-[10px] py-[10px]"
          content={
            <div>
              <Icon icon="/icons/more_2.svg" />
            </div>
          }
        />
      </div>
    </div>
  );
};

const ProjectsV2 = () => {
  const { changeNavbarDesktopHandler, resetNavbar, ChangeMobileTitleHandler } =
    useNavbar();
  const { id } = useParams();
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  useEffect(() => {
    ChangeMobileTitleHandler({ type: 2 });
    changeNavbarDesktopHandler({ contentUnderNavbar: Navbar2 });

    return () => {
      resetNavbar();
    };
  }, [navigate]);

  useEffect(() => {
    changeNavbarDesktopHandler({
      desktopTitle: tabsItems.filter((tab) => tab.path === id)[0]?.title,
    });
    ChangeMobileTitleHandler({
      state: tabsItems.filter((tab) => tab.path === id)[0]?.title,
      type: 2,
    });
  }, [id]);

  useEffect(() => {
    if (!pathname.split("/")[2])
      navigate(`/projects/${tabsItems[0].path.split("/").pop()}`);
  }, [navigate, pathname]);

  return (
    <div className="h-full w-full">
      <MainLayout>
        {/* main outlet */}
        <div className="mt-p-20">
          <Outlet />
        </div>
      </MainLayout>
    </div>
  );
};

export default ProjectsV2;
