import { render, RenderResult, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const items = [
  {
    src: "/slide-0.png",
  },
  {
    src: "/slide-1.png",
  },
  {
    src: "/slide-2.png",
  },
];

const props = {
  items,
  width: 600,
  height: 200
};


import { Slider } from "./Slider";

describe("<Slider/> specs", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<Slider {...props} />);
  });

  it("should render correctly", () => {
    const viewport = screen.queryByTestId("viewport");
    const prevButton = screen.queryByLabelText(
      "Previous slide"
    ) as HTMLButtonElement;
    const nextButton = screen.queryByLabelText(
      "Next slide"
    ) as HTMLButtonElement;
    const panel = screen.queryByTestId("panel") as HTMLDivElement;
    const dotsNav = screen.queryByTestId("dots-nav") as HTMLButtonElement;
    const slides = panel.querySelectorAll("[aria-hidden]");
    const dots = dotsNav.querySelectorAll("[aria-current]");

    expect(viewport).toHaveStyle({
      width: `${props.width}px`,
      height: `${props.height}px`
    });

    expect(viewport).toHaveClass("relative overflow-hidden");

    expect(prevButton).toBeVisible();
    expect(nextButton).toBeVisible();

    expect(panel).toHaveStyle({
      width: `${props.width * items.length}px`,
      height: `${props.height}px`,
      transform: `translateX(0px)`
    });

    expect(panel).toHaveClass("flex absolute left-0 top-0");
    
    slides.forEach((item, i) => {
      const img = item.querySelector("img") as HTMLImageElement;
      expect(img.getAttribute("src")).toEqual(items[i].src);
      expect(item).toHaveStyle({
        flexBasis: `${props.width}px`
      })
    })
    expect(slides.length).toEqual(items.length);

    expect(dotsNav).toHaveStyle({
      width: `${props.width}px`,
    });

    dots.forEach((item, i) => {
      expect(item).toHaveAttribute("aria-label", `Slide ${i + 1} of ${items.length}`)
      expect(item).toBeVisible();
      expect(item).toHaveTextContent(String(i + 1));
    });

    expect(dots.length).toEqual(items.length);
  });

  it("should initially render with the first slide active", () => {
    const panel = screen.queryByTestId("panel") as HTMLElement;
    const dotsNav = screen.queryByTestId("dots-nav") as HTMLButtonElement;
    const dots = dotsNav.querySelectorAll("[aria-current]");

    panel.querySelectorAll("[aria-hidden]").forEach((item, i) => {
       const img = item.querySelector("img") as HTMLImageElement;
       expect(img).toBeVisible();
      if (i === 0) {
        expect(item.getAttribute("aria-hidden")).toEqual("false");
      } else {
        expect(item.getAttribute("aria-hidden")).toEqual("true");
      }
    });

    dots.forEach((item, i) => {
      if (i === 0) {
        expect(item.getAttribute("aria-current")).toEqual("true");
      } else {
        expect(item.getAttribute("aria-current")).toEqual("false");
      }
    });
  });

  it("should navigate correctly when click on arrow buttons", async () => {
    const panel = screen.queryByTestId("panel") as HTMLElement;
    const prevButton = screen.queryByLabelText(
      "Previous slide"
    ) as HTMLButtonElement;
    const nextButton = screen.queryByLabelText(
      "Next slide"
    ) as HTMLButtonElement;

    // go to the  second slide
    await userEvent.click(nextButton);

    panel.querySelectorAll("[aria-hidden]").forEach((item, i) => {
      if (i === 1) {
        expect(item).toHaveAttribute("aria-hidden", "false");
      } else {
        expect(item).toHaveAttribute("aria-hidden", "true");
      }
    });

    // go back to the first slide
    await userEvent.click(prevButton);

    panel.querySelectorAll("[aria-hidden]").forEach((item, i) => {
      if (i === 0) {
        expect(item).toHaveAttribute("aria-hidden", "false");
      } else {
        expect(item).toHaveAttribute("aria-hidden", "true");
      }
    });
  });

  it("should navigate correctly when click on dot buttons", async () => {
    const panel = screen.queryByTestId("panel") as HTMLElement;
    const dotsNav = screen.queryByTestId("dots-nav") as HTMLButtonElement;
    const dots = dotsNav.querySelectorAll("[aria-current]");

    // select the second slide
    await userEvent.click(dots[1]);

    dots.forEach((item, i) => {
      if (i === 1) {
        expect(item).toHaveAttribute("aria-current", "true");
      } else {
        expect(item).toHaveAttribute("aria-current", "false");
      }
    });

    panel.querySelectorAll("[aria-hidden]").forEach((item, i) => {
      if (i === 1) {
        expect(item).toHaveAttribute("aria-hidden", "false");
      } else {
        expect(item).toHaveAttribute("aria-hidden", "true");
      }
    });

    // select the first slide

    await userEvent.click(dots[0]);

    dots.forEach((item, i) => {
      if (i === 0) {
        expect(item).toHaveAttribute("aria-current", "true");
      } else {
        expect(item).toHaveAttribute("aria-current", "false");
      }
    });

    panel.querySelectorAll("[aria-hidden]").forEach((item, i) => {
      if (i === 0) {
        expect(item).toHaveAttribute("aria-hidden", "false");
      } else {
        expect(item).toHaveAttribute("aria-hidden", "true");
      }
    });
  });
});
