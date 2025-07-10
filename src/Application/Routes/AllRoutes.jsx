import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Buyer/landing Page/Ui/page/LandingPage";
import RegisterPage from "../Buyer/register Page/Ui/page/registerPage";
import LoginForm from "../Buyer/Login Page/Ui/components/LoginForm";
import LoginPage from "../Buyer/Login Page/Ui/page/LoginPage";

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
          <Route path="/explore" element={<h1>All Products Page</h1>} />
          <Route path="/wishList" element={<h1>Wishlist Page</h1>} />
          <Route path="/:productId" element={<h1>Single Product Page</h1>} />
          <Route path="/cart" element={<h1>Cart Page</h1>} />
          <Route path="/profile" element={<h1>Settings Page</h1>} />
          <Route path="/checkout" element={<h1>Checkout Page</h1>} />
          <Route path="/tracking" element={<h1>Tracking Orders</h1>} />
          {/* Compnay Owner Routes */}
          <Route
            path="/creatingCompanyProfile"
            element={<h1>Creating company Profile</h1>}
          />
          <Route path="/dashboard" element={<h1>Dashboard Page</h1>} />
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
