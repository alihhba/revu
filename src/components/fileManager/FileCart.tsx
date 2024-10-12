import { useLocation, useNavigate } from "react-router-dom";
import CartWrapper from "../carts/CartWrapper";
import CustomCheck from "../checkBox/CustomCheck";
import Icon from "../Icon";
import UserImageGallery from "../UserImageGallery";
import FileImageDetector from "./FileImageDetector";

interface props {
  item: any;
}

const FileCart = ({ item }: props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  return (
    <CartWrapper className="py-p-9 cursor-pointer">
      <div
        onClick={() => {
          navigate(
            `/${pathname.split("/")[1]}/${pathname.split("/")[2]}/file/${
              item.id
            }`
          );

          console.log(
            `${pathname.split("/")[1]}/${pathname.split("/")[2]}/file/${
              item.id
            }`
          );
        }}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-p-14">
          <div onClick={(e) => e.stopPropagation()} className="max-md:hidden">
            <CustomCheck />
          </div>

          <div>
            <FileImageDetector suffix={item.title.split(".")[1]} />
          </div>

          <div className="flex flex-col">
            <p className="text-base-14 font-bold min-w-fit">{item.title}</p>
            <p className="md:hidden text-base-12 text-font-storm font-bold">
              {item.size}
            </p>
          </div>
        </div>

        <div className="max-md:hidden flex items-center w-full max-lg:w-fit max-lg:gap-p-10 justify-between lg:max-w-[40%] 2xl:max-w-[70%] ">
          <p className="text-base-12 text-font-storm font-bold">{item.size}</p>
          <p className="text-base-12 text-font-storm font-bold">{item.date}</p>

          <UserImageGallery images={item.images} isShowMore={false} />

          <Icon icon="/icons/more.svg" />
        </div>

        <div className="md:hidden">
          <UserImageGallery
            images={item.images}
            showNumber={1}
            isShowMore={false}
          />
        </div>
      </div>
    </CartWrapper>
  );
};

export default FileCart;
