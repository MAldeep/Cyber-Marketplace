import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import useSwiperImages from "../../hooks/useSwiperImages";

export default function SwiperRegister() {
  const { swiperImages } = useSwiperImages();
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full lg:w-1/2 h-1/2 lg:h-full"
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        slidesPerView={1}
      >
        {swiperImages.map((image, index) => (
          <SwiperSlide key={index} className="p-2">
            <img
              src={image}
              className="object-cover w-full h-full rounded-3xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
