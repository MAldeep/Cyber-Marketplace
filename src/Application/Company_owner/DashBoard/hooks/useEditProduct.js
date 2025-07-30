import { useState } from "react";
import { updateProduct } from "../API";

const useEditProduct = ()=>{
  const [loading , setLoading ] = useState(false);
  const [error, setError] = useState(null);

  const editProduct = async (id , update) =>{
    setLoading(true);
    setError(null);
    try{
      const result = await updateProduct(id , update);
      return result;
    }catch (err){
      setError(err);
    }finally{
      setLoading(false);
    }
  }
  return {editProduct , loading , error};
}
export default useEditProduct;