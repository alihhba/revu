import { deviceType } from "../../lib/utils";
import CartWrapper from "../carts/CartWrapper";
import SettingsInfoCart from "./SettingsInfoCart";

const SettingsGeneralInformation = () => {
  const device = deviceType();
  return (
    <div className="flex flex-col gap-p-14">
      <div className="max-md:hidden">
        <p className="text-base-16 font-bold">Project information</p>
      </div>

      <CartWrapper className="justify-start md:bg-grey-default flex flex-col ">
        <div className="w-full">
          <SettingsInfoCart
            title="Title"
            desc="Application interface development"
          />
          <SettingsInfoCart title="Customer" desc="Dribbble Inc." />
        </div>
        <div className="w-full flex max-md:flex-col">
          <SettingsInfoCart
            title="Category"
            desc="Design"
            border={device === "web" ? false : true}
          />

          <SettingsInfoCart
            title="Subcategory"
            desc="UI and UX"
            border={device === "web" ? false : true}
          />
        </div>
        <div className="flex flex-col md:hidden w-full">
          <div className="w-full">
            <SettingsInfoCart
              title="Business representative"
              desc="Sebastien Bennett"
            />
          </div>
          <div className="w-full flex max-md:flex-col">
            <SettingsInfoCart
              title="Phone number"
              desc="+995 590 558 124"
              border={device === "web" ? false : true}
            />
            <SettingsInfoCart
              title="Email address"
              desc="seb.bennett@gmail.com"
              border={false}
            />
          </div>
        </div>
      </CartWrapper>

      <div className="pt-p-20 max-md:hidden">
        <p className="text-base-16 font-bold">Contact details</p>
      </div>

      <CartWrapper className="max-md:hidden justify-start md:bg-grey-default flex flex-col  ">
        <div className="w-full">
          <SettingsInfoCart
            title="Business representative"
            desc="Sebastien Bennett"
          />
        </div>
        <div className="w-full flex">
          <SettingsInfoCart
            title="Phone number"
            desc="+995 590 558 124"
            border={false}
          />
          <SettingsInfoCart
            title="Email address"
            desc="seb.bennett@gmail.com"
            border={false}
          />
        </div>
      </CartWrapper>
    </div>
  );
};

export default SettingsGeneralInformation;
