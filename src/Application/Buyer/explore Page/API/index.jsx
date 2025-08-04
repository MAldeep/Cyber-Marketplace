import axios from "axios";
import { baseUrl } from "../../../shared/baseUrl";

// getting all products in a single category
export const fetchingProductsByCategory = async (category) => {
  try {
    const response = await axios.get(baseUrl + `/api/products?filters[category][name][$eq]=${category}&populate=*`);
    return response.data.data;
  } catch (err) {
    console.log("API failure", err);
    return [];
  }
};
