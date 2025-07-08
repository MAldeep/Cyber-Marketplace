import RegisterForm from "../components/RegisterForm";
import SwiperRegister from "../components/SwiperRegister";

export default function RegisterPage() {
  return (
    <div className="w-full h-[100dvh] bg-gray-100 flex justify-center items-center gap-3 pl-[20px]">
      <RegisterForm/>
      <SwiperRegister/>
    </div>
  )
}
