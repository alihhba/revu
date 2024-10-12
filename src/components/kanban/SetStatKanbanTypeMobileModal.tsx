import { useKanban } from "../../context/Context";
import { useModal } from "../../context/ModalContext";
import { kanbanTasksItems } from "../../initials";
import Badge from "../Badge";

const SetStatKanbanTypeMobileModal = () => {
  const { kanbanHandler } = useKanban();
  const { changeModalHandler } = useModal();
  return (
    <div className="flex flex-col pb-p-17">
      <div
        onClick={() => {
          kanbanHandler({ type: "pending" });
          changeModalHandler({ isModal: false });
        }}
        className="flex items-center justify-between "
      >
        <p className="text-base-16 font-bold">Pending</p>

        <Badge
          type="primary"
          title={`${
            kanbanTasksItems.filter((item) => item.state === "pending").length
          } Tasks`}
        />
      </div>

      <div className="border-b border-outline-default w-full my-p-17" />

      <div
        onClick={() => {
          kanbanHandler({ type: "in_progress" });
          changeModalHandler({ isModal: false });
        }}
        className="flex items-center justify-between"
      >
        <p className="text-base-16 font-bold">In progress</p>

        <Badge
          type="primary"
          title={`${
            kanbanTasksItems.filter((item) => item.state === "in_progress")
              .length
          } Tasks`}
        />
      </div>

      <div className="border-b border-outline-default w-full my-p-17" />

      <div
        onClick={() => {
          kanbanHandler({ type: "done" });
          changeModalHandler({ isModal: false });
        }}
        className="flex items-center justify-between pb-p-17"
      >
        <p className="text-base-16 font-bold">Done</p>

        <Badge
          type="primary"
          title={`${
            kanbanTasksItems.filter((item) => item.state === "done").length
          } Tasks`}
        />
      </div>
    </div>
  );
};

export default SetStatKanbanTypeMobileModal;
