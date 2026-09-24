// import { useState } from "react";

// const initialData = {
//   Brand: "",
//   Model: "",
//   Year: "",
//   Mileage_kmpl: "",
//   Engine_CC: "",
//   Horsepower: "",
//   Fuel_Type: "",
//   Transmission: "",
//   Owner_Type: "",
//   Color: "",
//   City: "",
//   Kms_Driven: "",
//   Insurance_Valid: "",
//   Service_History: "",
//   Accidents: "",
//   Tax_Paid: "",
//   Number_of_Doors: "",
//   Seats: "",
//   Registration_Age: "",
// };

// function Valuation() {
//   const [formData, setFormData] = useState(initialData);
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [prediction, setPrediction] = useState(null);
//   const [error, setError] = useState("");

//   const totalSteps = 4;

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     setError("");
//   };

//   // const validateStep = () => {
//   //   let requiredFields = [];

//   //   if (step === 1) {
//   //     requiredFields = ["Brand", "Model", "Year"];
//   //   }

//   //   if (step === 2) {
//   //     requiredFields = [
//   //       "Mileage_kmpl",
//   //       "Engine_CC",
//   //       "Horsepower",
//   //     ];
//   //   }

//   //   if (step === 3) {
//   //     requiredFields = [
//   //       "Kms_Driven",
//   //       "Insurance_Valid",
//   //       "Service_History",
//   //       "Accidents",
//   //       "Tax_Paid",
//   //     ];
//   //   }

//   //   if (step === 4) {
//   //     requiredFields = [
//   //       "Fuel_Type",
//   //       "Transmission",
//   //       "Owner_Type",
//   //       "Color",
//   //       "City",
//   //       "Number_of_Doors",
//   //       "Seats",
//   //       "Registration_Age",
//   //     ];
//   //   }

//   //   const missing = requiredFields.find(
//   //     (field) => !formData[field]
//   //   );

//   //   if (missing) {
//   //     setError("Please complete all required fields.");
//   //     return false;
//   //   }

//   //   return true;
//   // };


//   const validateStep = () => {
//   let requiredFields = [];

//   if (step === 1) {
//     requiredFields = ["Brand", "Model", "Year"];
//   }

//   if (step === 2) {
//     requiredFields = [
//       "Mileage_kmpl",
//       "Engine_CC",
//       "Horsepower",
//     ];
//   }

//   if (step === 3) {
//     requiredFields = [
//       "Kms_Driven",
//       "Insurance_Valid",
//       "Service_History",
//       "Accidents",
//       "Tax_Paid",
//     ];
//   }

//   if (step === 4) {
//     requiredFields = [
//       "Fuel_Type",
//       "Transmission",
//       "Owner_Type",
//       "Color",
//       "City",
//       "Number_of_Doors",
//       "Seats",
//       "Registration_Age",
//     ];
//   }

//   const missing = requiredFields.find(
//     (field) => !formData[field]
//   );

//   if (missing) {
//     setError("Please complete all required fields.");
//     return false;
//   }

//   // ======================================================
//   // YEAR VALIDATION
//   // ======================================================

//   if (step === 1) {
//     const year = Number(formData.Year);

//     if (!/^\d{4}$/.test(formData.Year)) {
//       setError("Please enter a valid 4-digit manufacturing year.");
//       return false;
//     }

//     if (year < 1990 || year > 2026) {
//       setError("Manufacturing year must be between 1990 and 2026.");
//       return false;
//     }
//   }

//   // ======================================================
//   // ENGINE & PERFORMANCE VALIDATION
//   // ======================================================

//   if (step === 2) {
//     const mileage = Number(formData.Mileage_kmpl);
//     const engine = Number(formData.Engine_CC);
//     const horsepower = Number(formData.Horsepower);

//     if (mileage <= 0) {
//       setError("Mileage must be greater than 0 km/l.");
//       return false;
//     }

//     if (engine <= 0) {
//       setError("Engine capacity must be greater than 0 CC.");
//       return false;
//     }

//     if (horsepower <= 0) {
//       setError("Horsepower must be greater than 0.");
//       return false;
//     }
//   }

//   // ======================================================
//   // CAR CONDITION VALIDATION
//   // ======================================================

//   if (step === 3) {
//     const kms = Number(formData.Kms_Driven);
//     const accidents = Number(formData.Accidents);

//     if (kms < 0) {
//       setError("Kilometres driven cannot be negative.");
//       return false;
//     }

//     if (accidents < 0) {
//       setError("Number of accidents cannot be negative.");
//       return false;
//     }
//   }

//   // ======================================================
//   // FINAL DETAILS VALIDATION
//   // ======================================================

//   if (step === 4) {
//     const doors = Number(formData.Number_of_Doors);
//     const seats = Number(formData.Seats);
//     const registrationAge = Number(formData.Registration_Age);

//     if (doors <= 0) {
//       setError("Please select a valid number of doors.");
//       return false;
//     }

//     if (seats <= 0) {
//       setError("Please select a valid number of seats.");
//       return false;
//     }

//     if (registrationAge < 0) {
//       setError("Registration age cannot be negative.");
//       return false;
//     }
//   }

//   return true;
// };

//   const nextStep = () => {
//     if (!validateStep()) return;

//     setStep((previous) => Math.min(previous + 1, totalSteps));
//   };

//   const previousStep = () => {
//     setError("");
//     setStep((previous) => Math.max(previous - 1, 1));
//   };

//   const predictPrice = async () => {
//     if (!validateStep()) return;

//     setLoading(true);
//     setError("");
//     setPrediction(null);

