import React from "react";
import { cn } from "../../lib/utils";

const CartWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "py-p-20 px-p-20 flex items-start justify-center rounded-[12px] bg-primary-white-default",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CartWrapper;
