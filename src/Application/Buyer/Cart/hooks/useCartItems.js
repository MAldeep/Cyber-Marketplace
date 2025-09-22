import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { getTheCart } from "../API";

const useCartItems = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    const getCart = async () => {
      if (!token) {
        toast.error("You must be logged in to use cart !");
        navigate("/login");
      }
      setLoading(true);
      try {
        const response = await getTheCart(token);
        setCart(response.items);
      } catch (err) {
        console.log(err);
      }
    };
    getCart();
  }, [navigate, token]);
  return { cart, loading };
};
export default useCartItems;
