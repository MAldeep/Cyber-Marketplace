import { Link } from "react-router-dom";

export default function DashboardHeader({logo}) {
  return (
          <header className="w-full bg-white py-[24px] lg:py-[16px] px-[16px] lg:px-[160px] flex justify-center items-center shadow-2xs">
            <Link
              to={"/explore"}
              className="flex gap-4 text-[10px] items-center text-gray-400"
            >
              powered by :
              <img src={logo} />
            </Link>
          </header>
  )
}
