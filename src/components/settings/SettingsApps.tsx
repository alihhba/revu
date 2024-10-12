import { deviceType } from "../../lib/utils";
import CartWrapper from "../carts/CartWrapper";
import Icon from "../Icon";
import SettingsInfoCart from "./SettingsInfoCart";

const SettingsApps = () => {
  const device = deviceType();

  return (
    <div className="flex flex-col gap-p-14">
      <div className="max-md:hidden">
        <p className="text-base-16 font-bold">Extensions</p>
      </div>

      <CartWrapper className="justify-start md:bg-grey-default flex flex-col max-md:hidden ">
        <div className="w-full">
          <SettingsInfoCart
            title="Title"
            desc="Application interface development"
          />
          <div className="flex items-center gap-p-6 pt-p-15">
            <Icon icon="/icons/add.svg" color="#000" />
            <p className="text-base-14 font-bold">Add more</p>
          </div>
        </div>
      </CartWrapper>

      <div className="pt-p-20 max-md:hidden">
        <p className="text-base-16 font-bold">Social profiles</p>
      </div>

      <CartWrapper className="justify-start md:bg-grey-default flex flex-col ">
        <div className="w-full">
          <SettingsInfoCart
            icon="/icons/facebook.svg"
            title="Facebook"
            desc="https://www.facebook.com/whiteui.store"
          />
          <SettingsInfoCart
            icon="/icons/twitter.svg"
            title="Twitter"
            desc="Not connected"
          >
            <div className="flex gap-p-6">
              <Icon icon="/icons/link.svg" />
              <p className="text-base-14 font-bold max-md:hidden">Connect</p>
            </div>
          </SettingsInfoCart>
          <SettingsInfoCart
            border={device === "web" ? false : true}
            icon="/icons/google.svg"
            title="Google"
            desc="Not connected"
          >
            <div className="flex gap-p-6">
              <Icon icon="/icons/link.svg" />
              <p className="text-base-14 font-bold max-md:hidden">Connect</p>
            </div>
          </SettingsInfoCart>
        </div>

        <div className="flex items-center md:hidden w-full justify-center gap-p-6 pt-p-15 py-p-10">
          <Icon icon="/icons/add.svg" color="#000" />
          <p className="text-base-14 font-bold">Add more</p>
        </div>
      </CartWrapper>
    </div>
  );
};

export default SettingsApps;
