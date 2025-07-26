import Cookies from "universal-cookie";
import { useAuthStore } from "../store";

const cookies = new Cookies();

export const checkAuth = () => {
  const token = cookies.get("token");
  const setIsLoggedIn = useAuthStore.getState().setIsLoggedIn;
  const loggedIn = !!token;
  setIsLoggedIn(loggedIn);
  return { loggedIn };
};
