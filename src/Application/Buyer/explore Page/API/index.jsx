import axios from "axios";
import { baseUrl } from "../../../shared/baseUrl";

// getting all products in a single category
export const fetchingProductsByCategory = async (category) => {
  try {
    const response = await axios.get(
      baseUrl +
        `/api/products?filters[category][name][$eq]=${category}&populate=*`
    );
    return response.data.data;
  } catch (err) {
    console.log("API failure", err);
    return [];
  }
};

// adding to wishlist
export const addToWishList = async (productId, token) => {
  const res = await axios.post(
    baseUrl + "/api/wishlist/add",
    { productId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

// removing from wishlist
export const removeFromWishList = async (productId, token) => {
  const res = await axios.post(
    baseUrl + "/api/wishlist/remove",
    {
      productId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

// getting wishlist
export const getWishlist = async (token) => {
  const res = await axios.get(baseUrl + "/api/wishlist/me?populate[products][populate][images]=*", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
