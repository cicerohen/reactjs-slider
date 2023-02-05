import { useMemo } from "react";

import { Slider } from "./components/Slider";

function App() {
  const items = useMemo(
    () => [
      {
        src: "/slide-0.png",
      },
      {
        src: "/slide-1.png",
      },
      {
        src: "/slide-2.png",
      },
    ],
    []
  );

  return (
    <div>
      <header className="bg-indigo-800">
        <div className="flex items-center justify-center h-20 md:container md:mx-auto">
          <h2 className="text-white text-2xl text-center font-semibold">
           Playground/ReactJS Slider
          </h2>
        </div>
      </header>
      <main className="mt-4">
        <div className="flex  flex-col items-center justify-center">
          <h2 className="my-8 text-lg">It is just a simple  slider with ReactJS and TailwindCSS</h2>
          <div className="shadow-xl">
            <Slider items={items} width={600} height={200} />
          </div>
          {/* <p className="mt-4"><a className="text-sm text-gray-500" href="https://github.com/cicerohen/playground-reactjs-slider" target="_blank">View it on Github</a></p> */}
        </div>
      </main>
    </div>
  );
}

export default App;
