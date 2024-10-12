import Badge from "../Badge";
import Icon from "../Icon";

const AddTeamCart = () => {
  return (
    <button className="flex items-center justify-between gap-p-6  rounded-[8px] w-full border border-dashed bg-primary-white-default/50 border-outline-default py-p-16 px-p-20 ">
      <div className="flex items-center gap-p-6 w-full">
        <Icon icon="/icons/contacts.svg" color="#000" className="mb-p-2" />

        <input
          type="text"
          className="outline-none bg-transparent focus:ring-0 w-full placeholder:text-base-14 placeholder:font-bold placeholder:text-font-storm"
          placeholder="Type email to add a new user ..."
        />
      </div>

      <div className="flex items-center gap-p-6 w-full justify-end max-md:hidden">
        <Badge type="primary" title={"View and edit"} />

        <div className="ms-p-13">
          <Icon icon="/icons/more.svg" />
        </div>
      </div>
    </button>
  );
};

export default AddTeamCart;
