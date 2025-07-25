export default function ProductImages({ setFieldValue, values }) {
  return (
    <div className="flex flex-col gap-2.5 pb-1.5">
      <label className="text-gray-600 text-sm font-medium" htmlFor="images">
        Upload Images:
      </label>

      <input
        id="images"
        type="file"
        multiple
        accept="image/*"
        className="block w-full text-sm text-gray-500 
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
        onChange={(event) => {
          setFieldValue("images", Array.from(event.currentTarget.files));
        }}
      />

      {values.images.length > 0 && (
        <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
          {values.images.map((file, index) => (
            <li key={index} className="truncate">
              {file.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
