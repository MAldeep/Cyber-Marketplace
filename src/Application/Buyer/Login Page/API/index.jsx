import axios from "axios";
import { baseUrl } from "../../../shared/baseUrl";

export const importingUser = async (values) => {
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
    )
    return res;
  } catch (err) {
    console.log("failed importing user", err);
  }
};
