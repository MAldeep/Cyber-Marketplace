import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <Link to={"/dashboard"} className="p-2.5 bg-black text-white">dashboard</Link>
      <Link to={"/creatingCompanyProfile"} className="p-2.5 bg-black text-white">Register New company</Link>
    </div>
  )
}
