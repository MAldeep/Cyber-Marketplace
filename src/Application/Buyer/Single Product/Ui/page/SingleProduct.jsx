import { useParams } from "react-router-dom";
import useSingleProduct from "../../hooks/useSingleProduct";
import { SidebarProvider } from "../../../explore Page/context/SideBarContext";
import SideMenuExplore from "../../../explore Page/Ui/components/SideMenuExplore";
import ExploreHeader from "../../../explore Page/Ui/components/ExploreHeader";
import SingleProductDetailsCard from "../component/SingleProductDetailsCard";

export default function SingleProduct() {
  const { productId } = useParams();
  const { singleProduct, loading } = useSingleProduct(productId);
  console.log(singleProduct);
  if (loading) return <p>loading ...</p>;
  if (!singleProduct) return <p>no product found ...</p>;
  return (
    <SidebarProvider>
      <div className="w-full overflow-hidden relative">
        <SideMenuExplore />
        <header className="w-full flex flex-col gap-7 items-center justify-start relative bg-gray-100">
          <ExploreHeader />
        </header>
        <main className="w-full px-4 lg:px-40 mt-10">
          <SingleProductDetailsCard product={singleProduct}/>
        </main>
      </div>
    </SidebarProvider>
  );
}
