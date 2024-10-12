import Badge from "../Badge";
import Button from "../Button";
import Icon from "../Icon";
import UserImage from "../UserImage";

interface props {
  item: any;
}

const ProfileInfoDetails = ({ item }: props) => {
  return (
    <div className="flex flex-col">
      {/* image */}
      <div>
        <UserImage image={item.userImage} className="w-p-84 h-p-84" />
      </div>

      <div className="mt-p-16 flex flex-col">
        <p className="text-h6 font-bold">{item.username}</p>
        <p className="text-p-14 ">{item.email}</p>
      </div>

      <div className="mt-p-8">
        <p className="text-base-12 font-medium">{item.bio}</p>
      </div>

      {item.role && (
        <div className="mt-p-14">
          <Badge type="secondary" title={item.role} />
        </div>
      )}

      <div className="flex flex-col mt-p-37">
        {/* new tasks */}
        {item.tasks && (
          <div className="flex flex-col gap-p-5">
            <div className="flex items-center gap-p-27">
              <p className="text-base-14 font-bold">{item.tasks}</p>
              <Badge
                type="secondary"
                className="py-p-0"
                title={`+${item.newTaskBadge}`}
              />
            </div>
            <div className="flex items-center justify-between gap-p-27">
              <p className="text-base-12 font-medium text-font-storm">
                New tasks
              </p>
              <Icon icon="/icons/rise_arrow.svg" />
            </div>
          </div>
        )}

        {item.tasks && (
          <div className="w-full border-b border-outline-default my-p-12"></div>
        )}

        {/* followers */}
        {item.followers && (
          <div className="flex flex-col gap-p-5">
            <div className="flex items-center gap-p-27">
              <p className="text-base-14 font-bold">{item.followers}</p>
              <Badge
                type="secondary"
                className="py-p-0"
                title={`+${item.followersBadge}`}
              />
            </div>
            <div className="flex items-center justify-between gap-p-27">
              <p className="text-base-12 font-medium text-font-storm">
                Followers
              </p>
              <Icon icon="/icons/rise_arrow.svg" />
            </div>
          </div>
        )}

        {item.followers && (
          <div className="w-full border-b border-outline-default my-p-12"></div>
        )}

        {/* total budget */}
        {item.totalBudget && (
          <div className="flex flex-col gap-p-5">
            <div className="flex items-center gap-p-27">
              <p className="text-base-14 font-bold">${item.totalBudget}</p>
            </div>
            <div className="flex items-center justify-between gap-p-27">
              <p className="text-base-12 font-medium text-font-storm">
                Total budget
              </p>
              <Icon icon="/icons/down_arrow.svg" />
            </div>
          </div>
        )}

        {item.totalBudget && (
          <div className="w-full border-b border-outline-default my-p-12"></div>
        )}

        {/* hourlyRate */}
        {item.hourlyRate && (
          <div className="flex flex-col gap-p-5">
            <div className="flex items-center gap-p-27">
              <p className="text-base-14 font-bold">${item.hourlyRate}</p>
            </div>
            <div className="flex items-center justify-between gap-p-27">
              <p className="text-base-12 font-medium text-font-storm">
                hourlyRate
              </p>
              <Icon icon="/icons/down_arrow.svg" />
            </div>
          </div>
        )}

        {/* buttons */}
        <div className="flex flex-wrap items-center mt-p-36 gap-p-6">
          <Button
            className="w-full min-w-fit"
            type="border"
            content={
              <div className="flex items-center justify-center gap-p-6 w-full min-w-fit">
                <Icon icon="/icons/add.svg" color="#000" />
                <p className="text-base-12 font-bold">Add new task</p>
              </div>
            }
          />
          <Button
            type="square_Border"
            content={<Icon icon="/icons/letter.svg" color="#000" />}
          />
          <Button
            type="square_Border"
            content={<Icon icon="/icons/rise_arrow.svg" color="#000" />}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoDetails;
