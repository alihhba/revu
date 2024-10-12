import { useKanban } from "../../context/Context";
import { kanbanTasksItems } from "../../initials";
import { cn } from "../../lib/utils";
import KanbanList from "./KanbanList";

const KanbanWrapper = () => {
  const { kanbanState } = useKanban();
  const kanbanItems = kanbanTasksItems;

  return (
    <div className="grid md:grid-cols-3 gap-x-p-25">
      <div className={cn(kanbanState === "pending" ? "" : "max-md:hidden")}>
        <KanbanList
          title="pending"
          badgeType="danger"
          item={kanbanItems.filter((item) => item.state === "pending")}
        />
      </div>

      <div className={cn(kanbanState === "in_progress" ? "" : "max-md:hidden")}>
        <KanbanList
          title="in progress"
          badgeType="success"
          item={kanbanItems.filter((item) => item.state === "in_progress")}
        />
      </div>

      <div className={cn(kanbanState === "done" ? "" : "max-md:hidden")}>
        <KanbanList
          title="done"
          badgeType="success"
          item={kanbanItems.filter((item) => item.state === "done")}
        />
      </div>
    </div>
  );
};

export default KanbanWrapper;
