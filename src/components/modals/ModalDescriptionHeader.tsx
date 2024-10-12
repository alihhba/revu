import { cn } from "../../lib/utils";
import Badge from "../Badge";
import CustomCheck from "../checkBox/CustomCheck";
import Icon from "../Icon";
import Image from "../Image";
import UserImageGallery from "../UserImageGallery";

const ModalDescriptionHeader = ({
  item,
  // is modal for , some style in modal in mobile and different in full page
  isModal = false,
}: {
  item: any;
  isModal?: boolean;
}) => {
  return (
    <div onClick={(e) => e.stopPropagation()} className="flex  flex-col ">
      <div
        className={cn(
          "flex items-center justify-between",
          isModal ? "" : " max-md:hidden"
        )}
      >
        <CustomCheck title="Mark as complete" />

        {isModal ? (
          <div className=" md:hidden mt-p-18">
            <Badge type="primary" title={"15 Aug 2022"} />
          </div>
        ) : (
          <Icon icon="/icons/more.svg" className="cursor-pointer" />
        )}
      </div>

      {/* info */}
      <div
        className={cn(
          "mt-p-17 md:mt-p-34 flex max-md:flex-col  gap-p-14",
          isModal ? "" : "max-md:text-center items-center"
        )}
      >
        {item?.image ? (
          <div className="bg-grey-default max-md:p-p-20 md:p-p-15 rounded-full">
            <Image image={item.image} className="max-md:w-p-42 max-md:h-p-42" />
          </div>
        ) : null}

        <div>
          <p className="max-md:text-h5 md:text-h4 font-black">{item.title}</p>
          <p className="text-base-14 font-medium">
            <span>Created on</span> <span>7 jun 2022</span>
          </p>
        </div>
      </div>

      {/* date tag for mobile  in full page*/}
      {isModal ? null : (
        <div className="mx-auto md:hidden mt-p-18">
          <Badge type="border" title={"15 Aug 2022"} />
        </div>
      )}

      {/* assigned and due to */}
      <div
        className={cn(
          "flex  md:items-start    md:justify-between w-full md:mt-p-30 mt-p-26",
          isModal
            ? "max-md:items-start"
            : "max-md:text-center max-md:items-center justify-center"
        )}
      >
        {/* assigned */}
        <div className="flex flex-col gap-p-7">
          <p className="text-base-12  text-font-storm font-medium">
            Assigned to
          </p>

          <div className="flex items-center gap-p-12">
            <UserImageGallery
              margin={0}
              isShowMore={false}
              showNumber={4}
              imageClass="w-p-35 h-p-35 me-p-2"
              images={item.images || item.assignedImage}
            />

            <Icon icon="/icons/add.svg" color="#5f646d" />
          </div>
        </div>

        {/* due to */}
        <div className="flex flex-col gap-p-7 max-md:hidden">
          <p className="text-base-12  text-font-storm font-medium">Due to</p>

          <div className="flex items-center gap-p-15">
            <Badge type="primary" title={"15 Aug 2022"} />

            <div className="flex items-center gap-p-6">
              <Icon icon="/public/icons/arrow_bold.svg" />

              <p className="text-base-12 font-medium text-font-storm">
                business
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDescriptionHeader;
