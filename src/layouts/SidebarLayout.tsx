import { useLocation, useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import { sidebarMenuItems } from "../initials";
import { cn } from "../lib/utils";
import UserImage from "../components/UserImage";
import { useModal } from "../context/ModalContext";

const SidebarLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const { changeModalHandler } = useModal();

  return (
    <div className="relative  md:border-e max-md:h-fit flex flex-col border-outline-15 h-screen w-fit   md:pt-p-18 max-md:w-full *: md:max-w-[18.75rem] lg:min-w-[15rem] 2xl:min-w-[18.75rem]">
      {/* logo */}
      <div className="mb-p-28  z-10 ps-p-34 max-md:hidden">
        <Icon icon="/logo/logo.svg" width="92px" height="36px" />
      </div>

      {/* item content */}
      <div className="scrollbar-none overflow-y-auto overflow-x-hidden md:pb-p-75 md:ps-p-34">
        {sidebarMenuItems.map((items) => (
          <div
            key={items.id}
            className="flex flex-col gap-p-9 mt-p-13 first:mt-0"
          >
            {/* title */}
            <div>
              <p className="text-font-storm text-base-12 font-medium capitalize">
                {items.title}
              </p>
            </div>

            {/* items */}
            <div className="gap-0 mt md:pe-p-30 max-md:ms-p-10 max-md:w-full">
              {items.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    navigate(item?.path!);
                    changeModalHandler({ isModal: false });
                  }}
                  className={cn(
                    "flex relative items-center gap-p-13 px-p-13 max-md:w-full  py-p-11 rounded-[4px] -ms-p-10 cursor-pointer transition-all",
                    pathname.split("/")[1].includes(item?.path!)
                      ? "bg-secondary-blue_soft "
                      : "bg-transparent "
                  )}  
                >
                  {item.icon ? (
                    <div className="flex items-center gap-p-13">
                      <Icon icon={item.icon} width="1rem" height="1rem" />
                    </div>
                  ) : null}
                  {item.image ? (
                    <div>
                      <UserImage image={item.image} />
                    </div>
                  ) : null}

                  <p className="text-base-14 font-bold capitalize">
                    {item.title}
                  </p>

                  {pathname.split("/")[1].includes(item?.path!) ? (
                    <div className="h-full min-h-full absolute top-0 end-0 w-p-4 bg-primary-blue-default  md:-me-p-32 rounded-full   transition-all"></div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t max-md:hidden flex  justify-between border-outline-default px-p-34 py-p-23  absolute bottom-0 z-10 w-full bg-grey-default">
        <div className="flex gap-p-10">
          <UserImage image={"/images/user_4.svg"} />
          <p className="text-base-14 font-bold capitalize">Henry Richardson</p>
        </div>
        <div>
          <Icon icon="/icons/more.svg" color="#000" />
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
