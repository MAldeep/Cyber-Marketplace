import { Link } from "react-router-dom";
import useAuthorization from "../../hooks/useAuthorization";
import useLogo from "../../../../Buyer/landing Page/hooks/useLogo";
import ShowTheModal from "../components/ShowTheModal";
import DashboardProducts from "../components/DashboardProducts";
import { baseUrl } from "../../../../shared/baseUrl";

export default function DashBoard() {
  const { logo } = useLogo();
  const { authorized, user, company } = useAuthorization();
  const ownerCompany = Array.isArray(company) ? company[0] : company;
  const companyId = ownerCompany?.documentId;
  if (authorized === null) return <div>Loading ...</div>;
  if (!authorized) return null;
  console.log(companyId);

  return (
    <div className="relative h-full bg-gray-50">
      <header className="w-full bg-white py-[24px] lg:py-[16px] px-[16px] lg:px-[160px] flex justify-center items-center shadow-2xs">
        <Link
          to={"/"}
          className="flex gap-4 text-[10px] items-center text-gray-400"
        >
          powered by :
          <img src={logo} />
        </Link>
      </header>
      <main className="w-full px-[20px] lg:px-[160px] py-[30px] flex flex-col gap-6">
        <div className="flex items-center gap-8">
          <img
            className="w-[100px] h-[100px] rounded-[50%]"
            src={baseUrl + ownerCompany.logo.url}
          />
        <h1 className="text-gray-700 text-4xl font-bold">Hello, {user.username}</h1>
        </div>
        <p className="text-gray-400 text-2xl">Here is your workplace you can handle all your company procedures in total ease</p>
        <section className="w-full flex flex-col gap-2.5 bg-gray-200 px-3 py-4 rounded-2xl shadow-2xl">
          <h2 className="text-gray-500 text-4xl font-bold pl-5">Products :</h2>
          <DashboardProducts companyId={companyId} />
          <ShowTheModal ownerCompany={ownerCompany} />
        </section>
      </main>
    </div>
  );
}
