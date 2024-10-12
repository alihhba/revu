import CartWrapper from "./carts/CartWrapper";
import Icon from "./Icon";
import UserImage from "./UserImage";

interface props {
  item: {
    id: number;
    title: string;
    icon: string;
    price: string;
    change: string;
    graph: string;
  };
}

const CountersNumeric = ({ item }: props) => {
  return (
    <CartWrapper className="flex flex-col  w-full max-md:min-w-full  ">
      <div className="flex items-center gap-p-10 mb-p-16">
        <Icon icon={item.icon} height="20px" width="20px" />
        <p className="text-base-14 font-bold">{item.title}</p>
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-p-2 w-fit min-w-fit">
          <p className="text-h5 font-extrabold">{item.price}</p>

          <div className="flex items-center  gap-p-8">
            <p className="text-base-12 font-medium text-font-storm">
              {item.change}
            </p>

            <Icon icon="/icons/arrowUp.svg" height="0.7rem" width="0.7rem" />
          </div>
        </div>

        <div className="w-full  flex items-end justify-end">
          <UserImage image={item.graph} className="w-[153px] min-w-max" />
          {/* <LineChart height={100} data={[[144, 255, 341, 417, 143, 295, 192]]} /> */}
        </div>
      </div>
    </CartWrapper>
  );
};

export default CountersNumeric;
