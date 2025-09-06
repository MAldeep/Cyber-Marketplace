import axios from "axios";
import { baseUrl } from "../../../shared/baseUrl";

// adding an item to the cart
export const addToCart = async (productId, token , quantity = 1) => {
  const res = await axios.post(
    baseUrl + "/api/cart/add",
    { productId , quantity },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
