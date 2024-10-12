import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function SimpleToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? "bg-indigo-600 border-transparent" : "bg-transparent border border-black/50",
        "relative inline-flex h-6 items-center  w-11 flex-shrink-0 cursor-pointer border  rounded-full transition-colors duration-200 ease-in-out  focus:outline-none  focus:ring-0 "
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-5 bg-white" : "translate-x-1 bg-black",
          "pointer-events-none inline-block h-4 w-4 transform rounded-full  shadow ring-0 transition duration-200 ease-in-out"
        )}
      />
    </Switch>
  );
}
