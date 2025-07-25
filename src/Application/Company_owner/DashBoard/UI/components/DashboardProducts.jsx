import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,  Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useFetchingProducts from "../../hooks/useFetchingProducts";
import { baseUrl } from "../../../../shared/baseUrl";

export default function DashboardProducts({ companyId }) {
  const { products } = useFetchingProducts(companyId);

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
              <div className="w-full bg-gray-50 p-3 rounded-2xl flex flex-col gap-2.5">
                {p.images.length > 1 ? (
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
                ) : (
                  <img
                    src={baseUrl + p.images[0].url}
                    alt={p.title}
                    className="w-full h-[200px] object-cover rounded-2xl"
                  />
                )}
                <h1>{p.title}</h1>
                <p>{p.description}</p>
                <p>{p.price}</p>
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
