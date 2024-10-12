import { tasksItems } from "../../initials";
import TaskAddCart from "../tasks/TaskAddCart";
import ContactTaskCart from "./ContactTaskCart";

const ContactsTasksDetails = () => {
  return (
    <div className="flex flex-col w-full">
      {/* add button */}
      <div>
        <TaskAddCart />
      </div>

      {/* tasks */}
      <div className="flex flex-col gap-p-6 mt-p-6">
        {tasksItems.map((task) => (
          <ContactTaskCart item={task} />
        ))}
      </div>
    </div>
  );
};

export default ContactsTasksDetails;
