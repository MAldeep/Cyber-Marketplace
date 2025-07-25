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
  const companyRes = await axios.get(
    baseUrl + `/api/companies?filters[owner][id][$eq]=${userData.id}`,
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
      params: {
        populate: "*",
      },
    }
  );
  const companies = companyRes.data.data;
  return { companies, userData };
};

// creating new products 
export const creatingProduct = async (token, productData) => {
  const response = await axios.post(baseUrl+"/api/products",
    {
      data : productData,
    },
    {
      headers : {
        Authorization : `Bearer ${token}`
      }
    }
  );
  return response;
}