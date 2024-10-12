import { useEffect } from "react";
import CommentInputBox from "../../components/CommentInputBox";
import LastUpdateDashboardV1Cart from "../../components/LastUpdateDashboardV1Cart";
import UserImage from "../../components/UserImage";
import UserImageGallery from "../../components/UserImageGallery";
import { useNavbar } from "../../context/NavbarContext";
import { lastUpdateDashboardV1 } from "../../initials";
import ChannelsUpdatesWrapper from "../../components/ChannelsUpdatesWrapper";
import TeamMatesUpdateWrapper from "../../components/TeamMatesUpdateWrapper";

const NavContent = () => {
  return (
    <div className="">
      <UserImageGallery
        images={[
          "/images/user_4.svg",
          "/images/user_3.svg",
          "/images/user_4.svg",
          "/images/user_3.svg",
          "/images/user_4.svg",
          "/images/user_3.svg",
        ]}
        showNumber={3}
      />
    </div>
  );
};

const UpdatePage = () => {
  const { changeNavbarDesktopHandler } = useNavbar();

  useEffect(() => {
    changeNavbarDesktopHandler({ content: NavContent });

    return () => {
      changeNavbarDesktopHandler({ content: null });
    };
  }, []);

  return (
    <div className="flex items-start justify-between relative  ">
      {/* left */}
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

      {/* right */}
      <div className="max-md:hidden overflow-y-auto  h-[75vh] scrollbar-none  w-fit max-w-min min-w-[235px] ps-p-20 2xl:ps-p-40 sticky top-[125px]">
        <div className="">
          <ChannelsUpdatesWrapper />
        </div>

        <div className="mt-p-31">
          <TeamMatesUpdateWrapper />
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
