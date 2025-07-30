import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../../../shared/baseUrl";
import useAuthorization from "../../hooks/useAuthorization";
import { selectCompany } from "../../hooks/useSelectCompay";
import useLogo from "../../../../Buyer/landing Page/hooks/useLogo";
import CompanySelectionCard from "./CompanySelectionCard";

export default function SelectCompany() {
  const {logo} = useLogo();
  const { allCompanies } = useAuthorization();
  const navigate = useNavigate();
  const handleSelect = async (id) => {
    const { selectedCompany } = await selectCompany(id);
    if (selectedCompany) {
      navigate("/dashboard");
    } else {
      console.log("company is not found");
    }
  };
  return (
    <div className="w-full bg-gray-50 min-h-[100dvh] flex flex-col justify-between items-center gap-8 pb-10">
      <header className="w-full bg-white py-[24px] lg:py-[16px] px-[16px] lg:px-[160px] flex justify-center items-center shadow-2xs">
        <Link to={"/"}>
          <img src={logo} />
        </Link>
      </header>
      <h1 className="font-bold text-3xl text-gray-700">Log in as : </h1>
      <div className="w-full flex flex-col lg:flex-row gap-12 px-[20px] lg:px-[100px] flex-wrap justify-center">
        {allCompanies &&
          allCompanies.map((el) => (
            <CompanySelectionCard
              key={el.documentId}
              action={() => handleSelect(el.documentId)}
              image={baseUrl + el.logo.url}
              name={el.name}
              des={el.description}
            />
          ))}
      </div>
    </div>
  );
}
