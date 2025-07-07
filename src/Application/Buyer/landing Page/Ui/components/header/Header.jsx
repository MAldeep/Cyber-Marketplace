import SearchField from "./SearchField";
import HeaderBtns from "./HeaderBtns";
import useLogo from "../../../hooks/useLogo";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Header() {
  const { logo } = useLogo();
  return (
    <header className="w-full bg-white py-[24px] lg:py-[16px] px-[16px] lg:px-[160px] flex justify-between items-center shadow-2xl">
      <Link to={"/"}>
        <img src={logo} />
      </Link>
      <SearchField />
      <HeaderBtns />
      <RxHamburgerMenu className="flex lg:hidden text-2xl" />
    </header>
  );
}
