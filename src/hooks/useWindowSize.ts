import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [dimentions, setDimentions] = useState<{
    height: number;
    width: number;
  }>({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const resizeHandler = () => {
    setDimentions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return { height: dimentions.height, width: dimentions.width };
};

export default useWindowSize;
