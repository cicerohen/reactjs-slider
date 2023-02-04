import { ImgHTMLAttributes } from "react";

type Item = ImgHTMLAttributes<HTMLElement>;

export type Slider = {
    items: Item[];
    width: number;
    height: number;
    index: number;
} 