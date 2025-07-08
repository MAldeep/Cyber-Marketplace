import AllProductsCard from "./cards/AllProductsCard";
import IdentityCard from "./cards/IdentityCard";
import OwnersCard from "./cards/OwnersCard";

export default function HeroLanding() {
  return (
    <section className="w-full h-auto px-[16px] lg:px-[160px] py-[40px] flex flex-col items-center gap-40 bg-gray-300 relative transition-all">
      <IdentityCard/>
      <AllProductsCard/>
      <OwnersCard/>
    </section>
  )
}
