import * as Yup from "yup";

export const companySchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string(),
  logo: Yup.mixed(),
});
