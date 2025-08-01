import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const useLogoutDashboard = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const logout = () => {
    cookies.remove("selectedCompanyId", { path: "/" });
    navigate("/explore");
  };
  return {logout};
};
export default useLogoutDashboard;
