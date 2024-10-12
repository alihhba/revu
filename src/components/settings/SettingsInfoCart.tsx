import React from "react";
import Icon from "../Icon";
import Button from "../Button";
import { cn } from "../../lib/utils";

interface props {
  children?: React.ReactNode;
  icon?: string;
  title: string;
  desc: string;
  TitleClass?: string;
  border?: boolean;
}

const SettingsInfoCart = ({
  desc,
  title,
  children,
  icon,
  TitleClass,
  border = true,
}: props) => {
  return (
    <div
      className={cn( 
        "flex items-center justify-between w-full max-md:overflow-x-hidden",
        border ? "border-b pb-p-15 border-outline-15 mb-p-15" : ""
      )}
    >
      <div className="flex items-center gap-p-17">
        {icon ? (
          <div>
            <Button type="square_Border" content={<Icon icon={icon} />} />
          </div>
        ) : null}

        <div className={cn("flex flex-col gap-p-2 ", TitleClass)}>
          <p className="text-base-12 font-medium text-font-storm line-clamp-1">
            {title}
          </p>
          <p className="text-base-14 font-bold max-md:line-clamp-2  md:line-clamp-1">
            {desc}
          </p>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default SettingsInfoCart;
