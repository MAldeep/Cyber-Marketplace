import { Link } from "react-router-dom";

export default function ExplorePage() {
  return (
    <div className="w-full flex items-center justify-center bg-gray-200 h-[100dvh]">
      <Link
      to={"/creatingCompanyProfile"}
      className="p-3 rounded-3xl bg-black text-white">Register your company</Link>
    </div>
  )
}
