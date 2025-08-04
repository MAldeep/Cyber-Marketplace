import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import useCategories from "../../../../Company_owner/DashBoard/hooks/useCategories";
import SearchFieldFilters from "./SearchFieldFilters";

export default function FilterByCategories() {
  const [isOpen, setIsOpen] = useState(true);
  const { categories, loading, error } = useCategories();
  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories</p>;
  return (
    <div className="w-[400px] mt-10 rounded-2xl max-h-[60dvh] overflow-scroll no-scrollbar relative">
      <button
        className="w-full flex justify-between items-center p-4  border border-t-0 border-r-0 border-l-0 border-b-[#B5B5B5] sticky top-0 bg-white z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">Categories</span>
        {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="bg-white text-black relative flex flex-col items-start py-4">
          <SearchFieldFilters />
          {categories.map((item) => (
            <label key={item.id} className="relative flex gap-1.5 items-center cursor-pointer group mt-1.5 mb-1.5">
              <input className="peer sr-only" type="checkbox" />
              <div className="w-6 h-6 rounded-lg bg-white border-2 border-gray-500 transition-all duration-300 ease-in-out peer-checked:bg-gradient-to-br from-gray-500 to-blue-500 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
              <span className="ml-3 text-sm font-medium text-gray-900">
                {item.name}
              </span>
            </label>
          ))}
          <button className="text-white bg-black p-3 w-full rounded-2xl cursor-pointer sticky bottom-0">
            Apply
          </button>
        </div>
      )}
    </div>
  );
}
