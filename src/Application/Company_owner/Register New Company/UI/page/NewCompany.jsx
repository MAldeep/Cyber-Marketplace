import { Form, Formik } from "formik";
import { initialValues } from "../../hooks/useInitialValues";
import { companySchema } from "../../hooks/useCompanyValidate";
import CompanyName from "../components/CompanyName";
import CompanyDes from "../components/CompanyDes";
import CompanyLogo from "../components/CompanyLogo";
import CompanySubmit from "../components/CompanySubmit";
import { useSubmitCompanyForm } from "../../hooks/useCompanySubmit";

export default function NewCompany() {
  const {handleSubmit} = useSubmitCompanyForm();
  return (
    <div className="w-full h-[100dvh] px-[20px] flex justify-center items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={companySchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValid, dirty, isSubmitting, setFieldValue }) => (
          <Form className="flex flex-col gap-5 w-full rounded-2xl shadow-2xl p-14 bg-gray-100">
            <h1 className="text-3xl font-[700]">Create Your Company</h1>
            <CompanyName touched={touched} errors={errors} />
            <CompanyDes touched={touched} errors={errors} />
            <CompanyLogo touched={touched} errors={errors} setFieldValue={setFieldValue}/>
            <CompanySubmit isValid={isValid} dirty={dirty} isSubmitting={isSubmitting}/>
          </Form>
        )}
      </Formik>
    </div>
  );
}
