export default function CompanySelectionCard({name , image , des , action}) {
  return (
    <div className="bg-gray-200 w-full lg:w-[30%] flex flex-col justify-between items-center px-[20px] py-[30px] rounded-2xl shadow-2xl hover:shadow-none transition-all hover:bg-gray-100 gap-2">
      <img src={image} className="rounded-2xl object-cover w-full h-[300px]"/>
      <h1 className="text-gray-700 font-bold text-3xl">{name}</h1>
      <p className="text-2xl text-gray-500">{des}</p>
      <button
      className="w-full bg-black text-white rounded-2xl py-4 cursor-pointer hover:bg-white hover:text-black text-2xl"
      onClick={action}
      >Select</button>
    </div>
  )
}
