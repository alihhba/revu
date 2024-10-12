import { cn } from "../../lib/utils";
import Icon from "../Icon";

interface props {
  suffix: keyof typeof bgColor;
  className?: string;
  height?: string;
  width?: string;
}

const bgColor = {
  sketch: "bg-secondary-yellow-85",
  psd: "bg-primary-blue-10",
  ai: "bg-secondary-green-85",
  figma: "bg-secondary-red-85/60",
  xlsx: "bg-secondary-green-85",
};

const iconType = {
  sketch: "/icons/sketch.svg",
  psd: "/icons/psd.svg",
  ai: "/icons/ai.svg",
  figma: "/icons/figma.svg",
  xlsx: "/icons/xlsx.svg",
};

const FileImageDetector = ({ suffix, className, height, width }: props) => {
  return (
    <div
      className={cn(bgColor[suffix], "py-p-14 px-p-9 rounded-[8px] w-fit", className)}
    >
      <Icon icon={iconType[suffix]} height={height} width={width} />
    </div>
  );
};

export default FileImageDetector;
