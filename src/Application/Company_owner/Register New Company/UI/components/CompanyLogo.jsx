export default function CompanyLogo({ setFieldValue, touched , errors }) {
  return (
    <div className="flex flex-col gap-2.5 relative">
      <label className="text-gray-600 text-[14px]" htmlFor="logo">
        Company logo
      </label>
      <input
        className="w-full border rounded-2xl p-2"
        name="logo"
        accept="image/*"
        onChange={(e) => setFieldValue("logo", e.currentTarget.files[0])}
        type="file"
      />
      {touched.logo && errors.logo && (
        <div className="text-red-500 text-sm">{errors.logo}</div>
      )}
    </div>
  );
}
