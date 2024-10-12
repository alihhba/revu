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
    path: "all_projects",
  },
  {
    title: "pending",
    path: "pending",
  },
  {
    title: "done",
    path: "done",
  },
  {
    title: "archived",
    path: "archived",
  },
];



const Projects = () => {
  const { changeNavbarDesktopHandler, resetNavbar } = useNavbar();
  const { id } = useParams();
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const { ChangeMobileTitleHandler } = useNavbar();

  useEffect(() => {
    ChangeMobileTitleHandler({ type: 2 });

    return () => {
      resetNavbar();
    };
  }, []);

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
    if (!pathname.split("/")[2]) navigate(`/projects/${tabsItems[0].path}`);
  }, [navigate, pathname]);

  return (
    <div className="h-full w-full">
      <MainLayout>
        {/* tabs */}
        {id ? (
          <div className="flex items-center justify-between w-full">
            <div className="max-md:me-p-10">
              <TabComponent tabTitles={tabsItems} activeId={id!} />
            </div>
            {/* desktop buttons */}
            <div className="max-md:hidden flex items-center gap-p-6 ">
              <Button
                type="border"
                className="font-black text-base-12"
                content={
                  <div className="flex items-center gap-p-6">
                    <Icon icon="/icons/more_2.svg" />
                    <p>Sort:A-Z</p>
                  </div>
                }
              />
              <Button
                type="border"
                className="font-black text-base-12"
                content={
                  <div className="flex items-center gap-p-6">
                    <Icon icon="/icons/more.svg" />
                    <p>Bulk Actions</p>
                  </div>
                }
              />
            </div>
            {/* mobile button */}
            <div className="md:hidden">
              <Button
                type="square_Border"
                content={
                  <div>
                    <Icon icon="/icons/more_2.svg" />
                  </div>
                }
              />
            </div>
          </div>
        ) : null}

        {/* main outlet */}
        <div className="mt-p-20">
          <Outlet />
        </div>
      </MainLayout>
    </div>
  );
};

export default Projects;
