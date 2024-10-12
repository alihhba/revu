import { useModal } from "../../context/ModalContext";
import ModalDescriptionAttachments from "./ModalDescriptionAttachments";
import ModalDescriptionChecklist from "./ModalDescriptionChecklist";
import ModalDescriptionDesc from "./ModalDescriptionDesc";
import ModalDescriptionHeader from "./ModalDescriptionHeader";

const ProjectDescriptionWrapper = () => {
  const { data } = useModal();

  return (
    <div className="flex flex-col w-full ">
      <div className="w-full">
        <ModalDescriptionHeader item={data} />
      </div>

      {data?.description ? (
        <div className="w-full">
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

      <div>
        <div className="border-b w-full my-p-18" />

        <ModalDescriptionAttachments item={data} />
      </div>
    </div>
  );
};

export default ProjectDescriptionWrapper;
