import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";
import { Slider } from "../types";

type Props = {
  height: Slider["height"];
  onClick: () => void;
};

export const PrevButton = ({ height, onClick }: Props) => {
  return (
    <div
      className="flex items-center justify-start absolute top-0 left-0 z-10"
      style={{
        height: `${height}px`,
      }}
    >
      <button
        className="text-white p-2  rounded-r-lg bg-gray-800/20 hover:bg-gray-800/80"
        onClick={onClick}
      >
        <ArrowLeftIcon className="h-6 w-6" />
      </button>
    </div>
  );
};
