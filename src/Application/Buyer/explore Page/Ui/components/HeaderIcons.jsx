import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function HeaderIcons() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 text-[20px]">
      <Link to={"/cart"} className="w-full flex justify-center items-center gap-3">
        <p className="block lg:hidden">Cart</p>
        <FaShoppingCart />
      </Link>
      <Link to={"/wishlist"} className="w-full flex justify-center items-center gap-3">
        <p className="block lg:hidden">Wishlist</p>
        <FaHeart />
      </Link>
      <Link to={"/profile"} className="w-full flex justify-center items-center gap-3">
        <p className="block lg:hidden">Profile</p>
        <IoPerson />
      </Link>
    </div>
  );
}
