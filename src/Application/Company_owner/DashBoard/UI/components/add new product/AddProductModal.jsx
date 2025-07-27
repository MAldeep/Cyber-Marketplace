import { Form, Formik } from "formik";
import useCreateProduct from "../../../hooks/useCreateProduct";
import initialValues from "../../../hooks/useInitialValues";
import validationSchema from "../../../hooks/useValidateNewProduct";
import ProductTitle from "./ProductTitle";
import ProductDes from "./ProductDes";
import ProductPrice from "./ProductPrice";
import ProductDiscount from "./ProductDiscount";
import ProductInStock from "./ProductInStock";
import ProductSpecs from "./ProductSpecs";
import ProductImages from "./ProductImages";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function AddProductModal({ token, companyId, onClose }) {
  const { handleSubmit } = useCreateProduct();

  // submition function
  const onFormSubmit = async (values, { resetForm }) => {
    let specsObj = {};
    try {
      specsObj = values.specifications ? JSON.parse(values.specifications) : {};
    } catch (err) {
      alert("Invalid JSON in specifications field.");
      console.log(err);
      return;
    }
    const created = await handleSubmit({
      token,
      title: values.title,
      description: values.description,
      price: Number(values.price),
      discountPercentage: Number(values.discountPercentage),
      inStock: values.inStock,
      specifications: specsObj,
      images: values.images,
      companyId,
    });
    if (created) {
      toast.success("Product added successfully");
      resetForm();
      if (onClose) onClose();
    } else {
      toast.error("Failed to create product");
    } 
  };
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.4)] z-50 p-1 flex justify-center items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onFormSubmit}
      >
        {({
          setFieldValue,
          values,
          touched,
          errors,
          isValid,
          dirty,
          isSubmitting,
        }) => (
          <Form className="flex flex-col gap-1.5 bg-white w-full h-10/12 lg:h-full lg:w-1/2 rounded-2xl overflow-scroll lg:overflow-hidden p-3">
            <h1 className="text-3xl font-bold">Add New Product</h1>
            <ProductTitle touched={touched} errors={errors} />
            <ProductDes touched={touched} errors={errors} />
            <ProductPrice touched={touched} errors={errors} />
            <ProductDiscount touched={touched} errors={errors} />
            <ProductInStock touched={touched} errors={errors} />
            <ProductSpecs touched={touched} errors={errors} />
            <ProductImages setFieldValue={setFieldValue} values={values} />
            <SubmitBtn
              isValid={isValid}
              dirty={dirty}
              isSubmitting={isSubmitting}
            />
            <button
              className="bg-black text-white rounded-2xl py-2 cursor-pointer"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
