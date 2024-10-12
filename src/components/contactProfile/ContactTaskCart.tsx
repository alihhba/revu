import Badge from "../Badge";
import CartWrapper from "../carts/CartWrapper";
import CustomCheck from "../checkBox/CustomCheck";
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

const ContactTaskCart = ({ item }: props) => {
  return (
    <CartWrapper>
      <div className="flex items-center justify-between w-full">
        {/* left */}
        <div className="flex items-center gap-p-15 ">
          <CustomCheck title={item.title} titleClass="text-base14 font-bold" />
        </div>

        {/* right */}
        <div className="flex items-center">
          <div className=" max-md:hidden">
            <Badge title={item.date} />
          </div>
          <div className="md:hidden">
            <UserImage image={item.userImage} className="w-p-32 h-p-32" />
          </div>
        </div>
      </div>
    </CartWrapper>
  );
};

export default ContactTaskCart;
