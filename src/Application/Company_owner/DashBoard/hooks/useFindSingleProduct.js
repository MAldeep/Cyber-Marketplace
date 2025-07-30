import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { gettingCompanyProducts } from "../API";

const useFindSingleProduct = (id)=>{
  const cookies = new Cookies();
  const selectedCompanyId = cookies.get("selectedCompanyId");
  const token = cookies.get("token");
  const [product , setProduct] = useState(null);

  useEffect(()=>{
    if(!selectedCompanyId || !token) return;
    const fetchSingleProduct = async ()=>{
      try{
        const data = await gettingCompanyProducts(token , selectedCompanyId);
        const singleProduct = data.find((p)=> p.documentId === id);
        setProduct(singleProduct);
      }catch (err){
        console.log("Failed to fetch the product", err);
      }
    }
    fetchSingleProduct();
  },[selectedCompanyId,id,token]);
  return {product};
}
export default useFindSingleProduct;