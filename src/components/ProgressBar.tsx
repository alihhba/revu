import { cn } from "../lib/utils";

const colorType = {
  0: "bg-[#EBF0F0]",
  25: "bg-[#F66254]",
  50: "bg-[#F6B354]",
  75: "bg-[#81de4a]",
  100: "bg-[#0052ff]",
};

const colorTypeMain = {
  0: "bg-[#EBF0F0]",
  25: "bg-[#fde0dd]",
  50: "bg-[#FDF0DD]",
  75: "bg-[#e6f8db]",
  100: "bg-[#0052ff]",
};

interface Props {
  className?: string;
  all: string | number;
  done: string | number;
}

const getColorType = (progress: number) => {
  if (progress === 0) return 0;
  if (progress <= 50) return 25;
  if (progress <= 75) return 50;
  if (progress < 100) return 75;
  if (progress === 100) return 100;
  return 100;
};

const ProgressBar = ({ className, all, done }: Props) => {
  const progress = (+done / +all) * 100;
  const colorLevel = getColorType(progress);

  return (
    <div
      className={cn(
        "h-p-4 min-h-max w-p-72 min-w-max rounded-full",
        colorTypeMain[colorLevel],
        className
      )}
    >
      <div
        style={{ width: `${progress}%` }}
        className={cn("h-full rounded-full", colorType[colorLevel])}
      ></div>
    </div>
  );
};

export default ProgressBar;
