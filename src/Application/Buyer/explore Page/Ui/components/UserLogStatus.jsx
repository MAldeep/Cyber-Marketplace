import { useEffect } from "react";
import { useLoginStore } from "../../../../store";
import { Link } from "react-router-dom";

export default function UserLogStatus() {
  const { isLoggedIn, logout, syncFromCookies } = useLoginStore();
  useEffect(() => {
    syncFromCookies();
  }, [syncFromCookies]);
  return (
    <div className="w-full lg:w-fit flex justify-center">
      {isLoggedIn ? (
        <button
          onClick={logout}
          className="py-3 px-6 rounded-2xl bg-red-400 hover:bg-red-600 transition-all text-white cursor-pointer"
        >
          Log out
        </button>
      ) : (
        <Link
          to={"/login"}
          className="py-3 px-6 rounded-2xl bg-black text-white cursor-pointer"
        >
          Log in
        </Link>
      )}
    </div>
  );
}
