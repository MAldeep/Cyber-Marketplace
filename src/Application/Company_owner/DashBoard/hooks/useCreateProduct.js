import { useState } from "react";
import { creatingProduct } from "../API";
import { uploadLogo } from "../../Register New Company/API";

const useCreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [createdProduct, setCreatedProduct] = useState(null);

  const handleSubmit = async ({
    token,
    title,
    description,
    price,
    discountPercentage = 0,
    inStock = true,
    specifications = {},
    images = [],
    companyId,
    categoryId
  }) => {
    setLoading(true);
    setUploading(true);
    setError(null);

    try {
      // Upload images and collect IDs
      const imageIds = [];
      for (const file of images) {
        const id = await uploadLogo(file, token);
        imageIds.push(id);
      }

      setUploading(false);

      // Generate slug from title
      const slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

      const finalPrice = price - (price * discountPercentage / 100);

      const productData = {
        title,
        slug,
        description,
        price,
        discountPercentage,
        finalPrice,
        inStock,
        specifications,
        images: imageIds,
        company: companyId,
        category: categoryId,
      };

      const response = await creatingProduct(token, productData, companyId );
      setCreatedProduct(response.data);
      return response.data;

    } catch (err) {
      setError(err.response?.data?.error || err.message);
      return null;
    } finally {
      setUploading(false);
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    loading,
    uploading,
    error,
    createdProduct,
  };
};

export default useCreateProduct;
