import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { baseUrl } from "../../../../shared/baseUrl";
import { BsCart4 } from "react-icons/bs";
import AddToWishlist from "../../../explore Page/Ui/components/AddToWishlist";

export default function WishlistItemCard({ item }) {
  console.log(item);
  return (
    <div className="w-full flex flex-col lg:flex-row gap-3.5 lg:gap-0 justify-between items-center border-b-2 border-b-gray-200 pb-2.5 pt-10">
      <div className="w-full lg:w-1/3">
        {Array.isArray(item.images) && item.images.length >= 1 && (
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="w-full nested-swiper"
          >
            {item.images.map((img, idx) => (
              <SwiperSlide
                key={idx}
                className="border border-gray-100 p-2 rounded-2xl"
              >
                <img
                  src={baseUrl + img.url}
                  className="w-full h-[200px] object-contain rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div className="flex flex-col gap-2.5 items-start w-full lg:w-1/3 ml-2.5 h-full">
        <p className="text-4xl text-gray-700">{item.title}</p>
        <div>
          {item.finalPrice ? (
            <div className="w-full flex items-center gap-4">
              <p className="text-3xl text-gray-600">{item.finalPrice} $</p>
              <p className="text-2xl text-gray-400 line-through">
                {item.price} $
              </p>
            </div>
          ) : (
            <p className="text-3xl text-gray-600">{item.price} $</p>
          )}
        </div>
        <p className="text-2xl text-gray-600">{item.description}</p>
        <p className="text-gray-400">
          Provided by : <p className="text-2xl text-gray-600">" {item.company.name} "</p>
        </p>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <AddToWishlist productId={item.documentId} />
        <button className="bg-black text-white rounded-2xl w-full py-2.5 flex items-center gap-8 justify-center cursor-pointer">
          <BsCart4 />
        </button>
      </div>
    </div>
  );
}
