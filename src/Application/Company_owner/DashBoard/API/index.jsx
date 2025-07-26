// getting the user

import axios from "axios";
import { baseUrl } from "../../../shared/baseUrl";

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
      },
    }
  );
  return response;
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
        "filters[company][documentId][$eq]": companyId, // ✅ change here
      },
    });
    return response.data.data;
  } catch (err) {
    console.error("Failed to get products:", err);
    return [];
  }
};


