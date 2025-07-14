import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { token } from "../../../shared/token";

const useCompanyFormState = () => {
  const user = jwtDecode(token);
  const userId = user.id;
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    categories: [],
    products: [],
    owner: userId,
    employees: [],
    logoFile: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      logoFile: e.target.files[0],
    }));
  };
  return {
    formData,
    setFormData,
    handleChange,
    handleFileChange,
  };
};
export default useCompanyFormState;
