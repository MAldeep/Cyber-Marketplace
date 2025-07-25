import * as Yup from "yup";
const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Must be positive"),
  discountPercentage: Yup.number().min(0).max(100),
  inStock: Yup.boolean(),
  specifications: Yup.string(),
});

export default validationSchema;