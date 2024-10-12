import { useNavigate } from "react-router-dom";
import CartWrapper from "../carts/CartWrapper";
import UserImage from "../UserImage";
import { useNavbar } from "../../context/NavbarContext";
import { useEffect } from "react";

interface props {
  item: any;
}

const UserChatInfoCart = ({ item }: props) => {
  const navigate = useNavigate();
  const { ChangeMobileTitleHandler, resetNavbar } = useNavbar();

  useEffect(() => {
    ChangeMobileTitleHandler({ type: 2 });

    return () => {
      resetNavbar();
    };
  }, []);

  return (
    <CartWrapper>
      <div
        onClick={() => navigate(`${item.id}`)}
        className="flex items-start gap-p-14 w-full cursor-pointer"
      >
        <div>
          <UserImage className="w-p-32 h-p-32" image={item.userImage} />
        </div>

        <div className="flex flex-col gap-p-2 w-full">
          <div className="flex items-center justify-between w-full">
            <p className="text-base-12 font-medium text-font-storm line-clamp-1">
              {item.username}
            </p>

            <div className="text-base-12 font-medium text-font-storm ">
              {item.time}
            </div>
          </div>

          <p className="text-base-14 font-bold line-clamp-1">{item.title}</p>

          <p className="text-base-14 font-medium text-font-storm line-clamp-1 md:line-clamp-2">
            {item.desc}
          </p>
        </div>
      </div>
    </CartWrapper>
  );
};

export default UserChatInfoCart;
