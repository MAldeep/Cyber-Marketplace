import useLogo from "../../../landing Page/hooks/useLogo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSideBar } from "../../context/SideBarContext";
import SearchField from "../../../landing Page/Ui/components/header/SearchField";
import HeaderIcons from "./HeaderIcons";
import UserLogStatus from "./UserLogStatus";
import { Link } from "react-router-dom";

export default function ExploreHeader() {
  const { logo } = useLogo();
  const { toggleSidebar } = useSideBar();

  return (
    <header className="w-full flex justify-between items-center px-[16px] py-[32px] lg:px-[160px] lg:py-[20px] bg-white border border-t-0 border-x-0 border-b-[#B5B5B5]">
      <Link to={"/explore"}>
        <img src={logo} />
      </Link>
      <GiHamburgerMenu
        onClick={toggleSidebar}
        className="flex lg:hidden text-black text-2xl"
      />
      <SearchField />
      <div className=" hidden lg:flex gap-5">
        <HeaderIcons />
        <UserLogStatus />
      </div>
    </header>
  );
}
