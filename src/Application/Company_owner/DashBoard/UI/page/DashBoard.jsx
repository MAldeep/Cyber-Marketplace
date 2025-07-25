import { Link } from "react-router-dom";
import { baseUrl } from "../../../../shared/baseUrl";
import useAuthorization from "../../hooks/useAuthorization";
import useLogo from "../../../../Buyer/landing Page/hooks/useLogo";
import AddProductModal from "../components/add new product/AddProductModal";
import Cookies from "universal-cookie";
import { useState } from "react";

export default function DashBoard() {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const [addProductModal, setaddProductModal] = useState(false);
  const { logo } = useLogo();
  const { authorized, user, company } = useAuthorization();
  if (authorized === null) return <div>Loading ...</div>;
  if (!authorized) return null;
  const ownerCompany = company[0] || company;
  console.log(ownerCompany);
  return (
    <div className="relative h-full">
      <header className="w-full bg-white py-[24px] lg:py-[16px] px-[16px] lg:px-[160px] flex justify-center items-center shadow-2xs">
        <Link
          to={"/"}
          className="flex gap-4 text-[10px] items-center text-gray-400"
        >
          powered by :
          <img src={logo} />
        </Link>
      </header>
      DashBoard welcome {user.username}
      <img src={baseUrl + ownerCompany.logo.url} />
      <button onClick={() => setaddProductModal(true)}>Add new Product</button>
      {addProductModal && (
        <AddProductModal
          token={token}
          companyId={ownerCompany.id}
          onClose={() => setaddProductModal(false)}
        />
      )}
    </div>
  );
}
