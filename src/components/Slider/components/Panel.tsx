import { Slider } from "../types";

export const Panel = ({ width, height, index, items }: Slider) => {
  return (
    <div
      style={{
        width: `${width * (items.length || 0)}px`,
        height: `${height}px`,
        transform: `translateX(${-1 * index * width}px)`,
      }}
      className="flex transition absolute left-0 top-0"
    >
      {items.map((item) => {
        return (
          <div
            className="relative text-gray-800"
            style={{ flexBasis: `${width}px` }}
          >
            <img
              src={item.src}
              className="w-full h-full object-contain"
              sizes="100vw"
            />
          </div>
        );
      })}
    </div>
  );
};
