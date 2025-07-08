import { ErrorMessage, Field } from "formik";

export default function UserNameField({touched , errors}) {
  return (
    <div className="flex flex-col gap-2.5 relative">
      <label className="text-gray-600 text-[14px]" htmlFor="userName">
        First Name
      </label>
      <Field
        className={`w-full p-2 border border-gray-400 
                    rounded-2xl pl-3
                    ${
                      touched.userName
                        ? errors.userName
                          ? "border-2 border-red-500"
                          : "border-2 border-green-500"
                        : ""
                    }
                    `}
        placeholder="Enter Your First Name"
        id="userName"
        name="userName"
      />
      <ErrorMessage name="userName">
        {(msg) => (
          <div className="absolute top-full left-0 text-red-400 text-sm">
            {msg}
          </div>
        )}
      </ErrorMessage>
    </div>
  );
}
