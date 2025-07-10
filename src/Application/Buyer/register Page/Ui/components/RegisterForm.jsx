import { Form, Formik } from "formik";
import initialValues from "../../hooks/useInitialValues";
import validationSchema from "../../hooks/useValidate";
import handleSubmit from "../../hooks/useSubmitHandler";
import { Link, useNavigate } from "react-router-dom";
import UserNameField from "./UserNameField";
import EmailField from "./EmailField";
import PhoneNumberField from "./PhoneNumberField";
import PasswordField from "./PasswordField";
import ConfirmPassword from "./ConfirmPassword";
import SubmitBtn from "./SubmitBtn";

export default function RegisterForm() {
  const navigate = useNavigate();
  return (
    <div className="w-full lg:w-1/2">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values, actions) => handleSubmit(values, actions, navigate)}
      >
        {({ touched, errors, isValid, dirty }) => (
          <Form className="flex flex-col gap-5 w-full rounded-2xl shadow-2xl p-14 bg-gray-100">
            <h1 className="text-3xl font-[700]">Register Now</h1>
            <UserNameField touched={touched} errors={errors} />
            <EmailField touched={touched} errors={errors} />
            <PhoneNumberField touched={touched} errors={errors} />
            <PasswordField touched={touched} errors={errors} />
            <ConfirmPassword touched={touched} errors={errors} />
            <SubmitBtn isValid={isValid} dirty={dirty} />
            <Link to={"/login"} className="text-[rgba(0,0,0,0.5)]">
              already Registered ? <span className="underline">Sign In</span>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}
