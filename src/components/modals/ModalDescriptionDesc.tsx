import { cn } from "../../lib/utils";
import SeeMoreDetails from "../SeeMoreDetails";

const ModalDescriptionDesc = ({ item }: { item: any }) => {
  return (
    <div className="flex flex-col gap-p-5 w-full ">
      <p className="text-base-16 font-extra-bold">Description</p>

      <SeeMoreDetails>
        <p className={cn("text-base-14 font-regular")}>{item.description || item.desc}</p>
      </SeeMoreDetails>
    </div>
  );
};

export default ModalDescriptionDesc;
