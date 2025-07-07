import { useEffect, useState } from "react";
import { importLogo } from "../API";

const useLogo = () => {
  const [logo, setLogo] = useState(null);
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const url = await importLogo();
        setLogo(url);
      } catch (err) {
        console.error("failed to load image", err);
      }
    };
    fetchLogo();
  },[]);
  return {logo};
};

export default useLogo;
