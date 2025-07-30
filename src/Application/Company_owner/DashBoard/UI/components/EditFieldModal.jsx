import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function EditFieldModal({
  isOpen,
  fieldName,
  currentValue,
  onClose,
  onSubmit,
}) {
  if (!isOpen || !fieldName) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit {fieldName}</h2>

        <Formik
          initialValues={{ [fieldName]: currentValue || "" }}
          validationSchema={Yup.object({
            [fieldName]: Yup.string().required(`${fieldName} is required`),
          })}
          onSubmit={(values) => {
            onSubmit(values[fieldName]);
          }}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              <Field
                name={fieldName}
                className="w-full border border-gray-300 px-3 py-2 rounded"
                placeholder="Edit here ..."
              />
              {errors[fieldName] && touched[fieldName] && (
                <div className="text-red-500 text-sm">{errors[fieldName]}</div>
              )}

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
