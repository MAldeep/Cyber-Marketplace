import { SidebarProvider } from "../../../explore Page/context/SideBarContext";
import ExploreHeader from "../../../explore Page/Ui/components/ExploreHeader";
import SideMenuExplore from "../../../explore Page/Ui/components/SideMenuExplore";
import WishlistItem from "../component/WishlistItem";

export default function Wishlist() {
  return (
    <div>
      <SidebarProvider>
        <div className="w-full overflow-hidden relative min-h-dvh">
          <SideMenuExplore />
          <header className="w-full flex flex-col gap-7 items-center justify-start relative bg-gray-100">
            <ExploreHeader />
          </header>
          <main className="w-full px-4 lg:px-40 mt-10">
            <h1 className="text-gray-800 text-7xl font-bold">Wishlist</h1>
            <WishlistItem/>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