//     try {
//       const response = await fetch(
//         "https://mycars-node-backend.onrender.com/predict",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             ...formData,
//             Year: Number(formData.Year),
//             Mileage_kmpl: Number(formData.Mileage_kmpl),
//             Engine_CC: Number(formData.Engine_CC),
//             Horsepower: Number(formData.Horsepower),
//             Kms_Driven: Number(formData.Kms_Driven),
//             Insurance_Valid:
//               formData.Insurance_Valid === "Yes" ? 1 : 0,
//             Service_History:
//               formData.Service_History === "Yes" ? 1 : 0,
//             Accidents: Number(formData.Accidents),
//             Tax_Paid:
//               formData.Tax_Paid === "Yes" ? 1 : 0,
//             Number_of_Doors: Number(formData.Number_of_Doors),
//             Seats: Number(formData.Seats),
//             Registration_Age: Number(formData.Registration_Age),
//           }),
//         }
//       );

//       const result = await response.json();

//       if (!response.ok || !result.predicted_price) {
//         throw new Error(
//           result.error || "Unable to calculate car value."
//         );
//       }

//       setPrediction(result.predicted_price);
//     } catch (err) {
//       setError(
//         err.message ||
//           "Something went wrong. Please check that Node and Flask are running."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetForm = () => {
//     setFormData(initialData);
//     setStep(1);
//     setPrediction(null);
//     setError("");
//   };

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: "INR",
//       maximumFractionDigits: 0,
//     }).format(price);
//   };

//   return (
//     <div className="valuation-page">

//       <section className="valuation-header">
//         <p>AI POWERED VALUATION</p>

//         <h1>Find Your Car's Estimated Value</h1>

//         <span>
//           Enter a few details about your car and our
//           machine learning model will estimate its value.
//         </span>
//       </section>

//       {!prediction && (
//         <section className="valuation-card">

//           <div className="progress-area">

//             <div className="progress-top">
//               <span>Step {step} of {totalSteps}</span>
//               <span>{step * 25}% Complete</span>
//             </div>

//             <div className="progress-bar">
//               <div
//                 style={{
//                   width: `${step * 25}%`,
//                 }}
//               />
//             </div>

//           </div>


//           {error && (
//             <div className="error-message">
//               ⚠️ {error}
//             </div>
//           )}


//           {/* STEP 1 */}

//           {step === 1 && (
//             <div className="form-step">

//               <div className="step-title">
//                 <span>01</span>

//                 <div>
//                   <h2>Tell us about your car</h2>
//                   <p>
//                     Start with the basic information.
//                   </p>
//                 </div>
//               </div>


//               <div className="form-grid">

//                 <div className="form-group">
//                   <label>Brand *</label>

//                   <select
//                     name="Brand"
//                     value={formData.Brand}
//                     onChange={handleChange}
//                   >
//                     <option value="">
//                       Select car brand
//                     </option>
//                     <option>Audi</option>
//                     <option>BMW</option>
//                     <option>Ford</option>
//                     <option>Honda</option>
//                     <option>Hyundai</option>
//                     <option>Kia</option>
//                     <option>Mahindra</option>
//                     <option>Mercedes</option>
//                     <option>Nissan</option>
//                     <option>Skoda</option>
//                     <option>Tata</option>
//                     <option>Toyota</option>
//                     <option>Volkswagen</option>
//                   </select>

//                   <small>
//                     Choose the manufacturer of your car.
//                   </small>
//                 </div>


//                 <div className="form-group">
//                   <label>Model *</label>

//                   <select
//                     name="Model"
//                     value={formData.Model}
//                     onChange={handleChange}
//                   >
//                     <option value="">
//                       Select car model
//                     </option>
//                     <option>A4</option>
//                     <option>Amaze</option>
//                     <option>Bolero</option>
//                     <option>C-Class</option>
//                     <option>Camry</option>
//                     <option>Carens</option>
//                     <option>City</option>
//                     <option>Civic</option>
//                     <option>Corolla</option>
//                     <option>Creta</option>
//                     <option>E-Class</option>
//                     <option>EcoSport</option>
//                     <option>Endeavour</option>
//                     <option>Figo</option>
//                     <option>GLA</option>
//                     <option>Harrier</option>
//                     <option>Kicks</option>
//                     <option>Kushaq</option>
//                     <option>Magnite</option>
//                     <option>Nexon</option>
//                     <option>Octavia</option>
//                     <option>Polo</option>
//                     <option>Punch</option>
//                     <option>Q3</option>
//                     <option>Q5</option>
//                     <option>Scorpio</option>
//                     <option>Seltos</option>
//                     <option>Slavia</option>
//                     <option>Sonet</option>
//                     <option>Sunny</option>
//                     <option>Taigun</option>
//                     <option>Verna</option>
//                     <option>Virtus</option>
//                     <option>X1</option>
//                     <option>X3</option>
//                     <option>XUV700</option>
//                     <option>Yaris</option>
//                     <option>i20</option>
//                   </select>

//                   <small>
//                     Select the exact model if available.
//                   </small>
//                 </div>


//                 <div className="form-group">
//                   <label>Manufacturing Year *</label>

//                   <input
//                     type="number"
//                     name="Year"
//                     value={formData.Year}
//                     onChange={handleChange}
//                     placeholder="Example: 2020"
//                     min="1990"
//                     max="2026"
//                   />

//                   <small>
//                     Enter the car's manufacturing year.
//                   </small>
//                 </div>

//               </div>

//             </div>
//           )}


//           {/* STEP 2 */}

