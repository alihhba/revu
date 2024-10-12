import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import TabComponent from "../../components/TabComponent";
import BioContactDetails from "../../components/contactProfile/BioContactDetails";
import ContactsProfileDetails from "../../components/contactProfile/ContactsProfileDetails";
import ContactsTasksDetails from "../../components/contactProfile/ContactsTasksDetails";
import ProfileInfoDetails from "../../components/contactProfile/ProfileInfoDetails";
import StatisticsContactDetails from "../../components/contactProfile/StatisticsContactDetails";
import { useNavbar } from "../../context/NavbarContext";
import { contactItems } from "../../initials";

const NavBar2 = () => {
  const location = useLocation();
  const { pathname } = location;

  // const contactInfo = contactItems.filter(
  //   (item) => +item.id === +pathname.split("/")[3]
  // )[0];

  const navTabId = [
    {
      title: "Updates",
      path: `updates`,
      path2: `${pathname.replace(`${pathname.split("/").pop()}`, "updates")}`,
    },
    {
      title: "Tasks",
      path: "tasks",
      path2: `${pathname.replace(`${pathname.split("/").pop()}`, "tasks")}`,
    },
    {
      title: "Statistics",
      path: "statistics",
      path2: `${pathname.replace(
        `${pathname.split("/").pop()}`,
        "statistics"
      )}`,
    },
    {
      title: "Bio",
      path: "bio",
      path2: `${pathname.replace(`${pathname.split("/").pop()}`, "bio")}`,
    },
    {
      title: "Settings",
      path: "settings",
      path2: `${pathname.replace(`${pathname.split("/").pop()}`, "settings")}`,
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
        </div>
      </div>
    </div>
  );
};

const ContactProfilePage = () => {
  const { changeNavbarDesktopHandler } = useNavbar();
  const { contact_id, tabId } = useParams();
  const location = useLocation();
  const { pathname } = location;

  const contactInfo = contactItems.filter(
    (item) => +item.id === +contact_id!
  )[0];

  useEffect(() => {
    changeNavbarDesktopHandler({ contentUnderNavbar: NavBar2 });

    return () => {
      changeNavbarDesktopHandler({ contentUnderNavbar: null });
    };
  }, [pathname]);

  return (
    <div className="flex items-start justify-center w-full ">
      {/* left */}

      {tabId === "updates" ? <ContactsProfileDetails /> : null}
      {tabId === "tasks" ? <ContactsTasksDetails /> : null}
      {tabId === "statistics" ? <StatisticsContactDetails /> : null}
      {tabId === "bio" ? <BioContactDetails item={contactInfo} /> : null}

      {/* right */}
      <div className="w-full min-w-[235px] max-w-min  max-md:hidden ms-p-30">
        <ProfileInfoDetails item={contactInfo} />
      </div>
    </div>
  );
};

export default ContactProfilePage;
