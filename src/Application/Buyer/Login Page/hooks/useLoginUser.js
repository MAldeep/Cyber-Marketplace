import axios from "axios";
import { baseUrl } from "../../../shared/baseUrl";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";

const handleLoginUser = async (values, { resetForm }, navigate) => {
  try {
    const res = await axios.post(
      baseUrl + "/api/auth/local",
      {
        identifier: values.email,
        password: values.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.data.jwt) {
      const cookies = new Cookies();
      cookies.set("token", res.data.jwt, {
        sameSite: "lax",
        path: "/",
      });
      toast.success("Successfully logged in");
      resetForm();
      navigate("/explore");
    } 
  } catch (err) {
    toast.error("Your email or password is not found");
    console.log("failed finding user", err);
  }
};

export default handleLoginUser;
