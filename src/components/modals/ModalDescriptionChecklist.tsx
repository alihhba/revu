import ProgressBar from "../ProgressBar";
import SeeMoreDetails from "../SeeMoreDetails";

const ModalDescriptionChecklist = ({ item }: { item: any }) => {
  return (
    <div className="flex flex-col gap-p-10 max-md:me-auto w-full">
      <div className="flex items-center justify-between">
        <p className="font-bold text-base-16">Checklist</p>
        <p className="text-base-14 font-bold text-font-storm">{`${item.doneNum}/${item.tasksNum}`}</p>
      </div>

      <div>
        <ProgressBar
          className="w-full min-w-full"
          done={item.doneNum}
          all={item.tasksNum}
        />
      </div>

      <div>
        <SeeMoreDetails item={item.tasks} />
      </div>
    </div>
  );
};

export default ModalDescriptionChecklist;
