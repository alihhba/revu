import { useModal } from "../../context/ModalContext";
import Button from "../Button";
import Icon from "../Icon";
import UserImage from "../UserImage";

const ContactDetailsModal = () => {
  const { data } = useModal();

  return (
    <div>
      <div className="flex flex-col w-full">
        {/* more icon */}
        <div className="flex items-center justify-end">
          <Icon icon="/icons/more.svg" />
        </div>

        {/* info */}
        <div className="flex flex-col items-center">
          <UserImage image={data.userImage} className="w-[102px] h-[102px]" />

          <div className="flex flex-col mt-p-14 items-center">
            <p className="text-h4 font-bold">{data.username}</p>
            <p className="text-base-14 font-regular">{data.role}</p>
          </div>

          <div className="flex items-center justify-center gap-p-10 mt-p-22">
            <Icon icon="/icons/twitter.svg" />
            <Icon icon="/icons/facebook.svg" />
            <Icon icon="/icons/linkedin.svg" />
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col mt-p-37 w-full">
          <div className="flex items-center justify-between border-b border-outline-default pb-p-19 mb-p-19">
            <p className="text-base-12 text-font-storm">Phone</p>
            <p className="text-base-12 font-bold">{data.phoneNumber}</p>
          </div>
          <div className="flex items-center justify-between  border-outline-default pb-p-19 ">
            <p className="text-base-12 text-font-storm">Email</p>
            <p className="text-base-12 font-bold">{data.email}</p>
          </div>
        </div>

        {/* button */}
        <div className="w-full mt-p-43">
          <Button type="purple" className="w-full" content={"Send Message"} />
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsModal;
