import { useModal } from "../../context/ModalContext";
import Badge from "../Badge";
import Icon from "../Icon";
import ProgressBar from "../ProgressBar";
import UserImage from "../UserImage";
import { kanbanItemType } from "./KanbanList";

interface props {
  item: kanbanItemType;
}

const KanbanCart = ({ item }: props) => {
  const { changeModalHandler } = useModal();

  return (
    <div className="relative  rounded-[8px]  bg-primary-white-default overflow-hidden">
      <div className="ps-p-17 pt-p-19  pe-p-15 pb-p-23 flex flex-col gap-p-14">
        <div
          onClick={() => {
            changeModalHandler({
              isModal: true,
              modalType: "kanban_description",
              data: item,
            });
          }}
        >
          <p className="text-base-14 font-bold line-clamp-1 cursor-pointer">
            {item.title}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <Badge type="primary" title={item.date} />

          <div className="flex items-center gap-p-12">
            <div className="flex items-center gap-p-6">
              <Icon icon="/icons/tasks.svg" />
              <div>
                <p className="text-base-12 font-bold text-font-storm">{`${item.doneNum}/${item.tasksNum}`}</p>
              </div>
            </div>

            {/* image */}
            <UserImage className="w-p-24 h-p-24" image={item.userImage} />
          </div>
        </div>
      </div>

      {/* progress bar */}
      <div className="absolute  w-full bottom-0 rounded-[8px]">
        <ProgressBar
          className="w-full min-w-full"
          all={item.tasksNum}
          done={item.doneNum}
        />
      </div>
    </div>
  );
};

export default KanbanCart;
