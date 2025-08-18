import useWishlist from "../../../explore Page/hooks/useWishlist"

export default function Wishlist() {
  const {wishlist} = useWishlist();
  console.log(wishlist);
  return (
    <div>
      {
        wishlist?.map((p)=>(
          <p key={p.id}>{p.title}</p>
        ))
      }
    </div>
  )
}
