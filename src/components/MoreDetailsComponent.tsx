import { offset, useFloating } from "@floating-ui/react";
import * as Headless from "@headlessui/react";
import { useState } from "react";

interface props {
  withHover?: boolean;
  children: any;
  childrenHover?: boolean;
  placement?: any;
  icon?: any;
  offsetNum?: number;
  onHoverLeaveClose?: boolean;
}

const MoreDetailsComponent = ({
  withHover = false,
  children,
  childrenHover = false,
  placement,
  icon,
  offsetNum = 3,
  onHoverLeaveClose = true,
}: props) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const [mouseEnter, setMouseEnter] = useState<any>(false);
  const [iconMouseEnter, setIconMouseEnter] = useState<any>(false);

  const { refs, floatingStyles } = useFloating({
    placement: placement,
    open: moreInfo,
    onOpenChange: setMoreInfo,
    middleware: [offset(+offsetNum)],
  });

  return (
    <div className="flex w-fit h-fit">
      <div
        ref={refs.setReference}
        onClick={() => {
          if (!withHover) {
            setMoreInfo(!moreInfo);
          }
        }}
        onMouseEnter={() => {
          if (withHover) {
            setMoreInfo(true);
          }
          clearTimeout(iconMouseEnter);
        }}
        onMouseLeave={() => {
          if (withHover && !childrenHover) {
            const closeTime = setTimeout(() => {
              setMoreInfo(false);
              setIconMouseEnter(closeTime);
            }, 500);
          }
        }}
        className="cursor-pointer items-center min-w-full  flex w-fit h-fit max-md:px-[0.56rem] max-md:my-[0.81rem]"
      >
        {icon}
      </div>

      <Headless.Transition
        leave="duration-100 ease-in"
        leaveTo="opacity-0"
        enter="opacity-0"
        show={moreInfo}
        ref={refs.setFloating}
        // style={floatingStyles}
      >
        <div
          onMouseEnter={() => {
            clearTimeout(iconMouseEnter);
            clearTimeout(mouseEnter);
          }}
          onMouseLeave={() => {
            if (!childrenHover) {
              const closeTimer = setTimeout(() => {
                if (onHoverLeaveClose) {
                  setMoreInfo(false);
                }
              }, 1000);
              setMouseEnter(closeTimer);
            }
          }}
          ref={refs.setFloating}
          style={floatingStyles}
          onClick={() => setMoreInfo(false)}
          className="absolute  flex flex-col gap-4 z-[100]  h-fit w-fit min-w-fit rounded-lg  border bg-white dark:bg-primary_dark-300 dark:border-secondary_grey-100 drop-shadow-lg"
        >
          <div className="">{children}</div>
        </div>
      </Headless.Transition>

      {moreInfo && !childrenHover ? (
        <div
          onClick={() => setMoreInfo(!moreInfo)}
          className="min-w-full  cursor-default fixed inset-0   z-40 h-full min-h-max  w-full"
        />
      ) : null}
    </div>
  );
};

export default MoreDetailsComponent;
