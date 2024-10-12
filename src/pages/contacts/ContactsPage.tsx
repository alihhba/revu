import { useEffect } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import NotFoundCart from "../../components/NotFoundCart";
import TabComponent from "../../components/TabComponent";
import { contactItems } from "../../initials";
import MainLayout from "../../layouts/MainLayout";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import { useModal } from "../../context/ModalContext";
import { useNavbar } from "../../context/NavbarContext";
import { cn } from "../../lib/utils";

const tabsItems = [
  {
    title: "all contacts",
    path: "all_contacts",
  },
  {
    title: "Teammates",
    path: "teammates",
  },
  {
    title: "Customers",
    path: "customers",
  },
];

const ContactsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const { changeModalHandler } = useModal();
  const { ChangeMobileTitleHandler, resetNavbar } = useNavbar();

  useEffect(() => {
    ChangeMobileTitleHandler({ type: 2 });

    return () => {
      resetNavbar();
    };
  }, []);

  useEffect(() => {
    if (!pathname.split("/")[2]) navigate(`/contacts/${tabsItems[0].path}`);
  }, [navigate, pathname]);

  if (!contactItems.length)
    return (
      <div className="md:mt-[100px]">
        <NotFoundCart
          title="No contacts found?"
          desc="Try to add more contacts from your personal
        account or invite your friends"
          linkTitle="Create new contact"
          image="/public/images/undraw_woman_re_afr8.svg"
        />
      </div>
    );

  return (
    <MainLayout>
      {id ? (
        <div className="flex items-center w-full justify-between">
          {/* tabs */}
          <div className="max-md:hidden">
            <TabComponent activeId={id!} tabTitles={tabsItems} />
          </div>

          <div className="max-md:hidden flex items-center gap-p-6 ">
            <Button
              type="border"
              className="font-black text-base-12"
              content={
                <div className="flex items-center gap-p-6">
                  <Icon icon="/icons/more_2.svg" />
                  <p>Sort:A-Z</p>
                </div>
              }
            />
            <Button
              type="border"
              className="font-black text-base-12"
              content={
                <div className="flex items-center gap-p-6">
                  <Icon icon="/icons/more.svg" />
                  <p>Bulk Actions</p>
                </div>
              }
            />
            <Button
              onclick={() =>
                changeModalHandler({ isModal: true, modalType: "add_contact" })
              }
              type="border"
              className="font-black text-base-12"
              content={
                <div className="flex items-center gap-p-6">
                  <p>Add</p>
                </div>
              }
            />
          </div>
        </div>
      ) : null}

      <div className={cn(id ? "mt-p-20" : "")}>
        <Outlet />
      </div>
    </MainLayout>
  );
};

export default ContactsPage;
