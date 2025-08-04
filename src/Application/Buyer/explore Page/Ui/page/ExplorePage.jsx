import { SidebarProvider } from "../../context/SideBarContext";
import useProductsByCat from "../../hooks/useProductsByCat";
import ExploreHeader from "../components/ExploreHeader";
import FilterByCategories from "../components/FilterByCategories";
import SideMenuExplore from "../components/SideMenuExplore";

export default function ExplorePage() {
  const { products } = useProductsByCat("Laptops");
  console.log(products);
  return (
    <SidebarProvider>
      <SideMenuExplore />
      <header className="w-full flex flex-col gap-7 items-center justify-start relative bg-gray-100 overflow-hidden">
        <ExploreHeader />
      </header>
      <main className="w-full flex gap-5 justify-start items-start px-[20px] lg:px-[160px] py-[32]x]">
        <FilterByCategories />
        <div>jbkuilb</div>
      </main>
      <footer></footer>
    </SidebarProvider>
  );
}
