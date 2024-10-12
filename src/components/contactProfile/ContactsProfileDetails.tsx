import { lastUpdateDashboardV1 } from "../../initials";
import CommentInputBox from "../CommentInputBox";
import LastUpdateDashboardV1Cart from "../LastUpdateDashboardV1Cart";
import UserImage from "../UserImage";

const ContactsProfileDetails = () => {
  return (
    <div className="flex flex-col space-y-p-12 w-full">
      <div className="shadow-sm">
        <CommentInputBox
          className="bg-primary-white-default"
          content={
            <UserImage image="/images/user_4.svg" className="w-p-34 h-p-34" />
          }
        />
      </div>

      <div className="space-y-p-12  ">
        {lastUpdateDashboardV1.map((item) => (
          <LastUpdateDashboardV1Cart item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactsProfileDetails;
