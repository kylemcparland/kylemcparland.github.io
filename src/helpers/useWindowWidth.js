import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [headerHeight, setHeaderHeight] = useState("100vh");

  useEffect(() => {
    const updateHeaderHeight = () => {
      const newHeight = (window.innerWidth / 100) * 60;
      setHeaderHeight(`${Math.max(newHeight, 70)}px`);
    };

    window.addEventListener("resize", updateHeaderHeight);

    updateHeaderHeight();

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);
  return headerHeight;
};

export default useWindowWidth;