//           {step === 2 && (
//             <div className="form-step">

//               <div className="step-title">
//                 <span>02</span>

//                 <div>
//                   <h2>Engine & Performance</h2>
//                   <p>
//                     Tell us about your car's performance.
//                   </p>
//                 </div>
//               </div>


//               <div className="form-grid">

//                 <div className="form-group">
//                   <label>Mileage *</label>

//                   <input
//                     type="number"
//                     name="Mileage_kmpl"
//                     value={formData.Mileage_kmpl}
//                     onChange={handleChange}
//                     placeholder="Example: 18"
//                     min="1"
//                     step="0.1"
//                   />

//                   <small>
//                     Mileage in kilometres per litre (km/l).
//                   </small>
//                 </div>


//                 <div className="form-group">
//                   <label>Engine Capacity *</label>

//                   <input
//                     type="number"
//                     name="Engine_CC"
//                     value={formData.Engine_CC}
//                     onChange={handleChange}
//                     placeholder="Example: 1498"
//                     min="1"
//                   />

//                   <small>
//                     Engine size in CC.
//                   </small>
//                 </div>


//                 <div className="form-group">
//                   <label>Horsepower *</label>

//                   <input
//                     type="number"
//                     name="Horsepower"
//                     value={formData.Horsepower}
//                     onChange={handleChange}
//                     placeholder="Example: 118"
//                     min="1"
//                   />

//                   <small>
//                     Enter horsepower (HP).
//                   </small>
//                 </div>

//               </div>

//             </div>
//           )}


//           {/* STEP 3 */}

//           {step === 3 && (
//             <div className="form-step">

//               <div className="step-title">
//                 <span>03</span>

//                 <div>
//                   <h2>Car Condition</h2>
//                   <p>
//                     Information about usage and history.
//                   </p>
//                 </div>
//               </div>


//               <div className="form-grid">

//                 <div className="form-group">
//                   <label>Kilometres Driven *</label>

//                   <input
//                     type="number"
//                     name="Kms_Driven"
//                     value={formData.Kms_Driven}
//                     onChange={handleChange}
//                     placeholder="Example: 50000"
//                     min="0"
//                   />

//                   <small>
//                     Total kilometres driven by the car.
//                   </small>
//                 </div>


//                 <div className="form-group">
//                   <label>Insurance *</label>

//                   <select
//                     name="Insurance_Valid"
//                     value={formData.Insurance_Valid}
//                     onChange={handleChange}
//                   >
//                     <option value="">
//                       Select insurance status
//                     </option>
//                     <option value="Yes">Valid</option>
//                     <option value="No">Expired / No</option>
//                   </select>
//                 </div>


//                 <div className="form-group">
//                   <label>Service History *</label>

//                   <select
//                     name="Service_History"
//                     value={formData.Service_History}
//                     onChange={handleChange}
//                   >
//                     <option value="">
//                       Select service history
//                     </option>
//                     <option value="Yes">
//                       Available
//                     </option>
//                     <option value="No">
//                       Not Available
//                     </option>
//                   </select>
//                 </div>


//                 <div className="form-group">
//                   <label>Number of Accidents *</label>

//                   <select
//                     name="Accidents"
//                     value={formData.Accidents}
//                     onChange={handleChange}
//                   >
//                     <option value="">
//                       Select accident history
//                     </option>
//                     <option value="0">
//                       No accidents
//                     </option>
//                     <option value="1">
//                       1 accident
//                     </option>
//                     <option value="2">
//                       2 accidents
//                     </option>
//                     <option value="3">
//                       3+ accidents
//                     </option>
//                   </select>
//                 </div>


//                 <div className="form-group">
//                   <label>Tax Paid *</label>

//                   <select
//                     name="Tax_Paid"
//                     value={formData.Tax_Paid}
//                     onChange={handleChange}
//                   >
//                     <option value="">
//                       Select tax status
//                     </option>
//                     <option value="Yes">
//                       Paid
//                     </option>
//                     <option value="No">
//                       Not Paid
//                     </option>
//                   </select>
//                 </div>

//               </div>

//             </div>
//           )}


//           {/* STEP 4 */}

//           {step === 4 && (
//             <div className="form-step">

//               <div className="step-title">
//                 <span>04</span>

//                 <div>
//                   <h2>Final Details</h2>
//                   <p>
//                     Almost done. Add the remaining details.
//                   </p>
//                 </div>
//               </div>


//               <div className="form-grid">

//                 <div className="form-group">
//                   <label>Fuel Type *</label>

//                   <select
//                     name="Fuel_Type"
//                     value={formData.Fuel_Type}
//                     onChange={handleChange}
//                   >
//                     <option value="">
//                       Select fuel type
//                     </option>
//                     <option>Petrol</option>
//                     <option>Diesel</option>
//                     <option>CNG</option>
//                     <option>Electric</option>
//                     <option>Hybrid</option>
//                   </select>
//                 </div>


//                 <div className="form-group">
//                   <label>Transmission *</label>

//                   <select
//                     name="Transmission"
//                     value={formData.Transmission}
//                     onChange={handleChange}
//                   >
//                     <option value="">
//                       Select transmission
//                     </option>
//                     <option>Manual</option>
//                     <option>Automatic</option>
//                   </select>
//                 </div>


//                 <div className="form-group">
//                   <label>Owner Type *</label>

//                   <select
//                     name="Owner_Type"
//                     value={formData.Owner_Type}
//                     onChange={handleChange}
//                   >
//                     <option value="">
//                       Select owner type
//                     </option>
//                     <option>First</option>
//                     <option>Second</option>
//                     <option>Third</option>
//                     <option>Fourth+</option>
//                   </select>
//                 </div>


