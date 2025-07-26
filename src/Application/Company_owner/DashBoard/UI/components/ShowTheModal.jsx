import { useState } from "react";
import Cookies from "universal-cookie";
import AddProductModal from "./add new product/AddProductModal";

export default function ShowTheModal({ownerCompany}) {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const [addProductModal, setaddProductModal] = useState(false);
  return (
    <div>
      <button
      className="w-full bg-black text-white py-3 rounded-2xl cursor-pointer"
      onClick={() => setaddProductModal(true)}>Add new Product</button>
      {addProductModal && (
        <AddProductModal
          token={token}
          companyId={ownerCompany.documentId}
          onClose={() => setaddProductModal(false)}
        />
      )}
    </div>
  );
}
