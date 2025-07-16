import { baseUrl } from "../../../../shared/baseUrl";
import useAuthorization from "../../hooks/useAuthorization";

export default function DashBoard() {
  const {authorized , user , company  } = useAuthorization();
  if(authorized === null) return <div>Loading ...</div>
  if(!authorized) return null;
  const owenerCompany = company[0] || company;
  return (
    <div>
      DashBoard 
      welcome {user.username}
      <img src={baseUrl+owenerCompany.logo.url}/>
    </div>
  )
}
