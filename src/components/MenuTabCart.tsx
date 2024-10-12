import { useNavigate, useParams } from "react-router-dom";
import { cn } from "../lib/utils";
import Icon from "./Icon";

interface props {
  item: any;
}

const MenuTabCart = ({ item }: props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const active = id === item.path;
  return (
    <div
      onClick={() => navigate(item.path)}
      className={cn(
        "flex items-center justify-start px-p-28 py-p-12 w-full rounded-[6px] cursor-pointer",
        active ? "bg-grey-default" : "bg-transparent"
      )}
    >
      <Icon icon={item.icon} color={active ? "#0052ff" : "#000"} />

      <div className="flex flex-col gap-p-4 ms-p-23 ">
        <p
          className={cn(
            "text-base-14 font-bold",
            active ? "text-primary-blue-default" : ""
          )}
        >
          {item.title}
        </p>
        <p className="text-base-12 font-medium text-font-storm">{item.desc}</p>
      </div>
    </div>
  );
};

export default MenuTabCart;
