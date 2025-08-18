import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useProductsByCat from "../../hooks/useProductsByCat";
import { baseUrl } from "../../../../shared/baseUrl";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import AddToWishlist from "./AddToWishlist";

export default function SingleCategoryProducts({ category }) {
  const { products } = useProductsByCat(`${category}`);
  return (
    <div className="w-full min-h-[40dvh] py-5 px-3 flex flex-col justify-center items-start rounded-2xl bg-gray-200 gap-2.5">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl text-gray-700 font-bold">{category}</h1>
        <Link className="text-gray-600 text-sm hover:underline">See all</Link>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 10000,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full custom-swiper"
      >
        {products?.map((product) => (
          <SwiperSlide
            className="flex flex-col gap-2 bg-gray-50 rounded-2xl p-3"
            key={product.documentId}
          >
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
                  <SwiperSlide key={idx}>
                    <img
                      src={baseUrl + img.url}
                      className="w-full h-[200px] object-cover rounded-2xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
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
              ? "text-gray-900 line-through"
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
                  <label className="text-gray-600 text-[14px]">
                    Final Price
                  </label>
                  <p className="text-blue-600 text-2xl">
                    {product.finalPrice} $
                  </p>
                </div>
              </div>
            )}
            <div>
              {product.inStock ? (
                <p className="text-green-600 text-sm">In Stock</p>
              ) : (
                <p className="text-red-500 text-sm">Out of Stock</p>
              )}
            </div>
            <div className="w-full flex items-center justify-between gap-3.5">
              <AddToWishlist productId={product.documentId} />
              <button className="bg-black text-white rounded-2xl w-full py-3 mt-4 flex items-center gap-8 justify-center cursor-pointer">
                <BsCart4 />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
