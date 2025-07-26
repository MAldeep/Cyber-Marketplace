import { baseUrl } from "../../../../shared/baseUrl";
import useFetchingProducts from "../../hooks/useFetchingProducts";

export default function DashboardProducts({companyId}) {
  const { products } = useFetchingProducts(companyId);
  return (
    <div className="w-full py-5 bg-gray-400 flex flex-col lg:flex-row justify-center items-center gap-4 px-3 rounded-2xl">
      {
        products.length > 0 ? products.map((p)=> (
          <div key={p.id} className="w-full lg:w-1/3 bg-gray-50 p-3 rounded-2xl flex flex-col gap-2.5 flex-wrap">
            <img src={baseUrl+p.images[0].url} className="w-full rounded-2xl"/>
            <h1>{p.title}</h1>
            <p>{p.description}</p>
            <p>{p.price}</p>
          </div>
        )) : 
        <p>No products yet</p>
      }
    </div>
  )
}
