import React from "react";
import { cn } from "../../lib/utils";
import Icon from "../Icon";

const ChartCartWrapper = ({
  children,
  className,
  title,
  headerContent,
  content,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  headerContent?: any;
  content?: any;
}) => {
  return (
    <div
      className={cn(
        "py-p-20 pb-0 max-md:px-0 flex-col  flex items-start justify-start rounded-[12px] bg-primary-white-default",
        className
      )}
    >
      <div className="flex items-center justify-between w-full pb-p-20 border-b border-outline-default px-p-20">
        <p className="text-h6 font-extra-bold">{title}</p>

        <div className="flex items-center gap-p-10">
          {headerContent}

          <Icon icon="/icons/calender.svg" />
        </div>
      </div>

      {content ? <div className="px-p-20 w-full">{content}</div> : null}

      <div className="px-p-20 w-full max-md:px-p-5">{children}</div>
    </div>
  );
};

export default ChartCartWrapper;
