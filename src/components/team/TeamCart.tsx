import Badge from "../Badge";
import CartWrapper from "../carts/CartWrapper";
import Icon from "../Icon";
import UserImage from "../UserImage";

interface props {
  item: any;
}

const TeamCart = ({ item }: props) => {
  return (
    <CartWrapper>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-p-12">
          <UserImage image={item.userImage} className="w-p-32 h-p-32" />
          <div>
            <p className="text-base-14 font-bold">{item.username}</p>
            <p className="text-base-12 text-font-storm font-bold md:hidden">
              {item.email}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-p-6">
          <Badge
            type="border"
            className="px-p-32 max-md:hidden"
            title={
              <div className="flex items-center gap-p-4 ">
                <Icon icon="/icons/letter.svg" />
                <p>{item.email}</p>
              </div>
            }
          />
          <Badge
            type="primary"
            title={"View and edit"}
            className="max-md:hidden"
          />
          <Badge type="primary" title={"View "} className="md:hidden" />

          <div className="ms-p-13 max-md:hidden">
            <Icon icon="/icons/more.svg" />
          </div>
        </div>
      </div>
    </CartWrapper>
  );
};

export default TeamCart;
