import * as Yup from "yup";

const validationSchema = Yup.object({
    email : Yup.string().email().required(),
    password : Yup.string().required(),
  })

  export default validationSchema;