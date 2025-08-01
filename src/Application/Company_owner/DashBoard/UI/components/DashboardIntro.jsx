import { baseUrl } from "../../../../shared/baseUrl";

export default function DashboardIntro({ownerCompany , user}) {
  return (
    <div className="flex items-center gap-5 lg:gap-8">
      <img
        className="w-[100px] h-[100px] rounded-[50%]"
        src={baseUrl + ownerCompany?.logo.url}
      />
      <h1 className="text-gray-700 text-4xl font-bold">
        Hello, {user?.username}
      </h1>
    </div>
  );
}
