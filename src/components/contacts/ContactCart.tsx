import { useNavigate } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import Badge from "../Badge";
import CartWrapper from "../carts/CartWrapper";
import CustomCheck from "../checkBox/CustomCheck";
import Icon from "../Icon";
import UserImage from "../UserImage";

interface props {
  item: any;
}

const ContactCart = ({ item }: props) => {
  const { changeModalHandler } = useModal();
  const navigate = useNavigate();

  return (
    <CartWrapper>
      <div className="flex w-full items-center justify-between">
        {/* left */}
        <div className="flex items-center gap-p-18">
          <div className="max-md:hidden">
            <CustomCheck />
          </div>

          <div
            className="flex items-center gap-p-16 cursor-pointer"
            onClick={() => navigate(`/contacts/profile/${item.id}/updates`)}
          >
            <UserImage image={item.userImage} className="w-p-36 h-p-36" />

            <div className="flex flex-col">
              <p className="text-base-14 font-bold">{item.username}</p>
              <p className="text-base-14 font-regular text-font-storm">
                {item.email}
              </p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex items-center gap-p-17">
          <div className="max-md:hidden">
            <Badge
              type={item.role === "teammates" ? "success2" : "primary"}
              title={item.role}
            />
          </div>

          <div
            className="cursor-pointer"
            onClick={() =>
              changeModalHandler({
                isModal: true,
                modalType: "contact-details",
                data: item,
              })
            }
          >
            <Icon icon="/icons/more.svg" />
          </div>
        </div>
      </div>
    </CartWrapper>
  );
};

export default ContactCart;
