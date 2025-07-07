import SearchField from "./SearchField";
import HeaderBtns from "./HeaderBtns";
import useLogo from "../../../hooks/useLogo";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const { logo } = useLogo();
  return (
    <header className="w-full bg-white py-[24px] lg:py-[16px] px-[16px] lg:px-[160px] flex justify-between items-center border-b-[#B5B5B5]">
      <img src={logo} />
      <SearchField />
      <HeaderBtns />
      <RxHamburgerMenu className="flex lg:hidden text-2xl" />
    </header>
  );
}
