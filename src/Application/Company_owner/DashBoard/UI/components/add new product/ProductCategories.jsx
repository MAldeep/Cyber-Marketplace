import useCategories from "../../../hooks/useCategories";

export default function ProductCategories({ field, form }) {
  const { categories, loading, error } = useCategories();
  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories</p>;
  return (
    <div>
      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        {...field}
        onChange={(e) => form.setFieldValue("category", e.target.value)}
        className="border rounded-2xl px-2 py-1 w-full"
      >
        <option value="">Select category</option>
        {categories?.map((cat) => (
          <option key={cat.id} value={cat.documentId} className="text-black">
            {cat?.name}
          </option>
        ))}
      </select>
      {form.touched.category && form.errors.category && (
        <div className="text-red-500 text-sm">{form.errors.category}</div>
      )}
    </div>
  );
}
