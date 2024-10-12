import CartWrapper from "../../components/carts/CartWrapper";
import ModalDescriptionAttachments from "../../components/modals/ModalDescriptionAttachments";
import ModalDescriptionChecklist from "../../components/modals/ModalDescriptionChecklist";
import ModalDescriptionDesc from "../../components/modals/ModalDescriptionDesc";
import ModalDescriptionHeader from "../../components/modals/ModalDescriptionHeader";
import { useModal } from "../../context/ModalContext";

const DescriptionPageMobile = () => {
  const { data } = useModal();

  // its page just for mobile
  return (
    <div className="md:hidden flex flex-col gap-p-8">
      <CartWrapper>
        <ModalDescriptionHeader item={data} />
      </CartWrapper>

      {data?.description ? (
        <CartWrapper>
          <ModalDescriptionDesc item={data} />
        </CartWrapper>
      ) : null}

      {data?.tasks ? (
        <CartWrapper>
          <ModalDescriptionChecklist item={data} />
        </CartWrapper>
      ) : null}

      {data?.attachments ? (
        <CartWrapper>
          <ModalDescriptionAttachments item={data} />
        </CartWrapper>
      ) : null}
    </div>
  );
};

export default DescriptionPageMobile;
