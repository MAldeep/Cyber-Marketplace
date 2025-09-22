import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { addToCart } from "../API";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("token");
  const navigate = useNavigate();

  // adding an item to cart

  const add = async (productId) => {
    if (!token) {
      toast.error("You must be logged in to use cart !");
      navigate("/login");
    }
    setLoading(true);
    try {
      const existInCart =  cart.find(
        (item) => item.product.documentId == productId
      );
      let updated;
      if (existInCart) {
        toast.success("Item already in cart !");
      } else {
        updated = await addToCart(productId, token , 1);
        toast.success("Added to cart !");
      }
      setCart(updated.items);
    } catch {
      toast.error("Failed to add to cart !");
    } finally {
      setLoading(false);
    }
  };
  return { cart, loading, add };
};
export default useCart;
