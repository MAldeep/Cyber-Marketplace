import { Link } from "react-router-dom";
import { baseUrl } from "../../../../../../shared/baseUrl";
import useHeroImages from "../../../../hooks/useHeroImages";

export default function AllProductsCard() {
  const { AllProductsImage } = useHeroImages();
  if (!AllProductsImage || !AllProductsImage.image) {
    return console.log("loading");
  }
  return (
    <div className="w-full h-[80dvh] rounded-4xl sticky top-7 shadow-2xl">
      <img
        src={baseUrl + AllProductsImage.image.url}
        className="h-full w-full object-cover rounded-4xl absolute"
      />
      <div className="w-full h-full bg-[rgba(0,0,0,0.6)] absolute flex justify-center items-center flex-col gap-5 px-7 lg:px-40 rounded-4xl">
        <h1 className="text-4xl lg:text-5xl font-[600] text-white">
          Where Smart Buyers and Great Businesses Meet.
        </h1>

        <p className="text-sm lg:text-2xl text-white">
          Discover a smarter way to connect. Our platform makes it easy for
          buyers and company owners to find each other, start conversations, and
          build lasting partnerships. Whether you're looking for the perfect
          product, service, or supplier — or you're a business ready to grow
          your reach — this is the place where opportunity meets action.
        </p>
        <Link className="bg-white text-black px-[30px] py-[8px] rounded-2xl w-fit text-2xl">
          Read More
        </Link>
      </div>
    </div>
  );
}
