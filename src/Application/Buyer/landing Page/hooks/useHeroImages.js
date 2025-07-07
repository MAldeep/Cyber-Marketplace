import { useEffect, useState } from "react";
import { importHero } from "../API";

const useHeroImages = () => {
  const [heroImages, setHeroImages] = useState([]);
  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        const imagesArr = await importHero();
        setHeroImages(imagesArr);
        // const identityImage = heroImages.data[0].image.url;
      } catch (err) {
        console.error("Failed to Load images", err);
      }
    };
    fetchHeroImages();
  }, []);
  const [identityImage, AllProductsImage, ownerImage] = heroImages;
  return { identityImage, AllProductsImage , ownerImage };
};
export default useHeroImages;
