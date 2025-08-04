import { IoCloseSharp } from "react-icons/io5";
import { useSideBar } from "../../context/SideBarContext";
import HeaderIcons from "./HeaderIcons";

export default function SideMenuExplore() {
  const { isOpen } = useSideBar();
  const { closeSidebar } = useSideBar();
  return (
    <div
      className={`w-full h-[100dvh] bg-white text-2xl text-black flex flex-col lg:hidden justify-center gap-5 px-[20px] absolute top-0 right-0
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    transition-all transform `}
    >
      <IoCloseSharp onClick={closeSidebar} />
        <HeaderIcons/>
    </div>
  );
}
