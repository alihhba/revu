import { useNavigate } from "react-router-dom";
import Badge from "../Badge";
import CartWrapper from "../carts/CartWrapper";
import CustomCheck from "../checkBox/CustomCheck";
import Icon from "../Icon";

interface props {
  item: any;
}

const FolderCart = ({ item }: props) => {
  const navigate = useNavigate();
  return (
    <CartWrapper className="py-p-9">
      <div
        onClick={() => navigate(`${item.id}`)}
        className="flex items-center justify-between w-full cursor-pointer"
      >
        <div className="flex  items-center gap-p-14">
          <div onClick={(e) => e.stopPropagation()} className="max-md:hidden">
            <CustomCheck />
          </div>

          <div className="flex items-center gap-p-12">
            <div className="py-p-15 px-p-10 bg-primary-blue-10 rounded-[8px]">
              <Icon icon="/icons/file.svg" />
            </div>

            <p className="text-base-14 font-bold">{item.title}</p>
          </div>
        </div>

        <div className="flex items-center gap-p-21">
          <div className="flex items-center gap-p-6">
            <Badge
              type="border"
              title={
                <div className="flex items-center gap-p-4">
                  <Icon icon="/icons/file_2.svg" width="12px" height="12px" />
                  <p>{`${item.files.length} files`}</p>
                </div>
              }
            />
            <div className="max-md:hidden">
              <Badge
                type={item.role === "teammate" ? "success2" : "primary"}
                title={item.role}
              />
            </div>
          </div>

          <div>
            <Icon icon="/icons/more.svg" />
          </div>
        </div>
      </div>
    </CartWrapper>
  );
};

export default FolderCart;
