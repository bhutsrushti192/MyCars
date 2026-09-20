// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div>

//       {/* HERO */}

//       <section className="hero">

//         <div className="hero-content">

//           <p className="hero-tag">
//             🚘 SMART CAR PLATFORM
//           </p>

//           <h1>
//             Know Your Car's
//             <span> Real Value.</span>
//           </h1>

//           <p className="hero-description">
//             Get an estimated car value using our
//             machine learning powered price prediction
//             system. Buy smarter. Sell confidently.
//           </p>

//           <div className="hero-buttons">

//             <Link
//               to="/valuation"
//               className="primary-button"
//             >
//               💰 Value My Car
//             </Link>

//             <Link
//               to="/buy"
//               className="secondary-button"
//             >
//               🚗 Browse Cars
//             </Link>

//           </div>

//         </div>

//         <div className="hero-car">
//           <div className="car-placeholder">
//             🚘
//           </div>
//         </div>

//       </section>


//       {/* SERVICES */}

//       <section className="services">

//         <div className="section-heading">

//           <p>WHAT WE OFFER</p>

//           <h2>
//             Everything you need for your car
//           </h2>

//         </div>


//         <div className="service-grid">

//           <div className="service-card">

//             <div className="service-icon">
//               💰
//             </div>

//             <h3>Value Your Car</h3>

//             <p>
//               Enter your car details and get an
//               estimated price using our ML model.
//             </p>

//             <Link to="/valuation">
//               Get Valuation →
//             </Link>

//           </div>


//           <div className="service-card">

//             <div className="service-icon">
//               🚗
//             </div>

//             <h3>Buy a Car</h3>

//             <p>
//               Explore available cars and find one
//               that matches your requirements.
//             </p>

//             <Link to="/buy">
//               Browse Cars →
//             </Link>

//           </div>


//           <div className="service-card">

//             <div className="service-icon">
//               🏷️
//             </div>

//             <h3>Sell Your Car</h3>

//             <p>
//               Estimate your car's value and prepare
//               your car for selling.
//             </p>

//             <Link to="/sell">
//               Sell Your Car →
//             </Link>

//           </div>

//         </div>

//       </section>


//       {/* HOW IT WORKS */}

//       <section className="how-section">

//         <div className="section-heading">

//           <p>SIMPLE PROCESS</p>

//           <h2>
//             How CarValue Works
//           </h2>

//         </div>


//         <div className="steps">

//           <div className="step">

//             <span>01</span>

//             <h3>Enter Details</h3>

//             <p>
//               Tell us about your car, including
//               model, year, mileage and condition.
//             </p>

//           </div>


//           <div className="step">

//             <span>02</span>

//             <h3>Our ML Model</h3>

//             <p>
//               Your information is processed by
//               our trained machine learning model.
//             </p>

//           </div>


//           <div className="step">

//             <span>03</span>

//             <h3>Get Your Value</h3>

//             <p>
//               Receive an estimated price for
//               your car instantly.
//             </p>

//           </div>

//         </div>

//       </section>


//       {/* CTA */}

//       <section className="cta">

//         <h2>
//           Want to know what your car is worth?
//         </h2>

//         <p>
//           Get your estimated car value in just
//           a few simple steps.
//         </p>

//         <Link
//           to="/valuation"
//           className="primary-button"
//         >
//           Calculate Car Value →
//         </Link>

//       </section>

//     </div>
//   );
// }

// export default Home;

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-tag">
            🚘 SMART CAR PLATFORM
          </p>

          <h1>
            Know Your Car's
            <span> Real Value.</span>
          </h1>

          <p className="hero-description">
            Get an estimated car value using our
            machine learning powered price prediction
            system. Buy smarter. Sell confidently.
          </p>

          <div className="hero-buttons">

            <Link
              to="/valuation"
              className="primary-button"
            >
              💰 Value My Car
            </Link>

            <Link
              to="/buy"
              className="secondary-button"
            >
              🚗 Browse Cars
            </Link>

          </div>

        </div>


        {/* CAR IMAGE AREA */}

        <div className="hero-cars">

          <div className="hero-main-car">
            <img
              src="/cars/car-main.jpg"
              alt="Featured car"
            />
          </div>

          <div className="hero-small-car hero-small-one">
            <img
              src="/cars/car-one.jpg"
              alt="Car"
            />
          </div>

          <div className="hero-small-car hero-small-two">
            <img
              src="/cars/car-two.jpg"
              alt="Car"
            />
          </div>

          <div className="hero-circle">
            <span>MYCARS</span>
          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section className="services">

        <div className="section-heading">

          <p>WHAT WE OFFER</p>

          <h2>
            Everything you need for your car
          </h2>

        </div>


        <div className="service-grid">

          <div className="service-card">

            <div className="service-icon">
              💰
            </div>

            <h3>Value Your Car</h3>

            <p>
              Enter your car details and get an
              estimated price using our ML model.
            </p>

            <Link to="/valuation">
              Get Valuation →
            </Link>

          </div>


          <div className="service-card">

            <div className="service-icon">
              🚗
            </div>

            <h3>Buy a Car</h3>

            <p>
              Explore available cars and find one
              that matches your requirements.
            </p>

            <Link to="/buy">
              Browse Cars →
            </Link>

          </div>


          <div className="service-card">

            <div className="service-icon">
              🏷️
            </div>

            <h3>Sell Your Car</h3>

            <p>
              List your car with its details and
              connect with potential buyers.
            </p>

            <Link to="/sell">
              Sell Your Car →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="how-section">

        <div className="section-heading">

          <p>SIMPLE PROCESS</p>

          <h2>
            How MyCars Works
          </h2>

        </div>


        <div className="steps">

          <div className="step">

            <span>01</span>

            <h3>Enter Details</h3>

            <p>
              Tell us about your car, including
              model, year, mileage and other details.
            </p>

          </div>


          <div className="step">

            <span>02</span>

            <h3>Our ML Model</h3>

            <p>
              Your information is processed by
              our trained machine learning model.
            </p>

          </div>


          <div className="step">

            <span>03</span>

            <h3>Get Your Value</h3>

            <p>
              Receive an estimated price for
              your car instantly.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="cta">

        <h2>
          Want to know what your car is worth?
        </h2>

        <p>
          Get your estimated car value in just
          a few simple steps.
        </p>

        <Link
          to="/valuation"
          className="primary-button"
        >
          Calculate Car Value →
        </Link>

      </section>

    </div>
  );
}

export default Home;