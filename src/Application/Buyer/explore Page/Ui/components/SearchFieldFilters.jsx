import { CiSearch } from "react-icons/ci";

export default function SearchFieldFilters() {
  return (
    <div className="w-full p-4 bg-[#F5F5F5] rounded-[8px] hidden lg:flex items-center gap-2">
      <CiSearch className="text-[#656565] text-2xl" />
      <input
        type="search"
        placeholder="Search"
        className="w-full outline-0 border-0 bg-transparent"
      />
    </div>
  );
}
