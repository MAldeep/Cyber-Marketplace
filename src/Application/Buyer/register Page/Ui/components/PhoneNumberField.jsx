import { Field } from "formik";

export default function PhoneNumberField({touched , errors}) {
  return (
    <div className="flex flex-col gap-2.5">
      <label className="text-gray-600 text-[14px]" htmlFor="phoneNumber">
        Phone Number
      </label>
      <Field
        className={`w-full p-2 border border-gray-400 
                    rounded-2xl pl-3
                    ${
                      touched.phoneNumber
                        ? errors.phoneNumber
                          ? "border-2 border-red-500"
                          : "border-2 border-green-500"
                        : ""
                    }
                    `}
        placeholder="Enter Your Phone Number"
        id="phoneNumber"
        name="phoneNumber"
        type="text"
      />
    </div>
  );
}
