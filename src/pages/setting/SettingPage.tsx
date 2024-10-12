import { Outlet, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import CartWrapper from "../../components/carts/CartWrapper";
import Icon from "../../components/Icon";
import Image from "../../components/Image";
import MenuTabCart from "../../components/MenuTabCart";
import SettingsApps from "../../components/settings/SettingsApps";
import SettingsBilling from "../../components/settings/SettingsBilling";
import SettingsGeneralInformation from "../../components/settings/SettingsGeneralInformation";
import SettingsNotification from "../../components/settings/SettingsNotification";
import { deviceType } from "../../lib/utils";
import { useEffect } from "react";

export const settingsMenuTabItems = [
  {
    icon: "/icons/list.svg",
    title: "General information",
    desc: "Title, company, and more",
    path: "general",
    content: <SettingsGeneralInformation />,
  },
  {
    icon: "/icons/biling.svg",
    title: "Billing",
    desc: "Setup payment methods",
    path: "billing",
    content: <SettingsBilling />,
  },
  {
    icon: "/icons/apps.svg",
    title: "Apps",
    desc: "Linked apps and services",
    path: "apps",
    content: <SettingsApps />,
  },
  {
    icon: "/icons/notification.svg",
    title: "Notification",
    desc: "Your email notifications",
    path: "notification",
    content: <SettingsNotification />,
  },
];

const SettingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const device = deviceType();

  useEffect(() => {
    if (!id && device === "web") {
      navigate("general");
    }
  }, [navigate]);

  return (
    <div>
      {/* desktop */}
      <CartWrapper className="px-p-0 py-p-0 max-md:hidden">
        <div className="flex relative w-full ">
          {/* left */}
          <div className="flex items-center flex-col w-fit min-w-[321px] border-r border-outline-default py-p-20 px-p-20">
            {/* header */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative rounded-full bg-grey-default p-p-21 w-fit mx-auto">
                <Image image="/icons/dimond.svg" className="w-p-46 h-p-46" />

                <div className="absolute bottom-0 -right-3">
                  <Button
                    className="w-fit h-fit px-p-8 py-p-8"
                    type="primary_white"
                    content={<Icon icon="/icons/camera.svg" />}
                  />
                </div>
              </div>

              <p className="text-h6 font-bold mt-p-18">Interface development</p>

              <p className="text-base-14 font-regular text-font-storm mt-p-6">
                Dribbble Inc.
              </p>
            </div>

            {/* content */}

            <div className="flex flex-col mt-p-39 gap-p-2 w-full">
              {settingsMenuTabItems.map((menu) => (
                <MenuTabCart item={menu} />
              ))}
            </div>
          </div>

          {/* right */}
          <div className="flex h-[73vh] flex-col overflow-y-auto w-full scrollbar-thin  py-p-20 px-p-20">
            <div className="w-full flex flex-col ">
              {settingsMenuTabItems.find((item) => item.path === id)?.content}
              {/* <Outlet /> */}
            </div>

            {/* buttons */}
            <div className="flex items-center justify-between  mt-auto pt-p-40">
              <Button type="purple" content={"Update Settings"} />
              <Button type="cancel" content={"Cancel"} />
            </div>
          </div>
        </div>
      </CartWrapper>

      {/* mobile */}

      {!id ? (
        <div className="flex flex-col md:hidden">
          {/* header */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative rounded-full bg-[#5F646D]/10 p-p-21 w-fit mx-auto">
              <Image image="/icons/dimond.svg" className="w-p-46 h-p-46" />

              <div className="absolute bottom-0 -right-3">
                <Button
                  className="w-fit h-fit px-p-8 py-p-8"
                  type="primary_white"
                  content={<Icon icon="/icons/camera.svg" />}
                />
              </div>
            </div>

            <p className="text-h4 font-bold mt-p-18">Interface development</p>

            <p className="text-base-14 font-regular text-font-storm mt-p-6">
              Dribbble Inc.
            </p>
          </div>

          {/* content */}
          <div className="mt-p-54">
            <CartWrapper>
              <div className="flex flex-col  w-full ">
                {settingsMenuTabItems.map((item) => (
                  <div
                    onClick={() => navigate(item.path)}
                    className="flex items-center justify-between py-p-14"
                  >
                    <div className="flex items-center gap-p-13">
                      <Icon
                        icon={item.icon}
                        height="22px"
                        width="22px"
                        color="#000"
                      />
                      <p className="text-base-14 font-bold">{item.title}</p>
                    </div>

                    <div>
                      <Icon
                        icon="/icons/down.svg"
                        height="14px"
                        width="14px"
                        className="-rotate-90"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CartWrapper>
          </div>
        </div>
      ) : null}

      <div className="md:hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingPage;
