import { useModal } from "../../context/ModalContext";
import { deviceType } from "../../lib/utils";
import Badge, { badgeTypes } from "../Badge";
import Icon from "../Icon";
import AddTaskKanbanButton from "./AddTaskKanbanButton";
import KanbanCart from "./KanbanCart";

export type TaskState = "in_progress" | "done" | "pending";

export interface kanbanItemType {
  id: number;
  title: string;
  date: string;
  userImage: string;
  tasksNum: string;
  doneNum: string;
  desc: string;
  attachments: string[];
  assignedImage: string[];
  state: TaskState;
}

export interface props {
  title: string;
  badgeType?: keyof typeof badgeTypes;
  item: kanbanItemType[];
}

const KanbanList = ({ title, badgeType, item }: props) => {
  const device = deviceType();
  const { changeModalHandler } = useModal();

  return (
    <div className="flex flex-col gpa-p-19 w-full">
      {/* header */}
      <div className="flex items-center justify-between">
        <div>
          {/* v1 */}

          <Badge type={badgeType} title={title} className="capitalize" />

          {/* v2 */}
          {/* <p className="text-base-14 font-bold capitalize">{title}</p> */}
        </div>

        <div
          onClick={() => {
            if (device !== "web") {
              changeModalHandler({
                isModal: true,
                modalType: "kanban_change_state_mobile",
              });
            }
          }}
        >
          <Icon icon="/icons/more.svg" />
        </div>
      </div>

      {/* add button */}
      <div className="mt-p-8 md:hidden">
        <AddTaskKanbanButton />
      </div>

      {/* content */}
      <div className="flex flex-col gap-p-6 pt-p-6 md:pt-p-19">
        {item.map((it) => (
          <KanbanCart key={it.id} item={it} />
          // <KanbanCartV2 key={it.id} item={it} />
        ))}
      </div>

      {/* add button */}
      <div className="mt-p-6 max-md:hidden">
        <AddTaskKanbanButton />
      </div>
    </div>
  );
};

export default KanbanList;
