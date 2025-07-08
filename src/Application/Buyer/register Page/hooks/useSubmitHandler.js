import axios from "axios";
import emailjs from "@emailjs/browser";
import { baseUrl } from "../../../shared/baseUrl";

const handleSubmit = async (values, { resetForm }, navigate) => {
  try {
    const res = await axios.post(
      baseUrl + "/api/auth/local/register",
      {
        email: values.email,
        password: values.password,
        username: values.userName,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // in mail confirmation we need to stop navigating to the login page
    // untill email is confirmed
    if (res.data.jwt) {
      await emailjs.send(
        "service_chlp1f4",
        "template_snw5lf2",
        {
          user_name: values.userName,
          user_email: values.email,
        },
        "yXzmb02ob8rdOiNKA"
      );
      resetForm();
      navigate("/login");
    }
  } catch (err) {
    console.error("Error during registration or email sending:", err);
  }
};

export default handleSubmit;
