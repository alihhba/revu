import { useModal } from "../../context/ModalContext";
import CommentInputBox from "../CommentInputBox";
import ModalDescriptionAttachments from "../modals/ModalDescriptionAttachments";
import ModalDescriptionChecklist from "../modals/ModalDescriptionChecklist";
import ModalDescriptionDesc from "../modals/ModalDescriptionDesc";
import ModalDescriptionHeader from "../modals/ModalDescriptionHeader";

const KanbanDescriptionWrapper = () => {
  const { data } = useModal();

  return (
    <div className="relative flex flex-col md:w-full w-full ">
      <div className="w-full">
        <ModalDescriptionHeader isModal item={data} />
      </div>

      {data?.desc ? (
        <div className="md:w-full max-md:w-[90vw]">
          <div className="border-b w-full my-p-18" />

          <ModalDescriptionDesc item={data} />
        </div>
      ) : null}

      {/* checklist */}
      {data?.tasks ? (
        <div>
          <div className="border-b w-full my-p-18" />

          <ModalDescriptionChecklist item={data} />
        </div>
      ) : null}

      {/* attachment */}

      <div className="md:mb-p-80 mb-p-100">
        <div className="border-b w-full my-p-18" />

        <ModalDescriptionAttachments item={data} />
      </div>

      <div className="absolute bottom-0 w-full max-md:mb-p-10">
        <CommentInputBox />
      </div>
    </div>
  );
};

export default KanbanDescriptionWrapper;
