import { Link } from "react-router-dom";
import useLogo from "../../../landing Page/hooks/useLogo";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const { logo } = useLogo();
  return (
    <div className="w-full h-[100dvh] bg-gray-100 flex flex-col justify-between items-center pb-30">
      <header className="w-full bg-white py-[24px] lg:py-[16px] px-[16px] lg:px-[160px] flex justify-center items-center">
        <Link to={"/"}>
          <img src={logo} />
        </Link>
      </header>
      <LoginForm />
    </div>
  );
}
