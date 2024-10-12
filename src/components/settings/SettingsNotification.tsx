import CartWrapper from "../carts/CartWrapper";
import SimpleToggle from "../toggle/SimpleToggle";
import SettingsInfoCart from "./SettingsInfoCart";

const SettingsNotification = () => {
  return (
    <div className="flex flex-col gap-p-14">
      <div className="max-md:hidden">
        <p className="text-base-16 font-bold">Send me email about</p>
      </div>

      <CartWrapper className="justify-start md:bg-grey-default flex flex-col ">
        <div className="w-full">
          <SettingsInfoCart
            title="Product updates"
            desc="Receive messages from our platform"
          >
            <SimpleToggle />
          </SettingsInfoCart>
          <SettingsInfoCart
            title="Reminders"
            desc="Receive booking reminders, pricing notices"
          >
            <SimpleToggle />
          </SettingsInfoCart>
          <SettingsInfoCart
            title="Promotions and tips"
            desc="Receive coupons, promotions, surveys"
          >
            <SimpleToggle />
          </SettingsInfoCart>
          <SettingsInfoCart
            title="Policy and community"
            desc="Receive updates on job regulations"
          >
            <SimpleToggle />
          </SettingsInfoCart>
          <SettingsInfoCart
            title="Account support"
            desc="Receive messages about your account, your trips, legal alerts"
          >
            <SimpleToggle />
          </SettingsInfoCart>
          <SettingsInfoCart
            title="Reminders"
            desc="Upcoming paymennts and balance changes"
            border={false}
          >
            <SimpleToggle />
          </SettingsInfoCart>
        </div>
      </CartWrapper>
    </div>
  );
};

export default SettingsNotification;
