import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { addToWishList, getWishlist, removeFromWishList } from "../API";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("token");
  const navigate = useNavigate();

  // getting the wishlist initially
  useEffect(() => {
    if (!token) return;
    (async () => {
      setLoading(true);
      try {
        const data = await getWishlist(token);
        setWishlist(data?.products || []);
      } catch {
        toast.error("Failed to load wishlist");
      } finally {
        setLoading(false);
      }
    })();
  }, [token]);
  const add = async (productId) => {
    if (!token) {
      toast.error("You must be logged in to show wishlist");
      navigate("/login");
    }
    setLoading(true);
    try {
      const updated = await addToWishList(productId, token);
      setWishlist(updated.products);
      toast.success("Added to wishlist !");
    } catch {
      toast.error("Failed to add to wishlist !");
    } finally {
      setLoading(false);
    }
  };
  const remove = async (productId) => {
    if (!token) {
      toast.error("You must be logged in to remove");
      navigate("/login");
    }
    setLoading(true);
    try {
      const updated = await removeFromWishList(productId, token);
      setWishlist(updated.products);
      toast.success("Removed from wishlist !");
    } catch {
      toast.error("Failed to remove from wishlist !");
    } finally {
      setLoading(false);
    }
  };
  const isInWishlist = (productId) => {
    return wishlist.some((p) => p.documentId === productId);
  };
  return { wishlist, loading, add, remove, isInWishlist };
};
export default useWishlist;
