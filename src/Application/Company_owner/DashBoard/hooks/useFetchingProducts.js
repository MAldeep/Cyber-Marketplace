import { useEffect, useState } from "react";
import { gettingCompanyProducts } from "../API";
import Cookies from "universal-cookie";

const useFetchingProducts = (companyId)=> {
  const [products , setProducts] = useState([]);
  const cookies = new Cookies();
  const token = cookies.get("token");
  useEffect(()=>{
    if (!token || !companyId) return;
    const fetchData = async ()=>{
      try{
        const data = await gettingCompanyProducts(token , companyId);
        setProducts(data);
      }catch (err){
        console.log("failed to fetch prodcuts" , err);
      }
    }
    fetchData();
  },[companyId, token]);
  return {products};
}
export default useFetchingProducts;