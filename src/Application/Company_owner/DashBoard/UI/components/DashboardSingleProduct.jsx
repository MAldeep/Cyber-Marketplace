import { useParams } from "react-router-dom";
import useFindSingleProduct from "../../hooks/useFindSingleProduct";
// import { baseUrl } from "../../../../shared/baseUrl";
import useAuthorization from "../../hooks/useAuthorization";
import DashboardIntro from "./DashboardIntro";
import useLogo from "../../../../Buyer/landing Page/hooks/useLogo";
import DashboardHeader from "./DashboardHeader";
import SingleProductCard from "./SingleProductCard";

export default function DashboardSingleProduct() {
  const { logo } = useLogo();
  const { product } = useFindSingleProduct(useParams().productId);
  const { user, company } = useAuthorization();
  const ownerCompany = Array.isArray(company) ? company[0] : company;
  if (!product) return <div>loading ....</div>;
  return (
    <div className="w-full bg-gray-50">
      <DashboardHeader logo={logo} />
      <div className="px-24 flex flex-col gap-8 py-10">
        <DashboardIntro user={user} ownerCompany={ownerCompany} />
        <div>
          <SingleProductCard product={product} />
        </div>
      </div>
    </div>
  );
}