//                 <div className="form-group">
//                   <label>Color *</label>

//                   <select
//                     name="Color"
//                     value={formData.Color}
//                     onChange={handleChange}
//                   >
//                     <option value="">
//                       Select car color
//                     </option>
//                     <option>Black</option>
//                     <option>Blue</option>
//                     <option>Brown</option>
//                     <option>Grey</option>
//                     <option>Red</option>
//                     <option>Silver</option>
//                     <option>White</option>
//                   </select>
//                 </div>


//                 <div className="form-group">
//                   <label>City *</label>

//                   <select
//                     name="City"
//                     value={formData.City}
//                     onChange={handleChange}
//                   >
//                     <option value="">
//                       Select city
//                     </option>
//                     <option>Ahmedabad</option>
//                     <option>Bangalore</option>
//                     <option>Chennai</option>
//                     <option>Delhi</option>
//                     <option>Hyderabad</option>
//                     <option>Kolkata</option>
//                     <option>Mumbai</option>
//                     <option>Pune</option>
//                   </select>
//                 </div>


//                 <div className="form-group">
//                   <label>Number of Doors *</label>

//                   <select
//                     name="Number_of_Doors"
//                     value={formData.Number_of_Doors}
//                     onChange={handleChange}
//                   >
//                     <option value="">
//                       Select doors
//                     </option>
//                     <option value="2">2 Doors</option>
//                     <option value="4">4 Doors</option>
//                     <option value="5">5 Doors</option>
//                   </select>
//                 </div>


//                 <div className="form-group">
//                   <label>Seats *</label>

//                   <select
//                     name="Seats"
//                     value={formData.Seats}
//                     onChange={handleChange}
//                   >
//                     <option value="">
//                       Select seats
//                     </option>
//                     <option value="2">2 Seats</option>
//                     <option value="4">4 Seats</option>
//                     <option value="5">5 Seats</option>
//                     <option value="6">6 Seats</option>
//                     <option value="7">7 Seats</option>
//                     <option value="8">8 Seats</option>
//                   </select>
//                 </div>


//                 <div className="form-group">
//                   <label>Registration Age *</label>

//                   <input
//                     type="number"
//                     name="Registration_Age"
//                     value={formData.Registration_Age}
//                     onChange={handleChange}
//                     placeholder="Example: 5"
//                     min="0"
//                   />

//                   <small>
//                     How many years the car has been registered.
//                   </small>
//                 </div>

//               </div>

//             </div>
//           )}


//           <div className="form-actions">

//             {step > 1 ? (
//               <button
//                 className="back-button"
//                 onClick={previousStep}
//               >
//                 ← Back
//               </button>
//             ) : (
//               <div />
//             )}


//             {step < totalSteps ? (
//               <button
//                 className="next-button"
//                 onClick={nextStep}
//               >
//                 Continue →
//               </button>
//             ) : (
//               <button
//                 className="predict-button"
//                 onClick={predictPrice}
//                 disabled={loading}
//               >
//                 {loading
//                   ? "Calculating..."
//                   : "🚗 Calculate My Car Value"}
//               </button>
//             )}

//           </div>

//         </section>
//       )}


//       {/* RESULT */}

//       {prediction && (
//         <section className="prediction-result">

//           <div className="result-icon">
//             🚗
//           </div>

//           <p className="result-label">
//             ESTIMATED CAR VALUE
//           </p>

//           <h2>
//             {formatPrice(prediction)}
//           </h2>

//           <p className="result-description">
//             This estimate is generated using the
//             machine learning model trained for your
//             car price prediction project.
//           </p>


//           <div className="result-details">

//             <div>
//               <span>Car</span>
//               <strong>
//                 {formData.Brand} {formData.Model}
//               </strong>
//             </div>

//             <div>
//               <span>Year</span>
//               <strong>{formData.Year}</strong>
//             </div>

//             <div>
//               <span>Mileage</span>
//               <strong>
//                 {formData.Mileage_kmpl} km/l
//               </strong>
//             </div>

//             <div>
//               <span>Fuel</span>
//               <strong>{formData.Fuel_Type}</strong>
//             </div>

//           </div>


//           <div className="result-actions">

//             <button
//               className="primary-button"
//               onClick={resetForm}
//             >
//               Calculate Again
//             </button>

//           </div>

//         </section>
//       )}

//     </div>
//   );
// }

// export default Valuation;




import { useState } from "react";

const initialData = {
  Brand: "",
  Model: "",
  Year: "",
  Mileage_kmpl: "",
  Engine_CC: "",
  Horsepower: "",
  Fuel_Type: "",
  Transmission: "",
  Owner_Type: "",
  Color: "",
  City: "",
  Kms_Driven: "",
  Insurance_Valid: "",
  Service_History: "",
  Accidents: "",
  Tax_Paid: "",
  Number_of_Doors: "",
  Seats: "",
  Registration_Age: "",
};

// ======================================================
// BRAND → MODEL DATA
// ======================================================

