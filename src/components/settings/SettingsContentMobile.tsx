import { useParams } from "react-router-dom";
import { settingsMenuTabItems } from "../../pages/setting/SettingPage";
import { useNavbar } from "../../context/NavbarContext";
import { useEffect } from "react";
import { deviceType } from "../../lib/utils";

const SettingsContentMobile = () => {
  const { id } = useParams();
  const device = deviceType();
  const { ChangeMobileTitleHandler, changeNavbarDesktopHandler } = useNavbar();

  useEffect(() => {
    ChangeMobileTitleHandler({ type: 2 });
    if (device !== "web") {
      changeNavbarDesktopHandler({ contentUnderNavbar: null });
    }
  }, []);

  return (
    <div>{settingsMenuTabItems.find((item) => item.path === id)?.content}</div>
  );
};

export default SettingsContentMobile;
