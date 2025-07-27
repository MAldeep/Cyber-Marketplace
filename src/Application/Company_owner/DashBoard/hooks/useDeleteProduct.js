import { useState } from "react";
import { deleteProduct } from "../API";
import Cookies from "universal-cookie";

const useDeleteProduct = ()=>{
  const [loading, setLoading] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("token");

  const handleDelete = async (id)=>{
    setLoading(true);
    try{
      await deleteProduct(token , id);
      return true;
    }catch (err){
      console.log("delete failure", err);
      throw err;
    }finally{
      setLoading(false);
    }
  }
  return { handleDelete , loading }
}
export default useDeleteProduct;