// const brandModels = {
//   Audi: ["A4", "Q3", "Q5"],
//   BMW: ["X1", "X3"],
//   Ford: ["EcoSport", "Endeavour", "Figo"],
//   Honda: ["Amaze", "City", "Civic"],
//   Hyundai: ["Creta", "i20", "Verna"],
//   Kia: ["Carens", "Seltos", "Sonet"],
//   Mahindra: ["Bolero", "Scorpio", "XUV700"],
//   Mercedes: ["C-Class", "E-Class", "GLA"],
//   Nissan: ["Kicks", "Magnite", "Sunny"],
//   Skoda: ["Kushaq", "Octavia", "Slavia"],
//   Tata: ["Harrier", "Nexon", "Punch"],
//   Toyota: ["Camry", "Corolla", "Yaris"],
//   Volkswagen: ["Polo", "Taigun", "Virtus"],
// };
const brandModels = {
  Audi: [
    "A4", "A6", "Q3", "Q3 Sportback", "Q5", "Q7", "Q8",
    "RS Q8", "S5 Sportback", "SQ8"
  ],

  BMW: [
    "2 Series Gran Coupe", "3 Series", "5 Series", "7 Series",
    "X1", "X3", "X5", "X6", "X7", "i4", "i5", "i7", "iX", "XM"
  ],

  Ford: [
    "EcoSport", "Endeavour", "Figo", "Aspire", "Freestyle"
  ],

  Honda: [
    "Amaze", "City", "City e:HEV", "Elevate", "Civic", "ZR-V"
  ],

  Hyundai: [
    "Grand i10 Nios", "i20", "i20 N Line", "Aura", "Exter",
    "Venue", "Venue N Line", "Creta", "Creta N Line",
    "Creta Electric", "Alcazar", "Verna", "Ioniq 5"
  ],

  Kia: [
    "Carens", "Carens Clavis", "Seltos", "Sonet", "Syros",
    "Carnival", "EV6", "EV9"
  ],

  Mahindra: [
    "Bolero", "Bolero Neo", "Scorpio", "Scorpio N", "XUV 3XO",
    "XUV700", "Thar", "Thar Roxx", "Marazzo", "BE 6", "XEV 9e"
  ],

  Mercedes: [
    "A-Class Limousine", "C-Class", "E-Class", "S-Class",
    "GLA", "GLB", "GLC", "GLE", "GLS", "EQB", "EQS",
    "AMG GT", "Maybach S-Class"
  ],

  Nissan: [
    "Kicks", "Magnite", "Sunny", "X-Trail"
  ],

  Skoda: [
    "Kushaq", "Octavia", "Slavia", "Kylaq", "Kodiaq", "Octavia RS"
  ],

  Tata: [
    "Tiago", "Tigor", "Altroz", "Punch", "Nexon", "Curvv",
    "Harrier", "Safari", "Sierra", "Tiago EV", "Tigor EV",
    "Punch EV", "Nexon EV", "Curvv EV", "Harrier EV"
  ],

  Toyota: [
    "Camry", "Corolla", "Yaris", "Glanza", "Urban Cruiser Taisor",
    "Urban Cruiser Hyryder", "Innova Crysta", "Innova Hycross",
    "Fortuner", "Fortuner Legender", "Hilux", "Vellfire",
    "Land Cruiser 300"
  ],

  Volkswagen: [
    "Polo", "Taigun", "Virtus", "Tiguan"
  ]
};

