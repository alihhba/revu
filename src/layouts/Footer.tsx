import { useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import { useModal } from "../context/ModalContext";
import { sidebarMenuItems } from "../initials";

export const Footer = () => {
  return (
    <div className="flex items-center px-p-70 py-p-25 z-10 bg-grey-default ">
      <div className="flex items-center gap-p-6 pe-p-43">
        <Icon icon="/icons/earth.svg" />
        <p className="font-bold text-base-12">English</p>
      </div>

      <div className="flex gap-p-24 text-0 text-font-storm">
        <p className="font-bold text-base-12">Privacy Policy</p>
        <p className="font-bold text-base-12">LIcense</p>
        <p className="font-bold text-base-12">API</p>
      </div>
    </div>
  );
};

export const FooterMobile = () => {
  const navigate = useNavigate();
  const { changeModalHandler } = useModal();
  const items1 = sidebarMenuItems[0].items;
  const items2 = sidebarMenuItems[1].items;

  return (
    <div className="fixed flex items-center justify-between bottom-0 w-full bg-primary-white-default py-p-13 px-p-28">
      <div onClick={() => navigate(items1[0].title)}>
        <Icon icon={items1[0].icon!} width="22px" height="22px" />
      </div>
      <div onClick={() => navigate(items1[1].title)}>
        <Icon icon={items1[1].icon!} width="22px" height="22px" />
      </div>

      <div className="bg-primary-blue-default py-p-14 px-p-15 rounded-[8px]">
        <Icon icon="/icons/add.svg" width="22px" height="22px" />
      </div>

      <div onClick={() => navigate(items2[0].title)}>
        <Icon icon={items2[0].icon!} width="22px" height="22px" />
      </div>
      <div
        onClick={() =>
          changeModalHandler({ modalType: "mobile-menu", isModal: true })
        }
      >
        <Icon icon="/icons/more.svg" width="22px" height="22px" />
      </div>
    </div>
  );
};
