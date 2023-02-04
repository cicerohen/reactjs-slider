import clsx from "clsx";

import { Slider } from "../types";

type Props = Omit<Slider, "height"> & {
  onSelect: (index: number) => void;
};

export const Dots = ({ items, width, index, onSelect }: Props) => {
  return (
    <div
      className="flex justify-center absolute bottom-3 space-x-1"
      style={{
        width: `${width}px`,
      }}
    >
      {items.map((_, i) => {
        return (
          <button
            className={clsx(
              "rounded-full block w-3 h-3 overflow-hidden",
              i === index ? "bg-gray-800/80" : "bg-gray-800/20"
            )}
            onClick={() => onSelect(i)}
          >
            <span className="opacity-0">{i + 1}</span>
          </button>
        );
      })}
    </div>
  );
};
