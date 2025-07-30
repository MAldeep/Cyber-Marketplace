import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { baseUrl } from "../../../../shared/baseUrl";
import { MdModeEdit } from "react-icons/md";
import { useState } from "react";
import useEditProduct from "../../hooks/useEditProduct";
import EditFieldModal from "./EditFieldModal";

export default function SingleProductCard({ product, refresh }) {
  const [openField, setOpenField] = useState(null);
  const [productData, setProductData] = useState(product);
  const { editProduct } = useEditProduct();

  const handleSave = async (newValue) => {
    if (!openField) return;
    const update = { [openField]: newValue };
    const updated = await editProduct(product.documentId, update);
    if (updated) {
      setProductData({ ...productData, ...update });
      if (refresh) refresh();
    }
    setOpenField(null);
  };
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full lg:w-1/2"
      >
        {product.images.map((p, index) => (
          <SwiperSlide key={index} className="w-full shadow rounded-2xl">
            <img
              alt={`Product Image ${index + 1}`}
              src={baseUrl + p.url}
              className="w-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full lg:w-1/2 flex flex-col gap-3.5 justify-start">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <label className="text-gray-500 text-sm">Product Name</label>
            <h1 className="text-gray-800 text-4xl font-bold">
              {product.title}
            </h1>
          </div>
          <button 
          onClick={() => setOpenField("title")}
          className="flex justify-center items-center gap-1.5 bg-blue-700 px-4 py-2 rounded-2xl text-white">
            {/* Edit */}
            <MdModeEdit />
          </button>
        </div>
        <EditFieldModal
          isOpen={!!openField}
          fieldName={openField}
          currentValue={productData?.[openField]}
          onClose={() => setOpenField(null)}
          onSubmit={handleSave}
        />
      </div>
    </div>
  );
}
