import { SidebarProvider } from "../../context/SideBarContext";
import ExploreHeader from "../components/ExploreHeader";
import SideMenuExplore from "../components/SideMenuExplore";

export default function ExplorePage() {
  return (
    <SidebarProvider>
      <header className="w-full flex flex-col gap-7 items-center justify-start relative bg-gray-100 h-[100dvh] overflow-hidden">
        <ExploreHeader />
        <SideMenuExplore />
      </header>
      <main>
        
      </main>
    </SidebarProvider>
  );
}
