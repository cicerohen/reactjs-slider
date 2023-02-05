import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";

import { Slider } from "../types";

type Props = {
  height: Slider["height"];
  onClick: () => void;
};

export const NextButton = ({ height, onClick }: Props) => {
  return (
    <div
      className="flex items-center justify-end absolute top-0 right-0 h-full w-10 z-10"
      style={{
        height: `${height}px`,
      }}
    >
      <button
        aria-label="Next slide"
        className="text-white p-2  rounded-l-lg bg-gray-800/20 hover:bg-gray-800/80"
        onClick={onClick}
      >
        <ArrowRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};
