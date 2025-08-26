import axios from "axios";
import { baseUrl } from "../../../shared/baseUrl";

// get the product by documentId
export const getSingleProduct = async (documentId) => {
  const response = await axios.get(
    `${baseUrl}/api/products?filters[documentId][$eq]=${documentId}&populate=*`
  );
  return response.data.data[0];
};

