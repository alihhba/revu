import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Icon from "../components/Icon";
import MoreDetailsComponent from "../components/MoreDetailsComponent";
import UserImage from "../components/UserImage";
import { useNavbar } from "../context/NavbarContext";
import { cn } from "../lib/utils";
import DropDownLayerOne from "./DropDownLayerOne";

const appDropDownItems = [
  { image: "/images/Dropbox_Icon.svg", title: "Dropbox" },
  { image: "/images/dribble.svg", title: "Dribble" },
  { image: "/images/Slack.svg", title: "slack" },
  { image: "/images/Pinterest.svg", title: "Pinterest" },
  { image: "/images/Twitter.svg", title: "Twitter" },
  { image: "/images/Google.svg", title: "Google" },
];

// desktop
export const Navbar = ({ type }: { type: number }) => {
  const { content, desktopTitleNav, classname, contentUnderNavbar } =
    useNavbar();
  const location = useLocation();
  const { pathname } = location;

  return (
    <div
      className={cn(
        "w-full flex flex-col justify-between pb-p-10  md:pt-p-10 border-b border-outline-default max-md:px-p-24 2xl:px-p-70 md:px-p-30",
        classname
      )}
    >
      {/* navbar one */}
      <div className="flex items-center justify-between w-full">
        {/* left */}
        <div className="flex items-center  py-p-8 cursor-pointer">
          {type === 2 ? (
            <div className="size-p-36 bg-secondary-blue_soft rounded-full flex items-center justify-center">
              <Icon
                icon="/icons/dimond.svg"
                width="1.125rem"
                height="0.98rem"
              />
            </div>
          ) : null}

          <div className={cn(type === 2 ? "ms-p-13" : "")}>
            <p className="text-h5 font-extrabold capitalize">
              {desktopTitleNav || pathname.split("/")[1].split("_").join(" ")}
            </p>
          </div>

          {type === 2 ? (
            <div className="ps-p-31">
              <Icon icon="/icons/down.svg" height="0.8rem" width="0.8rem" />
            </div>
          ) : null}
        </div>

        {/* right */}
        <div className="flex items-center">
          <div className="pe-p-24">
            <Icon icon="/icons/search.svg" />
          </div>
          <div className="pe-p-21">
            <Icon icon="/icons/ring.svg" />
          </div>

          {/* content */}
          {content ? (
            <div className="me-p-18 max-md:hidden">{content}</div>
          ) : null}

          {/* button */}
          <div className="flex items-center gap-p-6">
            <MoreDetailsComponent
              offsetNum={11}
              icon={
                <Button
                  type="border"
                  content={
                    <div className="flex items-center gap-p-6">
                      <Icon icon="/icons/puzzle.svg" />
                      <p>Apps</p>
                    </div>
                  }
                />
              }
            >
              <DropDownLayerOne
                className={"py-p-16 px-p-16 grid grid-cols-3 z "}
              >
                {appDropDownItems.map((item) => (
                  <div className="px-p-19 rounded-[8px] py-p-11 mb-p-6 flex flex-col gap-p-11 hover:bg-grey-default items-center cursor-pointer ">
                    <Icon icon={item.image} width="28px" height="28px" />

                    <p className="font-bold text-base-12">{item.title}</p>
                  </div>
                ))}
              </DropDownLayerOne>
            </MoreDetailsComponent>

            <MoreDetailsComponent
              placement={"bottom-end"}
              offsetNum={11}
              icon={
                <Button
                  type="purple"
                  className=""
                  content={
                    <div className="flex items-center gap-p-6">
                      <Icon icon="/icons/more.svg" color="#fff" />
                      <p>Create new</p>
                    </div>
                  }
                />
              }
            >
              <DropDownLayerOne>
                <div className="px-p-27 py-p-11 mb-p-6 flex gap-p-13 items-center cursor-pointer ">
                  <Icon icon="/icons/projects.svg" />

                  <p className="font-bold text-base-14">New Project</p>
                </div>
                <div className="px-p-27 py-p-11 mb-p-6 flex gap-p-13 items-center cursor-pointer ">
                  <Icon icon="/icons/task.svg" />

                  <p className="font-bold text-base-14">New Task</p>
                </div>
                <div className="px-p-27 py-p-11 mb-p-6 flex gap-p-13 items-center cursor-pointer ">
                  <Icon icon="/icons/new_contact.svg" />

                  <p className="font-bold text-base-14">New Contact</p>
                </div>
                <div className="px-p-27 py-p-11  flex gap-p-13 items-center  cursor-pointer">
                  <Icon icon="/icons/new_event.svg" />

                  <p className="font-bold text-base-14">New Event</p>
                </div>
              </DropDownLayerOne>
            </MoreDetailsComponent>
          </div>
        </div>
      </div>

      {/* navbar 2 */}
      <div>{contentUnderNavbar}</div>
    </div>
  );
};

// navbar mobile

export const NavbarMobile = ({ type }: { type: number }) => {
  const { mobileTitle, contentUnderNavbar } = useNavbar();
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full">
      {/* navbar 1 */}
      <div
        className={cn(
          "flex justify-between items-center py-p-19 px-p-24 w-full"
        )}
      >
        {type === 2 ? (
          <div>
            <Button
              className={"px-p-8  py-p-8"}
              type="border"
              onclick={() => navigate(-1)}
              content={
                <Icon
                  icon="/icons/down.svg"
                  width="0.7rem"
                  height="0.8rem"
                  className="rotate-90"
                />
              }
            />
          </div>
        ) : null}

        {type === 2 ? (
          <div>
            <p className="text-h6 font-bold  capitalize">
              {mobileTitle
                ? mobileTitle
                : pathname.split("/")[1].split("_").join(" ")}
            </p>
          </div>
        ) : null}

        {type === 1 ? (
          <div className="flex flex-col gap-p-2">
            <div className="text-base-14 font-regular text-font-blue">
              {pathname.split("/")[1].split("_").join(" ")}
            </div>
            <div className="font-bold text-h3">Page Title</div>
          </div>
        ) : null}

        {type === 1 || type === 2 ? (
          <div>
            <UserImage image="/images/user_4.svg" className="w-p-32 w-h-32" />
          </div>
        ) : null}

        {type === 3 ? (
          <div className="flex items-center gap-p-14">
            <div className="size-p-36 bg-secondary-blue_soft rounded-full flex items-center justify-center">
              <Icon
                icon="/icons/dimond.svg"
                width="1.125rem"
                height="0.98rem"
              />
            </div>

            <div>
              <p className="text-h6 font-bold capitalize">
                {mobileTitle
                  ? mobileTitle
                  : pathname.split("/")[1].split("_").join(" ")}
              </p>
            </div>
          </div>
        ) : null}

        {type === 3 ? (
          <div>
            <Button
              className={"px-p-8  py-p-8"}
              type="border"
              content={
                <Icon icon="/icons/down.svg" width="0.7rem" height="0.8rem" />
              }
            />
          </div>
        ) : null}
      </div>

      {/* navbar 2 */}

      {/* navbar 2 */}
      <div>{contentUnderNavbar}</div>
    </div>
  );
};
