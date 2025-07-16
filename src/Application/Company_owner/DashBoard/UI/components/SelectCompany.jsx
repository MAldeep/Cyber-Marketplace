import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../../shared/baseUrl";
import useAuthorization from "../../hooks/useAuthorization";
import { selectCompany } from "../../hooks/useSelectCompay";

export default function SelectCompany() {
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
    <div>
      <h1>Log in as : </h1>
      <div>
        {allCompanies &&
          allCompanies.map((el) => (
            <img
              key={el.documentId}
              onClick={() => handleSelect(el.id)}
              src={baseUrl + el.logo.url}
            />
          ))}
      </div>
    </div>
  );
}
