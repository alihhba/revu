import { useEffect } from "react";
import { useNavbar } from "../../context/NavbarContext";
import CartWrapper from "../carts/CartWrapper";
import CommentInputBox from "../CommentInputBox";
import TextMessageCart from "./TextMessageCart";

const InboxChatWrapper = () => {
  const { ChangeMobileTitleHandler, resetNavbar } = useNavbar();

  useEffect(() => {
    ChangeMobileTitleHandler({ type: 2 });

    return () => {
      resetNavbar();
    };
  }, []);

  return (
    <CartWrapper className="relative max-md:bg-transparent max-md:px-0 flex h-full flex-col  items-center  ">
      <div className=" md:py-[31px] overflow-y-auto overflow-x-hidden scrollbar-none">
        <div className="w-[99%]">
          <div className=" h-full flex flex-col gap-[29px]">
            <TextMessageCart type="other" />
            <TextMessageCart type="self" />
            <TextMessageCart type="other" />
            <TextMessageCart type="self" />
            <TextMessageCart type="other" />
            <TextMessageCart type="self" />
            <TextMessageCart type="other" />
            <TextMessageCart type="self" />
            <TextMessageCart type="other" />
          </div>
        </div>
      </div>

      <div className="sticky max-md:fixed max-md:py-p-10 bg-grey-default z-30 bottom-p-10  end-0 w-full ">
        {/* <ChatBoxSendMessage /> */}
        <CommentInputBox />
      </div>
    </CartWrapper>
  );
};

export default InboxChatWrapper;
