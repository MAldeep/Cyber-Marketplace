import { ErrorMessage, Field } from "formik";

export default function ProductInStock({ touched, errors }) {
  return (
    <div className="flex gap-2.5 relative items-center py-3">
      <label className="text-gray-600 text-sm" htmlFor="inStock">
        In Stock :
      </label>
      <Field
        type="checkbox"
        className={`w-4 h-4 accent-blue-500
                                    ${
                                      touched.inStock
                                        ? errors.inStock
                                          ? "border-2 border-red-500"
                                          : "border-2 border-green-500"
                                        : ""
                                    }
                                    `}
        name="inStock"
      />
      <ErrorMessage name="inStock">
        {(msg) => (
          <div className="absolute top-full left-0 text-red-400 text-sm">
            {msg}
          </div>
        )}
      </ErrorMessage>
    </div>
  );
}
