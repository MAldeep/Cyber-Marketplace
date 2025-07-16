import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { gettingUser } from "../API";
import toast from "react-hot-toast";

const useAuthorization = () => {
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(null);
  const [company, setCompany] = useState(null);
  const [allCompanies, setAllCompanies] = useState(null);
  const navigate = useNavigate();
  const cookies = new Cookies();
  const token = cookies.get("token");
  useEffect(() => {
    const chechAuth = async () => {
      if (!token) {
        navigate("/login");
        return;
      }
      try {
        const { companies, userData } = await gettingUser(token);
        setUser(userData);
        if (companies.length === 1) {
          setAuthorized(true);
          setCompany(companies);
        } else if (companies.length > 1) {
          setAuthorized(true);
          setAllCompanies(companies);
          const selectedCompanyId = cookies.get("selectedCompanyId");
          const selectedCompany = companies.find(
            (c) => c.id === selectedCompanyId
          );
          if (selectedCompany) {
            setCompany(selectedCompany);
          } else {
            setCompany(companies);
            navigate("/selectCompany");
          }
        } else {
          navigate("/explore");
          toast.error("You don't have any companies ");
        }
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    };
    chechAuth();
  }, [navigate, token]);
  return { authorized, user, company , allCompanies};
};
export default useAuthorization;
