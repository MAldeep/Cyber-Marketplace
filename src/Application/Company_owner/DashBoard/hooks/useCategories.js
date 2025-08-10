import { useEffect, useState } from "react";
import { gettingCategories } from "../API";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await gettingCategories();
        setCategories(data);
      } catch (err) {
        setError(err.message || "Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);
  return { categories, loading, error };
};
export default useCategories;
