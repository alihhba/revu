import { useState } from "react";
import Button from "../Button";
import Icon from "../Icon";
import CustomInput from "../inputs/CustomInput";
import TabComponent from "../TabComponent";

const tabItem = [
  {
    title: "Contact Email",
    state: "1",
  },
  {
    title: "Phone Number",
    state: "2",
  },
];

const AddNewContactModal = () => {
  const [activeTab, _setActiveTab] = useState("1");
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between p-p-20 pt-0 border-b border-outline-default">
        <p className="text-h6 font-bold">Add new contact</p>
        <Icon icon="/icons/more.svg" />
      </div>

      {/* content */}
      <div className="flex flex-col mt-p-34 px-p-20">
        <div className="w-fit mx-auto flex  rounded-full p-p-42 bg-[#979797]/10">
          <Icon icon="/icons/upload.svg" />
        </div>

        {/* form */}
        <div className="flex flex-col mt-p-27">
          <CustomInput placeholder="Start typing ..." label="Full name" />
          <CustomInput placeholder="Start typing ..." label="Position" />

          <div className="my-p-22 mx-auto">
            <TabComponent tabTitles={tabItem} activeId={activeTab} />
          </div>

          <CustomInput placeholder="Start typing ..." label="Email" />
        </div>

        <div className="mt-p-22 w-full min-w-full">
          <Button type="purple" content={"Add Contact"} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default AddNewContactModal;
