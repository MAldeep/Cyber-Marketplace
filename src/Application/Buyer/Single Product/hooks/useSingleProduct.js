import { useEffect, useState } from "react";
import { getSingleProduct } from "../API";

const useSingleProduct = (id) => {
  const [singleProduct, setSingleProduct] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      try {
        const Product = await getSingleProduct(id);
        setSingleProduct(Product);
      } catch (err) {
        console.log("Error hook ", err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);
  return { singleProduct, loading };
};
export default useSingleProduct;
