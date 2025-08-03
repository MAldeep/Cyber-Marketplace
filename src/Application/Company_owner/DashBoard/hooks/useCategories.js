import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { gettingCategories } from "../API";

const useCategories = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await gettingCategories(token);
        setCategories(data);
        console.log(data);
      } catch (err) {
        setError(err.message || "Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [token]);
  return { categories, loading, error };
};
export default useCategories;
