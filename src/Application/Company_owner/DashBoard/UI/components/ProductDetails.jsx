import { FaTrashAlt } from "react-icons/fa";
import useDeleteProduct from "../../hooks/useDeleteProduct";
import toast from "react-hot-toast";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";


export default function ProductDetails({ product, onDeleted }) {
  const { handleDelete, loading } = useDeleteProduct();
  const handleClick = async () => {
    const success = await handleDelete(product.documentId);
    if (!success) {
      toast.error("Failed to delete this item");
    }else {
      toast.success("Product deleted!");
      onDeleted?.(product.documentId);
    }
  };
  return (
    <div className="w-full flex flex-col gap-1.5">
      <div className="flex flex-col gap-1">
        <label className="text-gray-600 text-[14px]">Product Name</label>
        <h1 className="text-gray-900 text-4xl">{product.title}</h1>
      </div>

      <div>
        <label className="text-gray-600 text-[14px]">Product Price</label>
        <p
          className={`
          text-2xl ${
            product.discountPercentage
              ? "text-gray-500 line-through"
              : "text-black"
          }
          `}
        >
          {product.price} $
        </p>
      </div>
      {product.discountPercentage && (
        <div>
          <div className="flex flex-col gap-1">
            <label className="text-gray-600 text-[14px]">
              Discount Percentage
            </label>
            <p className="text-amber-300 text-2xl">
              {product.discountPercentage} %
            </p>
          </div>
          <div>
            <label className="text-gray-600 text-[14px]">Final Price</label>
            <p className="text-blue-600 text-2xl">{product.finalPrice} $</p>
          </div>
        </div>
      )}
      <div>
        {product.inStock ? (
          <p className="text-green-600 text-3xl">In Stock</p>
        ) : (
          <p className="text-red-500 text-3xl">Out of Stock</p>
        )}
      </div>
      <button
        onClick={handleClick}
        className="bg-red-700 text-2xl w-full flex justify-center items-center gap-2 py-2 rounded-2xl cursor-pointer"
      >
        <FaTrashAlt />
        {loading ? "Deleting ..." : "Delete"}
      </button>
      <Link
      to={`/dashboard/${product.documentId}`}
      className="bg-blue-600 text-2xl w-full flex justify-center items-center gap-2 py-2 rounded-2xl cursor-pointer"
      >
        <MdModeEdit />
        Edit this Product
      </Link>
    </div>
  );
}
