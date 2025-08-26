import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { baseUrl } from "../../../../shared/baseUrl";
import AddToWishlist from "../../../explore Page/Ui/components/AddToWishlist";
import { BsCart4 } from "react-icons/bs";

export default function SingleProductDetailsCard({ product }) {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-12">
      <div className="w-1/2">
        {Array.isArray(product.images) && product.images.length >= 1 && (
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="w-full nested-swiper"
          >
            {product.images.map((img, idx) => (
              <SwiperSlide
                key={idx}
                className="border border-gray-100 p-2 rounded-2xl"
              >
                <img
                  src={baseUrl + img.url}
                  className="w-full h-[50vh] object-contain rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div className="w-1/2 flex flex-col gap-6">
        <h1 className="text-7xl font-bold text-gray-800">{product.title}</h1>
        {product.finalPrice ? (
          <div className="w-full flex justify-start items-center gap-2">
            <p className="text-4xl text-gray-700 font-bold">
              $ {product.finalPrice}
            </p>
            <p className="line-through text-2xl text-gray-400">
              $ {product.price}
            </p>
          </div>
        ) : (
          <p>{product.price}</p>
        )}
        <p className="text-2xl text-gray-500">{product.description}</p>
        <div className="w-full flex justify-between items-center gap-2">
          <AddToWishlist productId={product.documentId} />
          <button className="bg-black text-white rounded-2xl w-full py-2.5 flex items-center gap-8 justify-center cursor-pointer">
            <BsCart4 />
          </button>
        </div>
      </div>
    </div>
  );
}
