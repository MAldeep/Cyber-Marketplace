import { Link } from "react-router-dom";
import useAuthorization from "../../hooks/useAuthorization";
import useLogo from "../../../../Buyer/landing Page/hooks/useLogo";
import ShowTheModal from "../components/ShowTheModal";
import DashboardProducts from "../components/DashboardProducts";

export default function DashBoard() {
  const { logo } = useLogo();
  const { authorized, user, company } = useAuthorization();
  const ownerCompany = Array.isArray(company) ? company[0] : company;
  const companyId = ownerCompany?.documentId;
  if (authorized === null) return <div>Loading ...</div>;
  if (!authorized) return null;
  console.log(companyId);

  return (
    <div className="relative h-full">
      <header className="w-full bg-white py-[24px] lg:py-[16px] px-[16px] lg:px-[160px] flex justify-center items-center shadow-2xs">
        <Link
          to={"/"}
          className="flex gap-4 text-[10px] items-center text-gray-400"
        >
          powered by :
          <img src={logo} />
        </Link>
      </header>
      <main className="w-full h-auto px-[20px] lg:px-[160px] py-[30px] flex flex-col gap-6">
        <h1>Hello {user.username}</h1>
        <section className="w-full flex flex-col gap-2.5">
          <ShowTheModal ownerCompany={ownerCompany} />
          <DashboardProducts companyId={companyId} />
        </section>
      </main>
    </div>
  );
}
