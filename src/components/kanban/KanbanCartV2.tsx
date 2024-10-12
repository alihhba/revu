import { useModal } from "../../context/ModalContext";
import Icon from "../Icon";
import UserImage from "../UserImage";
import { kanbanItemType } from "./KanbanList";

interface props {
  item: kanbanItemType;
}

const KanbanCartV2 = ({ item }: props) => {
  const { changeModalHandler } = useModal();

  return (
    <div className="relative  rounded-[8px]  bg-primary-white-default overflow-hidden">
      <div className="ps-p-17 pt-p-19  pe-p-15 pb-p-23 flex flex-col gap-p-8">
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
          <div className="flex items-center gap-p-6 text-base-12 font-bold text-font-storm">
            <Icon icon="/icons/calender.svg" />
            <p>{item.date}</p>
          </div>

          <div className="flex items-center gap-p-12">
            {/* image */}
            <UserImage className="w-p-24 h-p-24" image={item.userImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanCartV2;
