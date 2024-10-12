import { Outlet } from "react-router-dom";

import { useNavbar } from "../context/NavbarContext";
import { Footer, FooterMobile } from "./Footer";
import { Navbar, NavbarMobile } from "./Navbar";
import SidebarLayout from "./SidebarLayout";

const LayoutWrapper = () => {
  const { mobileNavbarType, desktopNavType } = useNavbar();
  return (
    <div className="w-full h-auto relative flex bg-grey-default">
      {/* sidebar */}
      <div>
        <div className="sticky top-0 left-0 max-md:hidden">
          <SidebarLayout />
        </div>
      </div>

      {/* outlet */}
      <div className="relative w-full max-md:h-full  ">
        <div className="w-full sticky top-0 bg-grey-default z-10">
          {/* desktop */}

          <div className="max-md:hidden">
            <Navbar type={desktopNavType || 1} />
          </div>

          {/*mobile */}
          <div className="md:hidden">
            <NavbarMobile type={mobileNavbarType || 1} />
          </div>
        </div>

        <div className="md:pb-p-80 pb-p-100">
          <Outlet />
        </div>

        <div className="w-full absolute bottom-0">
          {/* desktop */}
          <div className="max-md:hidden">
            <Footer />
          </div>
          {/* mobile */}
          <div className="md:hidden ">
            <div className="fixed bottom-0 w-full -z-10- ">
              {/* mask image for mobile */}
              {/* <Image
                image="/public/images/mask_botton_one.svg"
                className="w-screen h-full"
              /> */}
            </div>

            <div className="z-20">
              <FooterMobile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
