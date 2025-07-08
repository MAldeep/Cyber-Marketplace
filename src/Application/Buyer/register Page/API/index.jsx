import axios from "axios";
import { baseUrl } from "../../../shared/baseUrl";

export const importSwiper = async () => {
  try{
    const res = await axios.get(baseUrl + "/api/swipers", {
    params: {
      populate: "*",
    },
  });
  const images = res.data.data[0].images;
  const imagesUrl = images.map(image => image.url)
  const swiperImages = imagesUrl.map(url => `${baseUrl}${url}`)
  return swiperImages;
  } catch (err){
    console.log("Importing Images failure :", err)
  }
};
