import Cookies from "universal-cookie";
import { gettingUser } from "../API";

export const selectCompany = async (id) => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  try {
    const { companies, userData } = await gettingUser(token);
  const selectedCompany = companies.find((c) => c.id === id);
  if (selectedCompany) {
    cookies.set("selectedCompanyId", selectedCompany.id, { path: "/" });
  }else {
    throw new Error("Selected company not found");
  }
  return { selectedCompany, userData };
  } catch (err){
    console.error("Error selecting company:", err);
    return { selectedCompany: null, userData: null };
  }
};
