import useWishlist from "../../hooks/useWishlist";
import { Heart } from "lucide-react";

export default function AddToWishlist({ productId }) {
  const { isInWishlist, add, remove, loading } = useWishlist();
  const toggleWishlist = () => {
    if (isInWishlist(productId)) {
      remove(productId);
    } else {
      add(productId);
    }
  };
  return (
    <button
      onClick={toggleWishlist}
      disabled={loading}
      className={`p-2 rounded-2xl shadow-md transition-colors ${
        isInWishlist(productId)
          ? "bg-gray-400 text-white"
          : "bg-gray-200 text-gray-600"
      }`}
    >
      <Heart
        className={`h-5 w-5 ${isInWishlist(productId) ? "fill-current" : ""}`}
      />
    </button>
  );
}
