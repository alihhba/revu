import { cn } from "../lib/utils";

const CircleBadge = ({ isPadding = false }: { isPadding?: boolean }) => {
  return (
    <div
      className={cn(
        "w-full h-full min-w-full min-h-full p-[3px] bg-white rounded-full",
        !isPadding && "p-0"
      )}
    >
      <div className="w-[8px] h-[8px] min-w-full rounded-full bg-secondary-green-default"></div>
    </div>
  );
};

export default CircleBadge;
