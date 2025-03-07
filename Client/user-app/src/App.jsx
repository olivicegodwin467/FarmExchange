import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Ussd_form from "./components/Ussd_form";
import CustomersData from "./components/CustomersData";
import Ussd_api from "./components/Ussd_api";
import AgriMarket from "./components/AgriMarket";
import Products from "./components/Products";
import Signup from "./components/Signup";
import ChatApp from "./components/ChatApp";
import NavBar from "./components/NavBar"; // Import Navbar
import "./index.css";
import Users from "./components/Users";
import About from "./components/About";
import Services from "./components/Services";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/market" element={<AgriMarket />} />
        <Route path="/chat" element={<ChatApp />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<CustomersData />} />
        <Route path="/ussd" element={<Ussd_form />} />
        <Route path="/ussd_api" element={<Ussd_api />} />
      </Routes>
    </>
  );
}

export default App;
