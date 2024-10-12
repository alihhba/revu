import { useNavigate } from "react-router-dom";
import { useModal } from "../context/ModalContext";
import { cn, deviceType } from "../lib/utils";
import Badge from "./Badge";
import CartWrapper from "./carts/CartWrapper";
import Icon from "./Icon";
import Image from "./Image";
import UserImageGallery from "./UserImageGallery";

interface props {
  item: {
    id: number;
    image: string;
    title: string;
    tasksNum: string;
    doneNum: string;
    tagsNum: string;
    commentsNum: string;
    images: string[];
  };
  type?: "grid" | "line";
}

const ProjectCartV2 = ({ item, type = "line" }: props) => {
  const { changeModalHandler } = useModal();
  const device = deviceType();
  const navigate = useNavigate();

  const detailHandler = () => {
    changeModalHandler({
      isModal: true,
      modalType: "projects-description",
      data: item,
    });
  };

  return (
    <div
      // onclick for mobile
      onClick={() => {
        if (device === "mobile") {
          changeModalHandler({ data: item });
          navigate("/projects/description");
        }
      }}
    >
      <CartWrapper
        className={cn(
          " px-p-16 relative w-full md:rounded-none  ",
          type === "grid" ? "md:py-p-38 min-w-[320px] w-full h-fit" : "py-p-15"
        )}
      >
        <div
          className={cn(
            "flex items-center w-full justify-between",
            type === "grid" ? "md:flex-col" : ""
          )}
        >
          <div className="flex max-md:flex-col max-md:w-full">
            <div
              className={cn(
                "flex items-center ",
                type === "grid"
                  ? "md:flex-col gap-p-20 max-md:mt-p-60"
                  : " gap-p-14"
              )}
            >
              <div
                className={cn(
                  "rounded-full  bg-grey-default",
                  type === "grid" ? "p-p-19" : "p-p-8"
                )}
              >
                <Image image={item.image} />
              </div>

              <div className="flex flex-col gap-p-9">
                <p className="text-base-14 font-extrabold ">{item.title}</p>

                <div
                  className={cn(
                    type === "grid" ? "flex  items-center gap-p-10 " : "hidden"
                  )}
                >
                  <Badge
                    title={`${(+item.doneNum / +item.tasksNum) * 100}%`}
                    type="transparent"
                    icon="/icons/amper.svg"
                    className="px-0 py-0"
                  />
                </div>
              </div>
            </div>

            <div className="border-b w-full mx-auto my-p-16 md:hidden"></div>

            <div className="md:hidden flex justify-between items-center">
              <Badge title={"04 oct 2022"} />

              <UserImageGallery
                isShowMore={false}
                margin={10}
                type={1}
                images={item.images}
              />
            </div>
          </div>

          {type !== "grid" ? (
            <div className="flex items-center gap-p-12 ">
              {/* badge */}
              <div className="max-md:hidden">
                <Badge
                  icon="/icons/tasks.svg"
                  title={`${item.doneNum}/${item.tasksNum}`}
                />
              </div>

              <div className="max-md:hidden">
                <Badge title={"04 oct 2022"} />
              </div>

              <div className="max-md:hidden">
                <UserImageGallery
                  isShowMore={false}
                  margin={15}
                  type={1}
                  images={item.images}
                />
              </div>

              <div
                onClick={() => {
                  detailHandler();
                }}
                className="max-md:hidden cursor-pointer"
              >
                <Icon icon="/icons/more.svg" />
              </div>
            </div>
          ) : (
            <div className="flex  md:flex-col items-center justify-center ">
              <div className="mt-p-8 max-md:absolute start-p-20 top-p-20">
                <Badge title={"04 oct 2022"} />
              </div>

              <div className="flex  items-center gap-p-10 mt-p-34 max-md:hidden">
                <Badge
                  title={item.commentsNum}
                  type="transparent"
                  icon="/icons/letter.svg"
                  className="px-0 py-0"
                />
                <Badge
                  title={`${(+item.doneNum / +item.tasksNum) * 100}%`}
                  type="transparent"
                  icon="/icons/amper.svg"
                  className="px-0 py-0"
                />
                <Badge
                  title={item.tagsNum}
                  type="transparent"
                  icon="/icons/management_2.svg"
                  className="px-0 py-0"
                />
              </div>

              <div className="mt-p-37 max-md:absolute end-p-20 -top-p-11">
                <UserImageGallery
                  isShowMore={false}
                  margin={15}
                  type={1}
                  images={item.images}
                />
              </div>

              <div
                onClick={() => {
                  detailHandler();
                }}
                className="absolute end-p-16 top-p-16  max-md:hidden cursor-pointer"
              >
                <Icon icon="/icons/more.svg" />
              </div>
            </div>
          )}
        </div>
      </CartWrapper>
    </div>
  );
};

export default ProjectCartV2;
