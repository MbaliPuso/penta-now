import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SellCar from "./pages/SellCar";
import BuyCar from "./pages/BuyCar";
import PentaApproved from "./pages/PentaApproved";
import OurLocations from "./pages/OurLocations";
import ContactUs from "./pages/ContactUs";
import ViewVehicle from "./pages/ViewVehicle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sell-my-car" element={<SellCar />} />
          <Route path="/buy-a-car" element={<BuyCar />} />
          <Route path="/penta-approved" element={<PentaApproved />} />
          <Route path="/our-locations" element={<OurLocations />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/view-vehicle" element={<ViewVehicle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
