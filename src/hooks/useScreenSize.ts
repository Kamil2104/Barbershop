import { useState, useEffect } from "react";

import type { ScreenSize } from "@/types/screen";

const useSceenSize = () => {
  const [screen, setScreen] = useState<ScreenSize>("lg");

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setScreen("lg");
      } else if (width >= 768 && width < 1024) {
        setScreen("md");
      } else {
        setScreen("sm");
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);

    return () => {
      window.removeEventListener("resize", updateItems);
    };
  }, []);

  return screen;
};

export default useSceenSize;
