import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import EmailField from "../../../register Page/Ui/components/EmailField";
import PasswordField from "../../../register Page/Ui/components/PasswordField";
import handleLoginUser from "../../hooks/useLoginUser";
import SubmitBtn from "../../../register Page/Ui/components/SubmitBtn";
import validationSchema from "../../hooks/useValidationLogin";

export default function LoginForm() {
  const navigate = useNavigate();
  return (
    <div className="w-full lg:w-1/2">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) =>
          handleLoginUser(values, actions, navigate)
        }
      >
        {({ touched, errors, isValid, dirty }) => (
          <Form className="flex flex-col gap-5 w-full rounded-2xl shadow-2xl p-14 bg-gray-100">
            <h1 className="text-3xl font-[700]">Login Now</h1>
            <EmailField touched={touched} errors={errors} />
            <PasswordField touched={touched} errors={errors} />
            <SubmitBtn isValid={isValid} dirty={dirty} />
          </Form>
        )}
      </Formik>
    </div>
  );
}
