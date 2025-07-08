import { useEffect, useState } from "react";
import { importSwiper } from "../API";

const useSwiperImages = () => {
  const [swiperImages, setSwiperImages] = useState([]);
  useEffect(() => {
    const fecthSwiperImages = async () => {
      try {
        const images = await importSwiper();
        setSwiperImages(images);
      } catch (err) {
        console.log("failed fetching images", err);
      }
    };
    fecthSwiperImages();
  }, []);
  return { swiperImages };
};
export default useSwiperImages;
