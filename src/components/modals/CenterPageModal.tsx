import * as Headless from "@headlessui/react";
import React from "react";
import { twMerge } from "tailwind-merge";
import { modalType, useModal } from "../../context/ModalContext";

interface centerPageModalProps {
  children: React.ReactNode;
  headerTitle?: string;
  className?: string;
  modalName?: modalType;
  fullScreen?: boolean;
  open?: boolean;
  setOpen?: (e: boolean) => void;
  childClass?: string;
}

const CenterPageModal = ({
  children,
  className,
  modalName,
  fullScreen = false,
  open = false,
  childClass,
}: centerPageModalProps) => {
  const { changeModalHandler, isModalOpen, modalType } = useModal();

  const isModal = isModalOpen && modalType === modalName;

  if (!isModal && !open) return null;

  return (
    <div
      onClick={() => {
        changeModalHandler({ isModal: false });
      }}
      className={twMerge(
        `z-[104]  md:h-screen md:mx-auto max-md:h-fit max-md:w-full md:w-fit md:flex md:justify-center md:items-center fixed  md:inset-0 max-md:bottom-0  ${className}`
      )}
    >
      <Headless.Transition
        enter="ease-out duration-200"
        enterFrom="opacity-0 translate-y-12  sm:translate-y-0 sm:scale-95"
        enterTo="opacity-200 translate-y-0 sm:scale-100"
        leave="ease-in "
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-12 sm:translate-y-0"
        show={isModal || open}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className=" w-full min-w-max h-fit flex items-center justify-center"
        >
          <div
            className={`${
              fullScreen
                ? "h-screen md:w-screen p-3"
                : "px-p-24  md:w-fit md:px-[24px] md:py-[22px] transition-all"
            }  w-full   rounded-t-[20px] bg-white  shadow-lg ring-1 ring-zinc-950/10 [--gutter:theme(spacing.8)] sm:mb-auto  sm:rounded-[8px] forced-colors:outline transition-all duration-500   ${childClass}`}
          >
            {/* <div className="">
              <div className="flex items-center justify-between"> 
                <p className="capitalize font-semibold text-[16px]">
                  {headerTitle}
                </p>
                <Button
                  type="border"
                  onclick={() => {
                    changeModalHandler({ isModal: false });
                    setOpen && setOpen(false);
                  }}
                  content={
                    <Icon
                      icon="/icons/Icon-x.svg"
                      width="18px"
                      height="18px"
                      color="#8083A3"
                    />
                  }
                />
              </div>
            </div> */}
            <div
              className={`overflow-y-auto overflow-x-hidden  ${
                fullScreen
                  ? "h-[90vh]"
                  : "h-fit max-md:min-h-fit md:h-fit max-h-[90vh] w-full   md:max-h-[80vh]"
              }  z-[102] scrollbar-thin   max-md:pt-p-43`}
            >
              {children}
            </div>
          </div>
        </div>
      </Headless.Transition>

      <div className="absolute top-0 w-full mt-p-8 flex items-center justify-center md:hidden">
        <div className="w-p-32 h-p-6 bg-grey min-w-max min-h-max rounded-full bg-[#c4bebe]"></div>
      </div>
    </div>
  );
};

export default CenterPageModal;
