import { baseUrl } from "../../../../shared/baseUrl";

export default function DashboardIntro({ ownerCompany, user }) {
  return (
    <div className="flex items-center gap-5 lg:gap-8">
      <img
        className="w-[100px] h-[100px] rounded-[50%]"
        src={baseUrl + ownerCompany?.logo.url}
      />
      <div>
        <h1 className="text-gray-700 text-4xl font-bold">
          Hello, {user?.username}
        </h1>
        <h2 className="text-gray-700 text-2xl font-bold">
          {ownerCompany?.name}
        </h2>
      </div>
    </div>
  );
}
