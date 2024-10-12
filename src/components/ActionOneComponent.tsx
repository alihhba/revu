import { cn } from "../lib/utils";
import Icon from "./Icon";

interface props {
  icon: string;
  title: string;
  clicked?: boolean;
}

const ActionOneComponent = ({ icon, title, clicked = false }: props) => {
  return (
    <div
      className={cn(
        "flex items-center gap-p-6 cursor-pointer",
        clicked && "text-primary-blue-default"
      )}
    >
      <Icon icon={icon} color={cn(clicked && "#0052ff")} />
      <p className="text-base-12 font-extrabold">{title}</p>
    </div>
  );
};

export default ActionOneComponent;
