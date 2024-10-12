import Badge from "../Badge";
import CustomCheck from "../checkBox/CustomCheck";
import Icon from "../Icon";

const TaskAddCart = () => {
  return (
    <button className="flex items-center  justify-between px-p-16 gap-p-6 rounded-[8px] w-full border border-dashed bg-primary-white-default/50 border-outline-default py-p-16 max-md:py-p-21 min-w-full">
      {/* left */}
      <div className="flex items-center gap-p-15 h-full">
        <Icon icon="/icons/arrow_bold_fill.svg" />
        <div className="flex items-center gap-p-6 w-full">
          <CustomCheck />

          <input
            type="text"
            placeholder="Type to add new task ..."
            className="w-full outline-none focus:ring-0 bg-transparent text-base-14 font-regular"
          />
        </div>
      </div>
      {/* right */}

      <div className="flex items-center gap-p-24">
        <Badge type="primary" className='max-md:hidden' title={"Set date"} />

        <div>
          <Icon icon="/icons/add.svg" color="#000" />
        </div>
      </div>
    </button>
  );
};

export default TaskAddCart;
