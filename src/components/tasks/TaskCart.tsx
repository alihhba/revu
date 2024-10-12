import Badge from "../Badge";
import CartWrapper from "../carts/CartWrapper";
import CustomCheck from "../checkBox/CustomCheck";
import Icon from "../Icon";
import ProgressBar from "../ProgressBar";
import UserImage from "../UserImage";

type tasksStatusType = "pending" | "done";

export interface taskType {
  id: number;
  title: string;
  status: tasksStatusType;
  tasksNum: string;
  doneNum: string;
  date: string;
  userImage: string;
}

interface props {
  item: taskType;
}

const TaskCart = ({ item }: props) => {
  return (
    <CartWrapper>
      <div className="flex items-center justify-between w-full">
        {/* left */}
        <div className="flex items-center gap-p-15 ">
          <Icon
            color="#5f646d"
            icon={
              item.status === "done"
                ? "/public/icons/arrow_bold.svg"
                : "/public/icons/arrow_bold_fill.svg"
            }
          />

          <CustomCheck title={item.title} titleClass="text-base14 font-bold" />
        </div>

        {/* right */}
        <div className="flex items-center">
          <div className="pe-p-14 max-md:hidden">
            <ProgressBar all={item.tasksNum} done={item.doneNum} />
          </div>

          <div className="me-p-4 max-md:hidden">
            <Badge
              type="primary"
              title={
                <div className="flex items-center gap-p-4">
                  <Icon icon="/icons/tasks.svg" />

                  <p>{`${item.doneNum}/${item.tasksNum}`}</p>
                </div>
              }
            />
          </div>

          <div className="me-p-15 max-md:hidden">
            <Badge title={item.date} />
          </div>

          <div>
            <UserImage image={item.userImage} className="w-p-32 h-p-32" />
          </div>
        </div>
      </div>
    </CartWrapper>
  );
};

export default TaskCart;
