import { baseUrl } from "../../../../shared/baseUrl";
import { SidebarProvider } from "../../../explore Page/context/SideBarContext";
import ExploreHeader from "../../../explore Page/Ui/components/ExploreHeader";
import SideMenuExplore from "../../../explore Page/Ui/components/SideMenuExplore";
import useCartItems from "../../hooks/useCartItems";

export default function Cart() {
  const {cart } = useCartItems();
  console.log(cart);
  return (
    <div>
      <SidebarProvider>
        <div className="w-full overflow-hidden relative min-h-dvh">
          <SideMenuExplore />
          <header className="w-full flex flex-col gap-7 items-center justify-start relative bg-gray-100">
            <ExploreHeader />
          </header>
          <main className="w-full px-4 lg:px-40 mt-10">
            <h1 className="text-gray-800 text-6xl font-bold">Shopping Cart</h1>
            <div>
              {
                cart?.map((p)=>(
                  <div key={p.product.documentId}>
                    {p.product.title}
                    <div>
                      {
                        p?.product.images?.map((img)=>(
                          <img src={baseUrl+img.url} key={img.id}/>
                        ))
                      }
                    </div>
                    </div>
                ))
              }
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
