import { SidebarProvider } from "../../../explore Page/context/SideBarContext";
import ExploreHeader from "../../../explore Page/Ui/components/ExploreHeader";
import SideMenuExplore from "../../../explore Page/Ui/components/SideMenuExplore";

export default function Cart() {
  return (
    <div>
      <SidebarProvider>
        <div className="w-full overflow-hidden relative">
          <SideMenuExplore />
          <header className="w-full flex flex-col gap-7 items-center justify-start relative bg-gray-100">
            <ExploreHeader />
          </header>
        </div>
        <main className="w-full px-4 lg:px-40 mt-10">
          <h1 className="text-gray-800 text-6xl font-bold">Shopping Cart</h1>
        </main>
      </SidebarProvider>
    </div>
  );
}
