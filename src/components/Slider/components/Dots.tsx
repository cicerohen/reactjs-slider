import clsx from "clsx";

import { Slider } from "../types";

type Props = Omit<Slider, "height"> & {
  onDotClick: (index: number) => void;
};

export const Dots = ({ items, width, index, onDotClick }: Props) => {
  return (
    <div
      data-testid="dots-nav"
      className="flex justify-center absolute bottom-3 space-x-1"
      style={{
        width: `${width}px`,
      }}
    >
      {items.map((_, i, arr) => {
        return (
          <button
            key={i}
            aria-label={`Slide ${i+1} of ${arr.length}`}
            aria-current={i === index}
            className={clsx(
              "rounded-full block w-3 h-3 overflow-hidden",
              i === index ? "bg-gray-800/80" : "bg-gray-800/20"
            )}
            onClick={() => onDotClick(i)}
          >
            <span className="opacity-0">{i + 1}</span>
          </button>
        );
      })}
    </div>
  );
};
