import AddNewContactModal from "../components/contacts/AddNewContactModal";
import ContactDetailsModal from "../components/contacts/ContactDetailsModal";
import KanbanDescriptionWrapper from "../components/kanban/KanbanDescriptionWrapper";
import SetStatKanbanTypeMobileModal from "../components/kanban/SetStatKanbanTypeMobileModal";
import CenterPageModal from "../components/modals/CenterPageModal";
import MobileMenu from "../components/modals/MobileMenu";
import ProjectDescriptionWrapper from "../components/modals/ProjectDescriptionWrapper";
import { useModal } from "../context/ModalContext";



const ModalProviders = () => {
  const { isModalOpen, changeModalHandler } = useModal();
  //   const deviceType = navigator.userAgent;

  return (
    <div className={`${isModalOpen && "md:fixed md:inset-0 z-[90] w-full"}`}>
      <CenterPageModal modalName="mobile-menu">
        <MobileMenu />
      </CenterPageModal>

      <CenterPageModal modalName="projects-description">
        <div className="max-w-[490px] md:min-w-[490px]">
          <ProjectDescriptionWrapper />
        </div>
      </CenterPageModal>

      <CenterPageModal modalName="kanban_description">
        <div className="md:max-w-[490px] md:min-w-[490px] w-full">
          <KanbanDescriptionWrapper />
        </div>
      </CenterPageModal>

      <CenterPageModal modalName="kanban_change_state_mobile">
        <div>
          <SetStatKanbanTypeMobileModal />
        </div>
      </CenterPageModal>

      <CenterPageModal modalName="add_contact" childClass="md:px-p-0">
        <div className="md:min-w-[490px]">
          <AddNewContactModal />
        </div>
      </CenterPageModal>

      <CenterPageModal modalName="contact-details">
        <div className="md:w-full md:min-w-[490px] pb-p-20">
          <ContactDetailsModal />
        </div>
      </CenterPageModal>

      {/* background */}
      {isModalOpen ? (
        <div
          style={{ backdropFilter: "blur(1px)" }}
          onClick={() => {
            changeModalHandler({ isModal: false });
          }}
          className="fixed z-[80] inset-0 flex w-screen justify-center  bg-[#1A1C1D]/70 px-2  py-2 focus:outline-0 sm:px-6 sm:py-8 lg:px-8 lg:py-16"
        />
      ) : null}
    </div>
  );
};

export default ModalProviders;
