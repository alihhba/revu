import { type ClassValue } from "clsx";
import { ReactSVG } from "react-svg";
import { cn } from "../lib/utils";

interface IconProps {
  icon: string;
  className?: ClassValue;
  color?: string;
  width?: string;
  height?: string;
}

const Icon = ({
  className,
  icon,
  color = "",
  width = "1rem",
  height = "1rem",
}: IconProps) => {
  return (
    <div
      className={cn(className, "w-fit h-full flex items-center justify-center")}
    >
      <ReactSVG
        src={icon}
        beforeInjection={(svg) => {
          svg.setAttribute("width", width);
          svg.setAttribute("height", height);

          const pathElements = svg.querySelectorAll("path");
          {
            color
              ? pathElements.forEach((element) => {
                  element.setAttribute("fill", color);
                })
              : null;
          }

          const textElements = svg.querySelectorAll("text, tspan");
          textElements.forEach((element) => {
            element.setAttribute("fill", color);
          });
        }}
      />
    </div>
  );
};

export default Icon;
