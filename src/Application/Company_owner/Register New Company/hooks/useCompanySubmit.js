import { jwtDecode } from "jwt-decode";
import { createCompany, uploadLogo } from "../API";
import Cookies from "universal-cookie";

export const useSubmitCompanyForm = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const user = token ? jwtDecode(token) : null;
  const ownerId = user?.id;

  const handleSubmit = async (values, actions) => {
    try {
      let logoId = null;
      if (values.logo) {
        logoId = await uploadLogo(values.logo, token);
      }

      const payload = {
        name: values.name,
        description: values.description,
        logo: logoId,
        owner: ownerId,
        // still can't find the way to post those "400error"
        // categories: values.categories,
        // products: values.products,
        // employees: values.employees,
      };

      const result = await createCompany(payload, token);
      console.log("✅ Company created:", result);
      actions.resetForm();
    } catch (err) {
      console.error(
        "❌ Error creating company:",
        err.response?.data || err.message
      );
    } finally {
      actions.setSubmitting(false);
    }
  };

  return { handleSubmit };
};
