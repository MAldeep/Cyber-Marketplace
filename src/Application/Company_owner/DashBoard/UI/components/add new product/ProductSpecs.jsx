import { ErrorMessage, Field } from "formik";

export default function ProductSpecs({ touched, errors }) {
  return (
    <div className="flex flex-col gap-2.5 relative">
      <label className="text-gray-600 text-[14px]" htmlFor="discountPercentage">
        Product Specifications
      </label>
      <Field
        as="textarea"
        className={`w-full p-2 border border-gray-400 
                                rounded-2xl pl-3
                                ${
                                  touched.specifications
                                    ? errors.specifications
                                      ? "border-2 border-red-500"
                                      : "border-2 border-green-500"
                                    : ""
                                }
                                `}
        name="specifications"
        placeholder="Provide your product specifications e.g. {'color':'red'}"
      />
      <ErrorMessage name="specifications">
        {(msg) => (
          <div className="absolute top-full left-0 text-red-400 text-sm">
            {msg}
          </div>
        )}
      </ErrorMessage>
    </div>
  );
}
