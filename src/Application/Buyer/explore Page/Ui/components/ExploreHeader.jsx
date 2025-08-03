import useLogo from "../../../landing Page/hooks/useLogo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSideBar } from "../../context/SideBarContext";
import SearchField from "../../../landing Page/Ui/components/header/SearchField";
import HeaderIcons from "./HeaderIcons";

export default function ExploreHeader() {
  const { logo } = useLogo();
  const { toggleSidebar } = useSideBar();
  return (
    <header className="w-full flex justify-between items-center px-[16px] py-[32px] lg:px-[160px] lg:py-[20px] bg-white">
      <img src={logo} />
      <GiHamburgerMenu
        onClick={toggleSidebar}
        className="flex lg:hidden text-black text-2xl"
      />
      <SearchField />
      <div className=" hidden lg:flex">
        <HeaderIcons/>
      </div>
    </header>
  );
}
