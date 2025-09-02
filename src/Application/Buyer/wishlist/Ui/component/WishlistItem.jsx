import useWishlist from "../../../explore Page/hooks/useWishlist";
import WishlistItemCard from "./WishlistItemCard";

export default function WishlistItem() {
  const { wishlist } = useWishlist();
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full flex flex-col gap-5">
        {Array.isArray(wishlist) && wishlist.length >= 1 ? (
          wishlist.map((i) => <WishlistItemCard item={i} key={i.documentId} />)
        ) : (
          <p>no wishlist items found</p>
        )}
      </div>
    </div>
  );
}
