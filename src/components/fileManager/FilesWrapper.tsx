import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { fileManagerItems } from "../../initials";
import { useNavbar } from "../../context/NavbarContext";
import TabComponent from "../TabComponent";
import Button from "../Button";
import Icon from "../Icon";
import { useEffect } from "react";
import FileCart from "./FileCart";
import { deviceType } from "../../lib/utils";

const NavBar2 = () => {
  const location = useLocation();
  const { pathname } = location;

  const navTabId = [
    {
      title: "All",
      path: `all`,
      path2: `${pathname.replace(`${pathname.split("/").pop()}`, "all")}`,
    },
    {
      title: "Documents",
      path: "documents",
      path2: `${pathname.replace(`${pathname.split("/").pop()}`, "documents")}`,
    },
    {
      title: "Images",
      path: "images",
      path2: `${pathname.replace(`${pathname.split("/").pop()}`, "images")}`,
    },
    {
      title: "Archives",
      path: "archives",
      path2: `${pathname.replace(`${pathname.split("/").pop()}`, "archives")}`,
    },
  ];

  return (
    <div className="md:mt-p-5 max-md:px-p-24 max-md:pb-p-20 md:pt-0  sticky top-[74px] pt-p-4 md:top-[72px] z-[2] bg-grey-default max-md:flex-col">
      <div className="flex caret-inherit justify-between sticky ">
        <div>
          <TabComponent
            classname="max-md:max-w-[87vw]"
            activeId={pathname.split("/").pop()!}
            tabTitles={navTabId}
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
          <Button
            content={
              <div className="flex items-center gap-p-6">
                <Icon icon="/icons/upload_cloud.svg" />
                <p className="text-base-12 font-bold min-w-fit">
                  Upload new file
                </p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

const FilesWrapper = () => {
  const { folderId, tabId, fileId } = useParams();
  const navigate = useNavigate();
  const { changeNavbarDesktopHandler, ChangeMobileTitleHandler } = useNavbar();
  const device = deviceType();

  useEffect(() => {
    if (!tabId && !fileId) navigate(`all`, { replace: true });
  }, [navigate]);

  useEffect(() => {
    if (!fileId) {
      if (device === "web") {
        changeNavbarDesktopHandler({ contentUnderNavbar: NavBar2 });
      }
      ChangeMobileTitleHandler({ type: 2 });
    }

    return () => {
      changeNavbarDesktopHandler({ contentUnderNavbar: null });
    };
  }, [navigate]);

  const files = fileManagerItems.find((file) => +file.id === +folderId!)?.files;

  return (
    <MainLayout>
      <div className="flex flex-col gap-p-7">
        {files
          ?.filter((file) =>
            tabId === "all" ? file.id : file.category === tabId
          )
          .map((file) => (
            <FileCart item={file} />
          ))}
      </div>

      <div>
        <Outlet />
      </div>
    </MainLayout>
  );
};

export default FilesWrapper;
