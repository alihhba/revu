import Badge from "./Badge";
import CustomCheck from "./checkBox/CustomCheck";

interface props {
  title: string;
  date: string;
}

const UpdateTaskCart = ({ date, title }: props) => {
  return (
    <div className="flex w-full justify-between">
      <CustomCheck title={<p className="text-base-14 font-bold">{title}</p>} />

      <Badge type="primary" title={date} className='max-md:hidden' />
    </div>
  );
};

export default UpdateTaskCart;
