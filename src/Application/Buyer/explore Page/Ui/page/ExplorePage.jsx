import { SidebarProvider } from "../../context/SideBarContext";
import ExploreHeader from "../components/ExploreHeader";
import FilterByCategories from "../components/FilterByCategories";
import SideMenuExplore from "../components/SideMenuExplore";
import SingleCategoryProducts from "../components/SingleCategoryProducts";

export default function ExplorePage() {
  return (
    <SidebarProvider>
      <div className="w-full min-h-[100dvh] overflow-hidden relative">
        <SideMenuExplore />
        <header className="w-full flex flex-col gap-7 items-center justify-start relative bg-gray-100">
          <ExploreHeader />
        </header>
        <main className="w-full flex flex-col lg:flex-row gap-5 justify-start items-start px-[20px] lg:px-[160px] py-[32px]">
          <FilterByCategories />
          <div className="w-full lg:w-3/4 flex flex-col gap-3.5">
            <SingleCategoryProducts category={"Laptops"} />
            <SingleCategoryProducts category={"Smartphones"} />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
