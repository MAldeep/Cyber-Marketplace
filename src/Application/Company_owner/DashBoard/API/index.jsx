// getting the user

import axios from "axios";
import { baseUrl } from "../../../shared/baseUrl";
import Cookies from "universal-cookie";
// import Cookies from "universal-cookie";

export const gettingUser = async (token) => {
  const userRes = await axios.get(baseUrl + "/api/users/me?populate=*", {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  const userData = userRes.data;
  const companyRes = await axios.get(baseUrl + `/api/companies`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
    params: {
      "filters[owner][id][$eq]": userData.id,
      populate: "*",
    },
  });
  const companies = companyRes.data.data;
  return { companies, userData };
};

// creating new products
export const creatingProduct = async (token, productData, companyId) => {
  const response = await axios.post(
    baseUrl + "/api/products",
    {
      data: {
        ...productData,
        company: companyId,
        publishedAt: new Date().toISOString(),
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};
// getting all categories
export const gettingCategories = async () => {
  const response = await axios.get(baseUrl + "/api/categories");
  return response.data.data;
};

// getting company products
export const gettingCompanyProducts = async (token, companyId) => {
  try {
    const response = await axios.get(`${baseUrl}/api/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        populate: "*",
        "filters[company][documentId][$eq]": companyId,
      },
    });
    return response.data.data;
  } catch (err) {
    console.error("Failed to get products:", err);
    return [];
  }
};

// deleting product

export const deleteProduct = async (token, id) => {
  try {
    const response = await axios.delete(baseUrl + `/api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log("Failed to delete the product", err);
  }
};

// editing product
export const updateProduct = async (id, updatedData) => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  try {
    const reponse = await axios.put(
      baseUrl + `/api/products/${id}`,
      { data: updatedData },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return reponse.data;
  } catch (err) {
    console.log("failed API", err);
    throw err;
  }
};
