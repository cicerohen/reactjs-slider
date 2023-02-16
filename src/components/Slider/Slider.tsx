import { Panel } from "./components/Panel";
import { PrevButton } from "./components/PrevButton";
import { NextButton } from "./components/NextButton";
import { Dots } from "./components/Dots";

import { useState } from "react";

import { Slider as Props } from "./types";

export const Slider = ({
  items = [],
  width = 400,
  height = 400,
}: Partial<Props>) => {
  const [index, setIndex] = useState<number>(0);

  const onPrevButtonClick = () => {
    setIndex((prev) => {
      return Math.max(prev - 1, 0);
    });
  };

  const onNextButtonClick = () => {
    setIndex((prev) => {
      return Math.min(prev + 1, items.length - 1);
    });
  };

  const onDotClick = (index: number) => {
    setIndex(index);
  };

  return (
    <div aria-roledescription="carousel" aria-label="Slide show">
      <div
        data-testid="viewport"
        className="bg-gray-800/20 relative rounded-lg overflow-hidden"
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <PrevButton height={height} onClick={onPrevButtonClick} />
        <Panel index={index} height={height} width={width} items={items} />
        <NextButton height={height} onClick={onNextButtonClick} />
        <Dots index={index} width={width} items={items} onDotClick={onDotClick} />
      </div>
    </div>
  );
};
