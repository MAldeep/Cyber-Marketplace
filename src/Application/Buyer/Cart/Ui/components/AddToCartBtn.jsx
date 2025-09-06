import { BsCart4 } from "react-icons/bs";
import useCart from "../../hooks/useCart";

export default function AddToCartBtn({ productId }) {
  const { add } = useCart();
  const handleAdd = () => {
    add(productId);
  };
  return (
    <button
      onClick={handleAdd}
      className="bg-black text-white rounded-2xl w-full py-2.5 flex items-center gap-8 justify-center cursor-pointer"
    >
      <BsCart4 />
    </button>
  );
}
