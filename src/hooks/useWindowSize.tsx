import { Sizes } from "@/utils/types";
import { useLayoutEffect, useState } from "react";

const useWindowSize:() => Sizes = () => {
  const [windowSize, setWindowSize] = useState<Sizes>({ width: 0, height: 0 });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useLayoutEffect(() => {
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
};

export default useWindowSize;