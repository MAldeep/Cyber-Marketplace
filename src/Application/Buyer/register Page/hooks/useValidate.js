import * as Yup from "yup";

const validationSchema = Yup.object({
  userName: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("This must be a valid e-mail")
    .required("This field is required"),
  phoneNumber: Yup.string(),
  password: Yup.string()
    .min(6, "Too short")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
      "Password must contain at least one uppercase letter, one number, and one special character"
    )
    .required("This field is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "This must match the password")
    .required("This field is rquired"),
});

export default validationSchema;