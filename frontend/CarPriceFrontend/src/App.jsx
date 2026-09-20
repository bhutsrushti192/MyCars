// import { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     brand: "",
//     model: "",
//     year: "",
//     mileage: "",
//     engine: "",
//     horsepower: "",
//     fuelType: "",
//     transmission: "",
//     ownerType: "",
//     color: "",
//     city: "",
//     kmsDriven: "",
//     insuranceValid: "",
//     serviceHistory: "",
//     accidents: "",
//     taxPaid: "",
//     doors: "",
//     seats: "",
//     registrationAge: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Form Data:", formData);

//     alert("Form submitted successfully!");
//   };

//   return (
//     <div>
//       <h1>Car Price Prediction</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           name="brand"
//           placeholder="Brand"
//           value={formData.brand}
//           onChange={handleChange}
//         />

//         <input
//           name="model"
//           placeholder="Model"
//           value={formData.model}
//           onChange={handleChange}
//         />

//         <input
//           name="year"
//           type="number"
//           placeholder="Year"
//           value={formData.year}
//           onChange={handleChange}
//         />

//         <input
//           name="mileage"
//           type="number"
//           placeholder="Mileage (kmpl)"
//           value={formData.mileage}
//           onChange={handleChange}
//         />

//         <input
//           name="engine"
//           type="number"
//           placeholder="Engine CC"
//           value={formData.engine}
//           onChange={handleChange}
//         />

//         <input
//           name="horsepower"
//           type="number"
//           placeholder="Horsepower"
//           value={formData.horsepower}
//           onChange={handleChange}
//         />

//         <select
//           name="fuelType"
//           value={formData.fuelType}
//           onChange={handleChange}
//         >
//           <option value="">Select Fuel Type</option>
//           <option value="Petrol">Petrol</option>
//           <option value="Diesel">Diesel</option>
//           <option value="CNG">CNG</option>
//           <option value="Electric">Electric</option>
//         </select>

//         <select
//           name="transmission"
//           value={formData.transmission}
//           onChange={handleChange}
//         >
//           <option value="">Select Transmission</option>
//           <option value="Manual">Manual</option>
//           <option value="Automatic">Automatic</option>
//         </select>

//         <input
//           name="ownerType"
//           placeholder="Owner Type"
//           value={formData.ownerType}
//           onChange={handleChange}
//         />

//         <input
//           name="color"
//           placeholder="Color"
//           value={formData.color}
//           onChange={handleChange}
//         />

//         <input
//           name="city"
//           placeholder="City"
//           value={formData.city}
//           onChange={handleChange}
//         />

//         <input
//           name="kmsDriven"
//           type="number"
//           placeholder="Kms Driven"
//           value={formData.kmsDriven}
//           onChange={handleChange}
//         />

//         <input
//           name="insuranceValid"
//           placeholder="Insurance Valid"
//           value={formData.insuranceValid}
//           onChange={handleChange}
//         />

//         <input
//           name="serviceHistory"
//           placeholder="Service History"
//           value={formData.serviceHistory}
//           onChange={handleChange}
//         />

//         <input
//           name="accidents"
//           type="number"
//           placeholder="Accidents"
//           value={formData.accidents}
//           onChange={handleChange}
//         />

//         <input
//           name="taxPaid"
//           placeholder="Tax Paid"
//           value={formData.taxPaid}
//           onChange={handleChange}
//         />

//         <input
//           name="doors"
//           type="number"
//           placeholder="Number of Doors"
//           value={formData.doors}
//           onChange={handleChange}
//         />

//         <input
//           name="seats"
//           type="number"
//           placeholder="Seats"
//           value={formData.seats}
//           onChange={handleChange}
//         />

//         <input
//           name="registrationAge"
//           type="number"
//           placeholder="Registration Age"
//           value={formData.registrationAge}
//           onChange={handleChange}
//         />

//         <button type="submit">Predict Price</button>
//       </form>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./pages/Home";
import BuyCars from "./pages/BuyCars";
import SellCar from "./pages/SellCar";
import Valuation from "./pages/Valuation";
import HowItWorks from "./pages/HowItWorks";
import CarDetail from "./pages/CarDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/buy"
            element={<BuyCars />}
          />
          <Route path="/buy/:id" element={<CarDetail />} />

          <Route
            path="/sell"
            element={<SellCar />}
          />

          <Route
            path="/valuation"
            element={<Valuation />}
          />

          <Route
            path="/how-it-works"
            element={<HowItWorks />}
          />

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;