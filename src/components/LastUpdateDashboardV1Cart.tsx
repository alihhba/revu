import ActionOneComponent from "./ActionOneComponent";
import CartWrapper from "./carts/CartWrapper";
import CommentInputBox from "./CommentInputBox";
import Icon from "./Icon";
import ImageSliderOne from "./ImageSliderOne";
import UpdateTaskCart from "./UpdateTaskCart";
import UserImage from "./UserImage";

interface props {
  item: {
    id: number;
    userImage: string;
    username: string;
    time: string;
    desc?: string;
    images?: string[];
    commentNum: string;
    likeNum: string;
    canComment?: boolean;
    tasks?: {
      id: number;
      title: string;
      date: string;
    }[];
  };
}

const LastUpdateDashboardV1Cart = ({ item }: props) => {
  return (
    <div>
      <CartWrapper>
        <div className="flex items-start  gap-p-14 w-full">
          <div className="">
            <UserImage image={item.userImage} className="w-p-34 h-p-34" />
          </div>

          {/* main */}
          <div className="flex flex-col gap-p-5 w-full">
            {/* title */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-p-8">
                <p className="capitalize text-base-14 font-bold">
                  {item.username}
                </p>
                <p className="text-base-12 font-medium text-font-storm">
                  {item.time}
                </p>
              </div>

              <div>
                <Icon icon="/icons/more.svg" className="cursor-pointer" />
              </div>
            </div>

            {/* main desc */}
            <div className="max-w-[90%]">
              <p className="text-base-14 font-regular">{item.desc}</p>
            </div>

            {/* images */}
            {item.images && <ImageSliderOne images={item.images} />}

            {/* tasks */}
            {item.tasks && (
              <div className="flex flex-col my-p-10">
                {item.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="border-b border-outline-default last:border-none pt-p-12 first:pt-0 pb-p-12 last:pb-0"
                  >
                    <UpdateTaskCart title={task.title} date={task.date} />
                  </div>
                ))}
              </div>
            )}

            {/* actions */}

            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-p-22 mt-p-13">
                <ActionOneComponent
                  icon="/icons/comment.svg"
                  title={item.commentNum}
                  clicked
                />
                <ActionOneComponent icon="/icons/heart.svg" title="13" />
              </div>

              <div>
                <Icon icon="/icons/back_forward.svg" className={item.likeNum} />
              </div>
            </div>

            {/* comment box */}
            <div className="mt-p-9">
              <CommentInputBox />
            </div>
          </div>
        </div>
      </CartWrapper>
    </div>
  );
};

export default LastUpdateDashboardV1Cart;
