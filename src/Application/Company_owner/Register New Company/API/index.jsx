import axios from 'axios';
import { baseUrl } from '../../../shared/baseUrl';


// Upload logo to Strapi Media Library
export const uploadLogo = async (file, token) => {
  const formData = new FormData();
  formData.append('files', file);

  const response = await axios.post(`${baseUrl}/api/upload/`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  });

  return response.data[0]?.id;
};

// Create a new company with given data
export const createCompany = async (companyData, token) => {
  const response = await axios.post(`${baseUrl}/api/companies`, {
    data: companyData
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data;
};