function Valuation() {
  const [formData, setFormData] = useState(initialData);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState("");

  const totalSteps = 4;

  // ======================================================
  // HANDLE FORM CHANGE
  // ======================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    // When brand changes, clear the previously selected model.
    if (name === "Brand") {
      setFormData((previous) => ({
        ...previous,
        Brand: value,
        Model: "",
      }));
    } else {
      setFormData((previous) => ({
        ...previous,
        [name]: value,
      }));
    }

    setError("");
  };

  // ======================================================
  // VALIDATION
  // ======================================================

  const validateStep = () => {
    let requiredFields = [];

    if (step === 1) {
      requiredFields = ["Brand", "Model", "Year"];
    }

    if (step === 2) {
      requiredFields = [
        "Mileage_kmpl",
        "Engine_CC",
        "Horsepower",
      ];
    }

    if (step === 3) {
      requiredFields = [
        "Kms_Driven",
        "Insurance_Valid",
        "Service_History",
        "Accidents",
        "Tax_Paid",
      ];
    }

    if (step === 4) {
      requiredFields = [
        "Fuel_Type",
        "Transmission",
        "Owner_Type",
        "Color",
        "City",
        "Number_of_Doors",
        "Seats",
        "Registration_Age",
      ];
    }

    const missing = requiredFields.find(
      (field) => !formData[field]
    );

    if (missing) {
      setError("Please complete all required fields.");
      return false;
    }

    // ======================================================
    // YEAR VALIDATION
    // ======================================================

    if (step === 1) {
      const year = Number(formData.Year);

      if (!/^\d{4}$/.test(formData.Year)) {
        setError(
          "Please enter a valid 4-digit manufacturing year."
        );
        return false;
      }

      if (year < 1990 || year > 2026) {
        setError(
          "Manufacturing year must be between 1990 and 2026."
        );
        return false;
      }
    }

    // ======================================================
    // ENGINE & PERFORMANCE VALIDATION
    // ======================================================

    if (step === 2) {
      const mileage = Number(formData.Mileage_kmpl);
      const engine = Number(formData.Engine_CC);
      const horsepower = Number(formData.Horsepower);

      if (mileage <= 0) {
        setError("Mileage must be greater than 0 km/l.");
        return false;
      }

      if (engine <= 0) {
        setError(
          "Engine capacity must be greater than 0 CC."
        );
        return false;
      }

      if (horsepower <= 0) {
        setError("Horsepower must be greater than 0.");
        return false;
      }
    }

    // ======================================================
    // CAR CONDITION VALIDATION
    // ======================================================

    if (step === 3) {
      const kms = Number(formData.Kms_Driven);
      const accidents = Number(formData.Accidents);

      if (kms < 0) {
        setError(
          "Kilometres driven cannot be negative."
        );
        return false;
      }

      if (accidents < 0) {
        setError(
          "Number of accidents cannot be negative."
        );
        return false;
      }
    }

    // ======================================================
    // FINAL DETAILS VALIDATION
    // ======================================================

    if (step === 4) {
      const doors = Number(formData.Number_of_Doors);
      const seats = Number(formData.Seats);
      const registrationAge = Number(
        formData.Registration_Age
      );

      if (doors <= 0) {
        setError(
          "Please select a valid number of doors."
        );
        return false;
      }

      if (seats <= 0) {
        setError(
          "Please select a valid number of seats."
        );
        return false;
      }

      if (registrationAge < 0) {
        setError(
          "Registration age cannot be negative."
        );
        return false;
      }
    }

    return true;
  };

  // ======================================================
  // NEXT STEP
  // ======================================================

  const nextStep = () => {
    if (!validateStep()) return;

    setStep((previous) =>
      Math.min(previous + 1, totalSteps)
    );
  };

  // ======================================================
  // PREVIOUS STEP
  // ======================================================

  const previousStep = () => {
    setError("");

    setStep((previous) =>
      Math.max(previous - 1, 1)
    );
  };

  // ======================================================
  // PREDICT PRICE
  // ======================================================

  const predictPrice = async () => {
    if (!validateStep()) return;

    setLoading(true);
    setError("");
    setPrediction(null);

    try {
      const response = await fetch(
        "https://mycars-node-backend.onrender.com/predict",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            ...formData,

            Year: Number(formData.Year),

            Mileage_kmpl: Number(
              formData.Mileage_kmpl
            ),

            Engine_CC: Number(
              formData.Engine_CC
            ),

            Horsepower: Number(
              formData.Horsepower
            ),

            Kms_Driven: Number(
              formData.Kms_Driven
            ),

            Insurance_Valid:
              formData.Insurance_Valid === "Yes"
                ? 1
                : 0,

            Service_History:
              formData.Service_History === "Yes"
                ? 1
                : 0,

            Accidents: Number(
              formData.Accidents
            ),

            Tax_Paid:
              formData.Tax_Paid === "Yes"
                ? 1
                : 0,

            Number_of_Doors: Number(
              formData.Number_of_Doors
            ),

            Seats: Number(formData.Seats),

            Registration_Age: Number(
              formData.Registration_Age
            ),
          }),
        }
      );

      const result = await response.json();

      if (
        !response.ok ||
        !result.predicted_price
      ) {
        throw new Error(
          result.error ||
            "Unable to calculate car value."
        );
      }

      setPrediction(result.predicted_price);
    } catch (err) {
      setError(
        err.message ||
          "Something went wrong. Please check that Node and Flask are running."
      );
    } finally {
      setLoading(false);
    }
  };

  // ======================================================
  // RESET
  // ======================================================

  const resetForm = () => {
    setFormData(initialData);
    setStep(1);
    setPrediction(null);
    setError("");
  };

  // ======================================================
  // FORMAT PRICE
  // ======================================================

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // ======================================================
  // GET MODELS FOR SELECTED BRAND
  // ======================================================

  const availableModels =
    formData.Brand
      ? brandModels[formData.Brand] || []
      : [];

  return (
    <div className="valuation-page">

      {/* ==================================================
          HEADER
      ================================================== */}

      <section className="valuation-header">

        <p>AI POWERED VALUATION</p>

        <h1>
          Find Your Car's Estimated Value
        </h1>

        <span>
          Enter a few details about your car and our
          machine learning model will estimate its value.
        </span>

      </section>

      {/* ==================================================
          FORM
      ================================================== */}

      {!prediction && (
        <section className="valuation-card">

          {/* PROGRESS */}

          <div className="progress-area">

            <div className="progress-top">

              <span>
                Step {step} of {totalSteps}
              </span>

              <span>
                {step * 25}% Complete
              </span>

            </div>

            <div className="progress-bar">

              <div
                style={{
                  width: `${step * 25}%`,
                }}
              />

            </div>

          </div>

          {/* ERROR */}

          {error && (
            <div className="error-message">
              ⚠️ {error}
            </div>
          )}

          {/* ==================================================
              STEP 1
          ================================================== */}

          {step === 1 && (
            <div className="form-step">

              <div className="step-title">

                <span>01</span>

                <div>

                  <h2>
                    Tell us about your car
                  </h2>

                  <p>
                    Start with the basic information.
                  </p>

                </div>

              </div>

              <div className="form-grid">

                {/* BRAND */}

                <div className="form-group">

                  <label>
                    Brand *
                  </label>

                  <select
                    name="Brand"
                    value={formData.Brand}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select car brand
                    </option>

                    <option value="Audi">
                      Audi
                    </option>

                    <option value="BMW">
                      BMW
                    </option>

                    <option value="Ford">
                      Ford
                    </option>

                    <option value="Honda">
                      Honda
                    </option>

                    <option value="Hyundai">
                      Hyundai
                    </option>

                    <option value="Kia">
                      Kia
                    </option>

                    <option value="Mahindra">
                      Mahindra
                    </option>

                    <option value="Mercedes">
                      Mercedes
                    </option>

                    <option value="Nissan">
                      Nissan
                    </option>

                    <option value="Skoda">
                      Skoda
                    </option>

                    <option value="Tata">
                      Tata
                    </option>

                    <option value="Toyota">
                      Toyota
                    </option>

                    <option value="Volkswagen">
                      Volkswagen
                    </option>

                  </select>

                  <small>
                    Choose the manufacturer of your car.
                  </small>

                </div>

                {/* MODEL */}

                <div className="form-group">

                  <label>
                    Model *
                  </label>

                  <select
                    name="Model"
                    value={formData.Model}
                    onChange={handleChange}
                    disabled={!formData.Brand}
                  >

                    <option value="">
                      {formData.Brand
                        ? "Select car model"
                        : "Select brand first"}
                    </option>

                    {availableModels.map(
                      (model) => (
                        <option
                          key={model}
                          value={model}
                        >
                          {model}
                        </option>
                      )
                    )}

                  </select>

                  <small>
                    {formData.Brand
                      ? `Showing models available for ${formData.Brand}.`
                      : "Select a brand first to see available models."}
                  </small>

                </div>

                {/* YEAR */}

                <div className="form-group">

                  <label>
                    Manufacturing Year *
                  </label>

                  <input
                    type="number"
                    name="Year"
                    value={formData.Year}
                    onChange={handleChange}
                    placeholder="Example: 2020"
                    min="1990"
                    max="2026"
                  />

                  <small>
                    Enter the car's manufacturing year.
                  </small>

                </div>

              </div>

            </div>
          )}

          {/* ==================================================
              STEP 2
          ================================================== */}

          {step === 2 && (
            <div className="form-step">

              <div className="step-title">

                <span>02</span>

                <div>

                  <h2>
                    Engine & Performance
                  </h2>

                  <p>
                    Tell us about your car's performance.
                  </p>

                </div>

              </div>

              <div className="form-grid">

                {/* MILEAGE */}

                <div className="form-group">

                  <label>
                    Mileage *
                  </label>

                  <input
                    type="number"
                    name="Mileage_kmpl"
                    value={formData.Mileage_kmpl}
                    onChange={handleChange}
                    placeholder="Example: 18"
                    min="1"
                    step="0.1"
                  />

                  <small>
                    Mileage in kilometres per litre
                    (km/l).
                  </small>

                </div>

                {/* ENGINE */}

                <div className="form-group">

                  <label>
                    Engine Capacity *
                  </label>

                  <input
                    type="number"
                    name="Engine_CC"
                    value={formData.Engine_CC}
                    onChange={handleChange}
                    placeholder="Example: 1498"
                    min="1"
                  />

                  <small>
                    Engine size in CC.
                  </small>

                </div>

                {/* HORSEPOWER */}

                <div className="form-group">

                  <label>
                    Horsepower *
                  </label>

                  <input
                    type="number"
                    name="Horsepower"
                    value={formData.Horsepower}
                    onChange={handleChange}
                    placeholder="Example: 118"
                    min="1"
                  />

                  <small>
                    Enter horsepower (HP).
                  </small>

                </div>

              </div>

            </div>
          )}

          {/* ==================================================
              STEP 3
          ================================================== */}

          {step === 3 && (
            <div className="form-step">

              <div className="step-title">

                <span>03</span>

                <div>

                  <h2>
                    Car Condition
                  </h2>

                  <p>
                    Information about usage and history.
                  </p>

                </div>

              </div>

              <div className="form-grid">

                {/* KMS */}

                <div className="form-group">

                  <label>
                    Kilometres Driven *
                  </label>

                  <input
                    type="number"
                    name="Kms_Driven"
                    value={formData.Kms_Driven}
                    onChange={handleChange}
                    placeholder="Example: 50000"
                    min="0"
                  />

                  <small>
                    Total kilometres driven by the car.
                  </small>

                </div>

                {/* INSURANCE */}

                <div className="form-group">

                  <label>
                    Insurance *
                  </label>

                  <select
                    name="Insurance_Valid"
                    value={formData.Insurance_Valid}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select insurance status
                    </option>

                    <option value="Yes">
                      Valid
                    </option>

                    <option value="No">
                      Expired / No
                    </option>

                  </select>

                </div>

                {/* SERVICE */}

                <div className="form-group">

                  <label>
                    Service History *
                  </label>

                  <select
                    name="Service_History"
                    value={formData.Service_History}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select service history
                    </option>

                    <option value="Yes">
                      Available
                    </option>

                    <option value="No">
                      Not Available
                    </option>

                  </select>

                </div>

                {/* ACCIDENTS */}

                <div className="form-group">

                  <label>
                    Number of Accidents *
                  </label>

                  <select
                    name="Accidents"
                    value={formData.Accidents}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select accident history
                    </option>

                    <option value="0">
                      No accidents
                    </option>

                    <option value="1">
                      1 accident
                    </option>

                    <option value="2">
                      2 accidents
                    </option>

                    <option value="3">
                      3+ accidents
                    </option>

                  </select>

                </div>

                {/* TAX */}

                <div className="form-group">

                  <label>
                    Tax Paid *
                  </label>

                  <select
                    name="Tax_Paid"
                    value={formData.Tax_Paid}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select tax status
                    </option>

                    <option value="Yes">
                      Paid
                    </option>

                    <option value="No">
                      Not Paid
                    </option>

                  </select>

                </div>

              </div>

            </div>
          )}

          {/* ==================================================
              STEP 4
          ================================================== */}

          {step === 4 && (
            <div className="form-step">

              <div className="step-title">

                <span>04</span>

                <div>

                  <h2>
                    Final Details
                  </h2>

                  <p>
                    Almost done. Add the remaining details.
                  </p>

                </div>

              </div>

              <div className="form-grid">

                {/* FUEL */}

                <div className="form-group">

                  <label>
                    Fuel Type *
                  </label>

                  <select
                    name="Fuel_Type"
                    value={formData.Fuel_Type}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select fuel type
                    </option>

                    <option>
                      Petrol
                    </option>

                    <option>
                      Diesel
                    </option>

                    <option>
                      CNG
                    </option>

                    <option>
                      Electric
                    </option>

                    <option>
                      Hybrid
                    </option>

                  </select>

                </div>

                {/* TRANSMISSION */}

                <div className="form-group">

                  <label>
                    Transmission *
                  </label>

                  <select
                    name="Transmission"
                    value={formData.Transmission}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select transmission
                    </option>

                    <option>
                      Manual
                    </option>

                    <option>
                      Automatic
                    </option>

                  </select>

                </div>

                {/* OWNER */}

                <div className="form-group">

                  <label>
                    Owner Type *
                  </label>

                  <select
                    name="Owner_Type"
                    value={formData.Owner_Type}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select owner type
                    </option>

                    <option>
                      First
                    </option>

                    <option>
                      Second
                    </option>

                    <option>
                      Third
                    </option>

                    <option>
                      Fourth+
                    </option>

                  </select>

                </div>

                {/* COLOR */}

                <div className="form-group">

                  <label>
                    Color *
                  </label>

                  <select
                    name="Color"
                    value={formData.Color}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select car color
                    </option>

                    <option>
                      Black
                    </option>

                    <option>
                      Blue
                    </option>

                    <option>
                      Brown
                    </option>

                    <option>
                      Grey
                    </option>

                    <option>
                      Red
                    </option>

                    <option>
                      Silver
                    </option>

                    <option>
                      White
                    </option>

                  </select>

                </div>

                {/* CITY */}

                <div className="form-group">

                  <label>
                    City *
                  </label>

                  <select
                    name="City"
                    value={formData.City}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select city
                    </option>

                    <option>
                      Ahmedabad
                    </option>

                    <option>
                      Bangalore
                    </option>

                    <option>
                      Chennai
                    </option>

                    <option>
                      Delhi
                    </option>

                    <option>
                      Hyderabad
                    </option>

                    <option>
                      Kolkata
                    </option>

                    <option>
                      Mumbai
                    </option>

                    <option>
                      Pune
                    </option>

                  </select>

                </div>

                {/* DOORS */}

                <div className="form-group">

                  <label>
                    Number of Doors *
                  </label>

                  <select
                    name="Number_of_Doors"
                    value={formData.Number_of_Doors}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select doors
                    </option>

                    <option value="2">
                      2 Doors
                    </option>

                    <option value="4">
                      4 Doors
                    </option>

                    <option value="5">
                      5 Doors
                    </option>

                  </select>

                </div>

                {/* SEATS */}

                <div className="form-group">

                  <label>
                    Seats *
                  </label>

                  <select
                    name="Seats"
                    value={formData.Seats}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select seats
                    </option>

                    <option value="2">
                      2 Seats
                    </option>

                    <option value="4">
                      4 Seats
                    </option>

                    <option value="5">
                      5 Seats
                    </option>

                    <option value="6">
                      6 Seats
                    </option>

                    <option value="7">
                      7 Seats
                    </option>

                    <option value="8">
                      8 Seats
                    </option>

                  </select>

                </div>

                {/* REGISTRATION AGE */}

                <div className="form-group">

                  <label>
                    Registration Age *
                  </label>

                  <input
                    type="number"
                    name="Registration_Age"
                    value={formData.Registration_Age}
                    onChange={handleChange}
                    placeholder="Example: 5"
                    min="0"
                  />

                  <small>
                    How many years the car has been registered.
                  </small>

                </div>

              </div>

            </div>
          )}

          {/* ==================================================
              BUTTONS
          ================================================== */}

          <div className="form-actions">

            {step > 1 ? (
              <button
                className="back-button"
                onClick={previousStep}
              >
                ← Back
              </button>
            ) : (
              <div />
            )}

            {step < totalSteps ? (
              <button
                className="next-button"
                onClick={nextStep}
              >
                Continue →
              </button>
            ) : (
              <button
                className="predict-button"
                onClick={predictPrice}
                disabled={loading}
              >
                {loading
                  ? "Calculating..."
                  : "🚗 Calculate My Car Value"}
              </button>
            )}

          </div>

        </section>
      )}

      {/* ==================================================
          RESULT
      ================================================== */}

      {prediction && (
        <section className="prediction-result">

          <div className="result-icon">
            🚗
          </div>

          <p className="result-label">
            ESTIMATED CAR VALUE
          </p>

          <h2>
            {formatPrice(prediction)}
          </h2>

          <p className="result-description">
            This estimate is generated using the
            machine learning model trained for your
            car price prediction project.
          </p>

          <div className="result-details">

            <div>
              <span>Car</span>

              <strong>
                {formData.Brand} {formData.Model}
              </strong>
            </div>

            <div>
              <span>Year</span>

              <strong>
                {formData.Year}
              </strong>
            </div>

            <div>
              <span>Mileage</span>

              <strong>
                {formData.Mileage_kmpl} km/l
              </strong>
            </div>

            <div>
              <span>Fuel</span>

              <strong>
                {formData.Fuel_Type}
              </strong>
            </div>

          </div>

          <div className="result-actions">

            <button
              className="primary-button"
              onClick={resetForm}
            >
              Calculate Again
            </button>

          </div>

        </section>
      )}

    </div>
  );
}

export default Valuation;
