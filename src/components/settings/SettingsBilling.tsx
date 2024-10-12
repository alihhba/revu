import CartWrapper from "../carts/CartWrapper";
import Icon from "../Icon";
import SettingsInfoCart from "./SettingsInfoCart";

const SettingsBilling = () => {
  return (
    <div className="flex flex-col gap-p-14">
      <div>
        <p className="text-base-16 font-bold">Payment methods</p>
      </div>

      <CartWrapper className="justify-start md:bg-grey-default flex flex-col ">
        <div className="w-full">
          <SettingsInfoCart
            icon="/icons/finance.svg"
            title="Expiration: 04/2023"
            desc="MasterCard •••• 8464"
          />
          <SettingsInfoCart
            icon="/icons/visa.svg"
            title="Expiration: 08/2023"
            desc="Visa •••• 8002"
          />
        </div>

        <div className="flex items-center max-md:justify-center w-full  gap-p-6 pt-p-15 md:pb-p-36">
          <Icon icon="/icons/add.svg" color="#000" />
          <p className="text-base-14 font-bold">Add more</p>
        </div>

        <div className="w-full max-md:hidden">
          <SettingsInfoCart title="Schedule period" desc="Monthly" />
          <SettingsInfoCart
            title="Billing plan"
            desc="Starter $9.99"
            border={false}
          />
        </div>
      </CartWrapper>

      <CartWrapper className="justify-start md:bg-grey-default flex flex-col  md:hidden">
        <div className="w-full">
          <SettingsInfoCart title="Schedule period" desc="Monthly" />
          <SettingsInfoCart
            title="Billing plan"
            desc="Starter $9.99"
            border={false}
          />
        </div>
      </CartWrapper>
    </div>
  );
};

export default SettingsBilling;
