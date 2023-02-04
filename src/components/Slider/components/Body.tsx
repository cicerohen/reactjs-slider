import { PrevButton } from "./PrevButton";
import { NextButton } from "./NextButton";
import { Viewport } from "./Viewport";

type Props = {
  viewport: number;
  height: number;
  index: number;
  items: any[];
  onPrev: () => void;
  onNext: () => void
};

export const Body = ({ viewport, height, items, index, onPrev, onNext }: Props) => {
  return (
    <div
      className="flex flex-1justify-between relative"
      style={{
        width: `${viewport}px`,
        height: `${height}px`,
      }}
    >
      <PrevButton height={height} onClick={onPrev} />
      <Viewport
        viewport={viewport}
        height={height}
        index={index}
        items={items}
      />
      <NextButton height={height} onClick={onNext} />
    </div>
  );
};
