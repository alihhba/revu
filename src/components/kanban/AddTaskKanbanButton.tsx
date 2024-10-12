import Icon from "../Icon";

const AddTaskKanbanButton = () => {
  return (
    <button className="flex items-center justify-center gap-p-6 rounded-[6px] w-full border border-dashed bg-primary-white-default/50 border-outline-default py-p-16">
      <Icon icon="/icons/add.svg" color="#000" className="mb-p-2" />

      <p className="text-base-14 font-extrabold">Add a task</p>
    </button>
  );
};

export default AddTaskKanbanButton;
