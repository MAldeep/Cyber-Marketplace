import { Form, Formik } from "formik";
import initialValues from "../../hooks/useInitialValues";
import validationSchema from "../../hooks/useValidate";
import handleSubmit from "../../hooks/useSubmitHandler";
import { useNavigate } from "react-router-dom";
import UserNameField from "./UserNameField";
import EmailField from "./EmailField";
import PhoneNumberField from "./PhoneNumberField";
import PasswordField from "./PasswordField";
import ConfirmPassword from "./ConfirmPassword";
import SubmitBtn from "./SubmitBtn";

export default function RegisterForm() {
  const navigate = useNavigate();
  return (
    <div className="w-1/2">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values, actions) => handleSubmit(values, actions, navigate)}
      >
        {
          ({ touched, errors, isValid, dirty })=>(
          <Form  className="flex flex-col gap-5 w-full rounded-2xl shadow-2xl p-14 bg-gray-100">
          <UserNameField touched={touched} errors={errors}/>
          <EmailField touched={touched} errors={errors}/>
          <PhoneNumberField touched={touched} errors={errors}/>
          <PasswordField touched={touched} errors={errors}/>
          <ConfirmPassword touched={touched} errors={errors}/>
          <SubmitBtn isValid={isValid} dirty={dirty}/>
        </Form>
          )
        }
      </Formik>
    </div>
  );
}
