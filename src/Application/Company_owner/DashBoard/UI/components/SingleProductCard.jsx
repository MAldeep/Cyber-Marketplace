import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { baseUrl } from "../../../../shared/baseUrl";
import { MdModeEdit } from "react-icons/md";
import { useState } from "react";
import useEditProduct from "../../hooks/useEditProduct";
import EditFieldModal from "./EditFieldModal";
import SingleFieldEdit from "./SingleFieldEdit";
import { useNavigate } from "react-router-dom";

export default function SingleProductCard({ product, refresh }) {
  const [openField, setOpenField] = useState(null);
  const [productData, setProductData] = useState(product);
  const { editProduct } = useEditProduct();
  const date = new Date(product.createdAt);
  const formattedDate = date.toLocaleDateString();
  const navigate = useNavigate();
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
  console.log(product);
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full lg:w-1/2 h-full"
      >
        {product.images.map((p, index) => (
          <SwiperSlide key={index} className="w-full shadow rounded-2xl h-full object-cover">
            <img
              alt={`Product Image ${index + 1}`}
              src={baseUrl + p.url}
              className="w-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full lg:w-1/2 flex flex-col gap-9.5 justify-start">
        <SingleFieldEdit
          setOpenField={setOpenField}
          field={"title"}
          label={"Product Name"}
          segment={product.title}
        />
        <SingleFieldEdit
          setOpenField={setOpenField}
          field={"description"}
          label={"Product description"}
          segment={product.description}
        />
        <SingleFieldEdit
          setOpenField={setOpenField}
          field={"price"}
          label={"Product Price"}
          segment={product.price}
        />
        <SingleFieldEdit
          setOpenField={setOpenField}
          field={"inStock"}
          label={"In Stock"}
          segment={`${product.inStock}`}
        />
        <SingleFieldEdit
          setOpenField={setOpenField}
          field={"discountPercentage"}
          label={"Discount Percentage"}
          segment={`${product.discountPercentage} %`}
        />
        <div>
          <p className="text-gray-400 text-sm">created at :</p>
          <p className="text-gray-500 text-2xl">{formattedDate}</p>
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-black text-white rounded-2xl py-3 cursor-pointer font-bold"
        >
          Back to Dashboard
        </button>
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
