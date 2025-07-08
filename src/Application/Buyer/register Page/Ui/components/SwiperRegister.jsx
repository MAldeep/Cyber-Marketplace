// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import useSwiperImages from "../../hooks/useSwiperImages";

export default function SwiperRegister() {
  const { swiperImages } = useSwiperImages();
  console.log(swiperImages);
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="w-1/2 h-full bg-amber-500 p-10"
        autoplay={{
          delay: 3000,
        }}
        loop={true}
      >
        {
          swiperImages.map((image, index)=>(
            <SwiperSlide key={index}>
              <img src={image} className="object-cover"/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
