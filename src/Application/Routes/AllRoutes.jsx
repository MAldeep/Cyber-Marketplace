import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Buyer/landing Page/Ui/page/LandingPage";
import RegisterPage from "../Buyer/register Page/Ui/page/registerPage";
import LoginPage from "../Buyer/Login Page/Ui/page/LoginPage";
import ExplorePage from "../Buyer/explore Page/Ui/page/ExplorePage";
import NewCompany from "../Company_owner/Register New Company/UI/page/NewCompany";
import DashBoard from "../Company_owner/DashBoard/UI/page/DashBoard";
import SelectCompany from "../Company_owner/DashBoard/UI/components/SelectCompany";
import DashboardSingleProduct from "../Company_owner/DashBoard/UI/components/DashboardSingleProduct";
import Profile from "../Buyer/Profile/Ui/page/Profile";

export default function AllRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Buyer Routes */}
          <Route path="/explore" element={<ExplorePage/>} />
          <Route path="/wishList" element={<h1>Wishlist Page</h1>} />
          <Route path="/:productId" element={<h1>Single Product Page-buyer</h1>} />
          <Route path="/cart" element={<h1>Cart Page</h1>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/checkout" element={<h1>Checkout Page</h1>} />
          <Route path="/tracking" element={<h1>Tracking Orders</h1>} />
          {/* Compnay Owner Routes */}
          <Route
            path="/creatingCompanyProfile"
            element={<NewCompany/>}
          />
          <Route path="/companyProfile" element={<h1>Single company profile</h1>}/>
          <Route path="/dashboard" element={<DashBoard/>} />
          <Route path="/dashboard/:productId" element={<DashboardSingleProduct/>}/>
          <Route path="/selectCompany" element={<SelectCompany/>}/>
          <Route path="/allEmployees" element={<h1>All Employees Page</h1>} />
          <Route
            path="/addingNewEmployee"
            element={<h1>Add New Employee Page</h1>}
          />
          <Route
            path="/allCompanyProducts"
            element={<h1>All Company Products Page</h1>}
          />
          <Route
            path="/addNewProduct"
            element={<h1>Add New Company Product Page</h1>}
          />
          <Route path="/analysis" element={<h1>Analysis Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
