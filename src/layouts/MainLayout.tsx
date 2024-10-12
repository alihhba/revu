import React from "react";
import { cn } from "../lib/utils";

const MainLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "2xl:px-p-70 md:px-p-30 md:pt-[20px] md:pb-p-15 max-md:px-p-24 max-md:py-p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MainLayout;
