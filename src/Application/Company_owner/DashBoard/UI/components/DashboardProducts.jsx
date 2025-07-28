import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useFetchingProducts from "../../hooks/useFetchingProducts";
import { baseUrl } from "../../../../shared/baseUrl";
import ProductDetails from "./ProductDetails";
import { useEffect, useState } from "react";

export default function DashboardProducts({ companyId }) {
  const { products : fetchedProducts } = useFetchingProducts(companyId);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(fetchedProducts);
  }, [fetchedProducts]);
  const handleDeleteSuccess = (deletedId) => {
    setProducts((prev) => prev.filter((p) => p.documentId !== deletedId));
  };
  return (
    <div className="w-full py-5 flex flex-col justify-center items-center gap-4 px-3 rounded-2xl">
      {products.length > 0 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          className="w-full custom-swiper"
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="w-full bg-gray-50 p-3 rounded-2xl flex flex-col justify-between gap-2.5 h-[650px]">
                {Array.isArray(p.images) && p.images.length >= 1 && (
                  <Swiper
                    // pagination={{ clickable: true }}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="w-full nested-swiper"
                  >
                    {p.images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={baseUrl + img.url}
                          alt={`Product Image ${idx + 1}`}
                          className="w-full h-[200px] object-cover rounded-2xl"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) }
                <ProductDetails product={p} onDeleted={handleDeleteSuccess}/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No products yet</p>
      )}
    </div>
  );
}
