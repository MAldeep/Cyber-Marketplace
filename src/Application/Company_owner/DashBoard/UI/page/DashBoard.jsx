import useAuthorization from "../../hooks/useAuthorization";
import useLogo from "../../../../Buyer/landing Page/hooks/useLogo";
import ShowTheModal from "../components/ShowTheModal";
import DashboardProducts from "../components/DashboardProducts";
import DashboardIntro from "../components/DashboardIntro";
import DashboardHeader from "../components/DashboardHeader";
import SwitchCompanies from "../components/SwitchCompanies";
import LogoutDashboard from "../components/LogoutDashboard";

export default function DashBoard() {
  const { logo } = useLogo();
  const { authorized, user, company, allCompanies } = useAuthorization();
  const ownerCompany = Array.isArray(company) ? company[0] : company;
  const companyId = ownerCompany?.documentId;
  if (authorized === null) return <div>Loading ...</div>;
  if (!authorized) return null;

  return (
    <div className="relative min-h-[100dvh] bg-gray-50">
      <DashboardHeader logo={logo} />
      <main className="w-full px-[20px] lg:px-[160px] py-[30px] flex flex-col gap-6">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            <DashboardIntro ownerCompany={ownerCompany} user={user} />
            <p className="text-gray-400 text-2xl">
              Here is your workplace you can handle all your company procedures
              in total ease
            </p>
          </div>
          {allCompanies && <SwitchCompanies />}
        </div>
        <section className="w-full flex flex-col gap-2.5 bg-gray-200 px-3 py-4 rounded-2xl shadow-2xl">
          <h2 className="text-gray-500 text-4xl font-bold pl-5">Products :</h2>
          <DashboardProducts companyId={companyId} />
          <ShowTheModal ownerCompany={ownerCompany} />
        </section>
        {/* managing employees is now postponed */}
        {/* <section className="w-full flex flex-col gap-2.5 bg-gray-200 px-3 py-4 rounded-2xl shadow-2xl">
          <h2 className="text-gray-500 text-4xl font-bold pl-5">Employees :</h2>
        </section> */}
        <div className="w-full flex justify-end">
          <LogoutDashboard />
        </div>
      </main>
    </div>
  );
}
