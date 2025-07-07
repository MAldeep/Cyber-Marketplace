import { Link } from "react-router-dom";

export default function HeaderBtns() {
  return (
    <div className="hidden lg:flex items-center gap-3.5">
      <Link
        to={"/login"}
        className="bg-black text-white px-10 py-3 rounded-[8px]"
      >
        Sign In
      </Link>
      <Link
        to={"/register"}
        className="bg-white text-black px-10 py-3 rounded-[8px] border"
      >
        Register
      </Link>
    </div>
  );
}
