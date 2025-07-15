import { baseUrl } from "../../../../shared/baseUrl";
import useAuth from "../../hooks/useAuthorization"

export default function DashBoard() {
  const {authorized , user , company } = useAuth();
  if(authorized === null) return <div>Loading ...</div>
  if(!authorized) return null;
  console.log(company[0].logo);
  return (
    <div>
      DashBoard 
      welcome {user.username}
      <img src={baseUrl+company[0].logo.url}/>
    </div>
  )
}
