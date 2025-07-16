import Cookies from "universal-cookie";
import { isLoggedIn } from "../store";

const cookies = new Cookies();

export const chechAuth = () => {
  const token = cookies.get("token");
  const setIsLoggedIn = isLoggedIn.getState().setIsLoggedIn;
  const loggedIn = !!token;
  setIsLoggedIn(loggedIn);
  return loggedIn;
};
