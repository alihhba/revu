import { useParams } from "react-router-dom";
import TaskAddCart from "../../components/tasks/TaskAddCart";
import TaskCart from "../../components/tasks/TaskCart";
import { tasksItems } from "../../initials";

const TasksCartsWrapper = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col">
      {/* add button */}
      <div>
        <TaskAddCart />
      </div>

      {/* tasks */}
      <div className="flex flex-col gap-p-6 mt-p-6">
        {tasksItems
          .filter((task) => (id !== "all_tasks" ? task.status === id : task))
          .map((task) => (
            <TaskCart item={task} />
          ))}
      </div>
    </div>
  );
};

export default TasksCartsWrapper;
