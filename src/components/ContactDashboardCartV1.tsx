import Button from "./Button";
import Icon from "./Icon";
import UserImageTitleInfoOne from "./UserImageTitleInfoOne";

interface props {
  item: {
    image: string;
    title: string;
    desc: string;
  }[];
}

const ContactDashboardCartV1 = ({ item }: props) => {
  return (
    <div className="flex flex-col gap-p-26 max-h-[75vh]  w-full">
      <div className="flex flex-col gap-p-20 overflow-y-auto scrollbar-none">
        {item.map((contact) => (
          <div className="flex items-center justify-between">
            <UserImageTitleInfoOne item={contact} />

            <div>
              <Icon icon="/icons/more.svg" />
            </div>
          </div>
        ))}
      </div>

      <div>
        <Button
          type="border"
          className="w-full"
          content={
            <div className="flex items-center justify-center  gap-p-8">
              <Icon icon="/icons/new_contact.svg" />
              <p className="text-base-14 font-bold">Manage Contacts</p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ContactDashboardCartV1;
