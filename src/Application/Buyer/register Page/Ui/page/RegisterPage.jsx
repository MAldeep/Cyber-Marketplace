import RegisterForm from "../components/RegisterForm";
import SwiperRegister from "../components/SwiperRegister";

export default function RegisterPage() {
  return (
    <div className="w-full min-h-[100dvh] lg:h-[100dvh] bg-gray-100 flex flex-col-reverse lg:flex-row justify-center items-center gap-3 px-[16px] lg:pl-[20px]">
      <RegisterForm />
      <SwiperRegister />
    </div>
  );
}
