import { useEffect } from "react";
import CartWrapper from "../components/carts/CartWrapper";
import ContactDashboardCartV1 from "../components/ContactDashboardCartV1";
import CountersNumeric from "../components/CountersNumeric";
import Icon from "../components/Icon";
import LastUpdateDashboardV1Cart from "../components/LastUpdateDashboardV1Cart";
import { useNavbar } from "../context/NavbarContext";
import {
  counterNumericItem,
  dashboardContactsItemsV1,
  lastUpdateDashboardV1,
} from "../initials";
import MainLayout from "../layouts/MainLayout";
import UserImageGallery from "../components/UserImageGallery";

const NavContent = () => {
  return (
    <div className="me-p-18">
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

const Dashboard = () => {
  const { changeNavbarDesktopHandler, ChangeMobileTitleHandler, resetNavbar } =
    useNavbar();

  useEffect(() => {
    changeNavbarDesktopHandler({ content: NavContent });
    ChangeMobileTitleHandler({ type: 2 });

    return () => {
      resetNavbar();
    };
  }, []);

  // v1
  return (
    <MainLayout>
      <div className="flex relative flex-col gap-p-22 md:gap-p-18">
        {/* counters */}
        <div className="flex flex-row gap-p-20 max-md:hidden">
          {counterNumericItem.map((item) => (
            <CountersNumeric item={item} />
          ))}
        </div>
        <div className="flex flex-row gap-p-20 md:hidden">
          {counterNumericItem.slice(0, 1).map((item) => (
            <CountersNumeric item={item} />
          ))}
        </div>

        {/* content */}
        <div className="flex relative gap-p-20">
          {/* left */}
          <div className="flex flex-col gap-p-20 md:gap-p-14 w-full">
            {/* header */}
            <div className="flex items-center justify-between">
              <p className="text-h6 font-extra-bold">Latest updates</p>

              <div className="flex items-center gap-p-6">
                <Icon icon="/icons/more_2.svg" />
                <p className="text-base-12 font-bold">All projects</p>
              </div>
            </div>
            {/* content */}
            <div className="space-y-p-12 ">
              {lastUpdateDashboardV1.map((item) => (
                <LastUpdateDashboardV1Cart item={item} />
              ))}
            </div>
          </div>

          {/* right */}
          <div className=" max-md:hidden">
            <div className="sticky top-[80px] w-[320px] max-w-[320px] min-w-[320px] flex flex-col gap-p-14">
              {/* title */}
              <div>
                <p className="text-h6 font-extra-bold">Contacts</p>
              </div>

              {/* content */}
              <div>
                <CartWrapper>
                  <ContactDashboardCartV1 item={dashboardContactsItemsV1} />
                </CartWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
