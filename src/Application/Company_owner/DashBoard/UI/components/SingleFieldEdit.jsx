import { MdModeEdit } from "react-icons/md";

export default function SingleFieldEdit({ setOpenField , field, label ,segment}) {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <label className="text-gray-500 text-sm">{label}</label>
        <h1 className="text-gray-800 text-4xl font-bold">{segment}</h1>
      </div>
      <button
        onClick={() => setOpenField(`${field}`)}
        className="flex justify-center items-center gap-1.5 bg-gray-700 px-4 py-2 rounded-2xl text-white"
      >
        {/* Edit */}
        <MdModeEdit />
      </button>
    </div>
  );
}
