import { useEffect, useState } from "react";
import { fetchingProductsByCategory } from "../API";

const useProductsByCat = (category) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchingProductsByCategory(category);
        setProducts(data);
      } catch (err) {
        console.log("Hook Failure", err);
      }
    };
    fetchData();
  }, [category]);
  return { products };
};
export default useProductsByCat;
