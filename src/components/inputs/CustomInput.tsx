import { HTMLInputTypeAttribute, useState } from "react";

interface props {
  label?: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
}

const CustomInput = ({
  label,
  type = "text",
  value,
  name,
  placeholder,
}: props) => {
  const [inputValue, _setInputValue] = useState(value);
  return (
    <div className="flex flex-col gap-p-13">
      <label className="font-bold text-base-14" htmlFor={name!}>
        {label}
      </label>

      <div className="py-p-20 px-p-22 border rounded-[10px]">
        <input
          id={name!}
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none focus:ring-0 placeholder:text-base-14 placeholder:font-regular placeholder:text-font-storm"
          value={value || inputValue}
        />
      </div>
    </div>
  );
};

export default CustomInput;
