import axios from "axios";
import { baseUrl } from "../../../shared/baseUrl";

export const importLogo = async () => {
  try {
    const res = await axios.get(baseUrl + "/api/logos", {
      params: {
        populate: "*",
      },
    });
    const logoUrl = `${baseUrl}${res.data.data[0].image.url}`;
    return logoUrl;
  } catch (error) {
    console.error("Error fetching logo", error);
    return null;
  }
};
