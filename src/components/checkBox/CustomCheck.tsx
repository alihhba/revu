import * as Headless from "@headlessui/react";
import clsx from "clsx";
import { Checkbox, CheckboxField } from "./CheckBox";
import { cn } from "../../lib/utils";

function Label({ className, ...props }: any) {
  return (
    <Headless.Label
      data-slot="label"
      {...props}
      className={clsx("select-none", className)}
    />
  );
}

const CustomCheck = ({
  onchange,
  title,
  color,
  wrapperStyle,
  titleClass,
}: any) => {
  return (
    <div
      className={`flex justify-between items-center w-fit  gap-4 ${wrapperStyle}`}
    >
      <CheckboxField className={"flex  justify-between w-full "}>
        {title ? (
          <Label
            className={cn(
              "w-fit text-font-storm ms-p-10 font-medium text-base-12",
              titleClass
            )}
          >
            {title}
          </Label>
        ) : null}

        <Checkbox
          className={"w-fit  bg-grey-default rounded-[4px]"}
          color={color || "blue"}
          title={title}
          onChange={onchange}
        />
      </CheckboxField>
    </div>
  );
};

export default CustomCheck;
