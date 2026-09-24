// import { Link } from "react-router-dom";

// function HowItWorks() {
//   return (
//     <div className="how-page">

//       {/* Header */}
//       <section className="how-header">
//         <p>HOW IT WORKS</p>
//         <h1>CarValue Makes It Simple</h1>
//         <span>
//           Buy, sell, or discover the value of your car
//           in just a few simple steps.
//         </span>
//       </section>

//       {/* Main Steps */}
//       <section className="how-container">

//         <div className="how-step">
//           <div className="how-number">01</div>
//           <div className="how-icon">🔍</div>
//           <div>
//             <h2>Find Your Car</h2>
//             <p>
//               Browse available cars on our marketplace.
//               Use search and filters to find a car based
//               on brand, fuel type, transmission, city,
//               and price.
//             </p>
//           </div>
//         </div>

//         <div className="how-step">
//           <div className="how-number">02</div>
//           <div className="how-icon">📋</div>
//           <div>
//             <h2>Check Car Details</h2>
//             <p>
//               Open a car listing to view its price,
//               specifications, mileage, location,
//               description, and seller information.
//             </p>
//           </div>
//         </div>

//         <div className="how-step">
//           <div className="how-number">03</div>
//           <div className="how-icon">💰</div>
//           <div>
//             <h2>Value Your Car</h2>
//             <p>
//               Enter your car details such as brand,
//               model, year, mileage, engine, horsepower,
//               fuel type, and other information.
//             </p>
//           </div>
//         </div>

//         <div className="how-step">
//           <div className="how-number">04</div>
//           <div className="how-icon">🤖</div>
//           <div>
//             <h2>Get AI-Based Valuation</h2>
//             <p>
//               Our machine learning model processes the
//               information and provides an estimated
//               market price for your car.
//             </p>
//           </div>
//         </div>

//         <div className="how-step">
//           <div className="how-number">05</div>
//           <div className="how-icon">🚗</div>
//           <div>
//             <h2>Sell Your Car</h2>
//             <p>
//               Enter your car and seller details and list
//               your vehicle. Your listing is stored in the
//               database and becomes available in the
//               marketplace.
//             </p>
//           </div>
//         </div>

//       </section>

//       {/* Features */}
//       <section className="how-features">
//         <div className="how-feature">
//           <div>🤖</div>
//           <h3>Machine Learning</h3>
//           <p>
//             Get an estimated car price using our trained
//             machine learning model.
//           </p>
//         </div>

//         <div className="how-feature">
//           <div>🔎</div>
//           <h3>Easy Search</h3>
//           <p>
//             Quickly find cars using multiple filters
//             and search options.
//           </p>
//         </div>

//         <div className="how-feature">
//           <div>💾</div>
//           <h3>Database Powered</h3>
//           <p>
//             Car listings are stored and retrieved from
//             MongoDB.
//           </p>
//         </div>

//         <div className="how-feature">
//           <div>⚡</div>
//           <h3>Simple Experience</h3>
//           <p>
//             A simple interface for buying, selling,
//             and valuing cars.
//           </p>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="how-cta">
//         <h2>Ready to Explore?</h2>
//         <p>
//           Find your next car or discover what your car
//           could be worth.
//         </p>

//         <div className="how-buttons">
//           <Link to="/buy" className="how-primary-button">
//             Browse Cars
//           </Link>

//           <Link
//             to="/valuation"
//             className="how-secondary-button"
//           >
//             Value My Car
//           </Link>
//         </div>
//       </section>

//     </div>
//   );
// }

// export default HowItWorks;



import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <div className="how-page">

      {/* ==================================================
          HEADER
      ================================================== */}

      <section className="how-header">

        <p>HOW IT WORKS</p>

        <h1>CarValue Makes It Simple</h1>

        <span>
          Understand how our platform helps you discover,
          compare, and estimate the value of cars using
          machine learning.
        </span>

      </section>


      {/* ==================================================
          MAIN STEPS
      ================================================== */}

      <section className="how-container">

        <div className="how-step">

          <div className="how-number">01</div>

          <div className="how-icon">🔍</div>

          <div>
            <h2>Find Your Car</h2>

            <p>
              Browse available cars on our marketplace.
              Use search and filters to find a car based
              on brand, fuel type, transmission, city,
              and price.
            </p>
          </div>

        </div>


        <div className="how-step">

          <div className="how-number">02</div>

          <div className="how-icon">📋</div>

          <div>
            <h2>Check Car Details</h2>

            <p>
              Open a car listing to view its price,
              specifications, mileage, location,
              description, and seller information.
            </p>
          </div>

        </div>


        <div className="how-step">

          <div className="how-number">03</div>

          <div className="how-icon">💰</div>

          <div>
            <h2>Value Your Car</h2>

            <p>
              Enter your car details such as brand,
              model, manufacturing year, mileage,
              engine capacity, horsepower, fuel type,
              transmission, condition, and other
              important information.
            </p>
          </div>

        </div>


        <div className="how-step">

          <div className="how-number">04</div>

          <div className="how-icon">🤖</div>

          <div>
            <h2>Get ML-Based Valuation</h2>

            <p>
              Our trained machine learning model processes
              the information provided by the user and
              predicts an estimated price for the car.
            </p>
          </div>

        </div>


        <div className="how-step">

          <div className="how-number">05</div>

          <div className="how-icon">🚗</div>

          <div>
            <h2>Sell Your Car</h2>

            <p>
              Enter your car and seller details and list
              your vehicle. Your listing is stored in the
              database and becomes available in the
              marketplace.
            </p>
          </div>

        </div>

      </section>


      {/* ==================================================
          MACHINE LEARNING SECTION
      ================================================== */}

      <section className="how-ml-section">

        <div className="how-ml-header">

          <p>MACHINE LEARNING</p>

          <h2>
            How Our Car Price Prediction Works
          </h2>

          <span>
            The valuation system uses car information
            and a trained regression model to estimate
            the expected price of a vehicle.
          </span>

        </div>


        {/* ML PROCESS */}

        <div className="how-ml-process">

          <div className="how-ml-card">

            <div className="how-ml-icon">
              📊
            </div>

            <h3>1. Input Data</h3>

            <p>
              The user provides information such as
              brand, model, year, mileage, engine,
              horsepower, fuel type, transmission,
              ownership, city, and vehicle condition.
            </p>

          </div>


          <div className="how-ml-card">

            <div className="how-ml-icon">
              ⚙️
            </div>

            <h3>2. Data Processing</h3>

            <p>
              The input information is converted into
              the numerical and categorical features
              required by the trained machine learning
              model.
            </p>

          </div>


          <div className="how-ml-card">

            <div className="how-ml-icon">
              🌳
            </div>

            <h3>3. Random Forest</h3>

            <p>
              The current prediction system uses a
              Random Forest Regressor trained to learn
              relationships between vehicle features
              and their prices.
            </p>

          </div>


          <div className="how-ml-card">

            <div className="how-ml-icon">
              💰
            </div>

            <h3>4. Price Prediction</h3>

            <p>
              The trained model receives the processed
              car information and produces an estimated
              vehicle price.
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          DATASET INFORMATION
      ================================================== */}

      <section className="how-data-section">

        <div className="how-data-header">

          <p>DATASET</p>

          <h2>
            Training Data
          </h2>

          <span>
            The model was trained using a large car-price
            dataset containing vehicle specifications,
            history, and price information.
          </span>

        </div>


        <div className="how-data-stats">

          <div className="how-data-stat">

            <strong>
              1,000,000
            </strong>

            <span>
              Dataset Records
            </span>

          </div>


          <div className="how-data-stat">

            <strong>
              105
            </strong>

            <span>
              Input Features
            </span>

          </div>


          <div className="how-data-stat">

            <strong>
              Random Forest
            </strong>

            <span>
              Current Model
            </span>

          </div>


          <div className="how-data-stat">

            <strong>
              Regression
            </strong>

            <span>
              Prediction Type
            </span>

          </div>

        </div>

      </section>


      {/* ==================================================
          CURRENT MODEL
      ================================================== */}

      <section className="how-model-section">

        <div className="how-model-header">

          <p>CURRENT MODEL</p>

          <h2>
            Random Forest Regressor
          </h2>

          <span>
            This is the model currently used by the
            car price prediction system.
          </span>

        </div>


        {/* MODEL CONFIGURATION */}

        <div className="how-model-details">

          <div className="how-model-info">

            <h3>
              Model Configuration
            </h3>

            <div className="how-info-row">
              <span>Algorithm</span>
              <strong>
                Random Forest Regressor
              </strong>
            </div>

            <div className="how-info-row">
              <span>Number of Trees</span>
              <strong>50</strong>
            </div>

            <div className="how-info-row">
              <span>Maximum Depth</span>
              <strong>12</strong>
            </div>

            <div className="how-info-row">
              <span>Minimum Samples Split</span>
              <strong>10</strong>
            </div>

            <div className="how-info-row">
              <span>Minimum Samples Leaf</span>
              <strong>1</strong>
            </div>

            <div className="how-info-row">
              <span>Random State</span>
              <strong>42</strong>
            </div>

            <div className="how-info-row">
              <span>Features Used</span>
              <strong>105</strong>
            </div>

          </div>


          {/* MODEL DESCRIPTION */}

          <div className="how-model-description">

            <div className="how-big-model-icon">
              🌳
            </div>

            <h3>
              Current Prediction Model
            </h3>

            <p>
              The Random Forest Regressor combines
              multiple decision trees to make a
              regression prediction. Each tree learns
              patterns from the training data and their
              predictions are combined to produce the
              final estimated car price.
            </p>

            <p>
              The model was configured with 50 trees
              and a maximum depth of 12 to create a
              practical balance between model complexity
              and prediction performance.
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          MODEL PERFORMANCE
      ================================================== */}

      <section className="how-performance-section">

        <div className="how-performance-header">

          <p>MODEL PERFORMANCE</p>

          <h2>
            Random Forest Evaluation
          </h2>

          <span>
            The following results were obtained on the
            test dataset.
          </span>

        </div>


        <div className="how-metrics-grid">

          {/* R2 */}

          <div className="how-metric-card">

            <div className="how-metric-icon">
              📈
            </div>

            <span>
              R² Score
            </span>

            <strong>
              0.7508
            </strong>

            <small>
              75.08%
            </small>

          </div>


          {/* MAE */}

          <div className="how-metric-card">

            <div className="how-metric-icon">
              📏
            </div>

            <span>
              MAE
            </span>

            <strong>
              ₹306,183
            </strong>

            <small>
              Mean Absolute Error
            </small>

          </div>


          {/* RMSE */}

          <div className="how-metric-card">

            <div className="how-metric-icon">
              📐
            </div>

            <span>
              RMSE
            </span>

            <strong>
              ₹392,819
            </strong>

            <small>
              Root Mean Squared Error
            </small>

          </div>


          {/* MSE */}

          <div className="how-metric-card">

            <div className="how-metric-icon">
              🧮
            </div>

            <span>
              MSE
            </span>

            <strong>
              1.543 × 10¹¹
            </strong>

            <small>
              Mean Squared Error
            </small>

          </div>

        </div>

      </section>


      {/* ==================================================
          MODEL COMPARISON
      ================================================== */}

      <section className="how-comparison-section">

        <div className="how-comparison-header">

          <p>MODEL COMPARISON</p>

          <h2>
            Models Tested
          </h2>

          <span>
            Different machine learning approaches can
            be evaluated using regression metrics such
            as R², MAE, MSE, and RMSE.
          </span>

        </div>


        <div className="how-comparison-table-wrapper">

          <table className="how-comparison-table">

            <thead>

              <tr>

                <th>Model</th>

                <th>R²</th>

                <th>MAE</th>

                <th>RMSE</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>
                  <strong>
                    Random Forest Regressor
                  </strong>
                </td>

                <td>
                  0.7508
                </td>

                <td>
                  ₹306,183
                </td>

                <td>
                  ₹392,819
                </td>

                <td>
                  Current Model
                </td>

               </tr>

              {/* {*<tr>

                <td>
                  Other tested models
                </td>

                <td>
                  —
                </td>

                <td>
                  —
                </td>

                <td>
                  —
                </td>

                <td>
                  Results to be added
                </td>

              </tr> */} 

              <tr>
  <td>
    <strong>Linear Regression (Sklearn)</strong>
  </td>
  <td>0.7275</td>
  <td>₹310,571</td>
  <td>₹410,731</td>
  <td>Tested</td>
</tr>

<tr>
  <td>
    <strong>Gradient Descent (Scratch)</strong>
  </td>
  <td>0.7273</td>
  <td>₹310,649</td>
  <td>₹410,865</td>
  <td>Tested</td>
</tr>

<tr>
  <td>
    <strong>Random Forest</strong>
  </td>
  <td>0.7549</td>
  <td>₹303,131</td>
  <td>₹389,525</td>
  <td>Tested</td>
</tr>

<tr>
  <td>
    <strong>Gradient Boosting</strong>
  </td>
  <td>0.7507</td>
  <td>₹308,965</td>
  <td>₹392,880</td>
  <td>Tested</td>
</tr>

<tr>
  <td>
    <strong>AdaBoost</strong>
  </td>
  <td>0.6973</td>
  <td>₹348,055</td>
  <td>₹432,896</td>
  <td>Tested</td>
</tr>

<tr>
  <td>
    <strong>Tuned Random Forest</strong>
  </td>
  <td>0.7573</td>
  <td>₹301,076</td>
  <td>₹387,641</td>
  <td>Tested</td>
</tr>

<tr>
  <td>
    <strong>Small Random Forest</strong>
  </td>
  <td>0.7508</td>
  <td>₹306,183</td>
  <td>₹392,819</td>
  <td>Current Model</td>
</tr>

            </tbody>

          </table>

        </div>

      </section>


      {/* ==================================================
          OVERFITTING / UNDERFITTING
      ================================================== */}

      <section className="how-fit-section">

        <div className="how-fit-header">

          <p>MODEL ANALYSIS</p>

          <h2>
            Overfitting & Underfitting
          </h2>

          <span>
            Model performance should be compared on
            both training and testing data to understand
            how well the model generalizes.
          </span>

        </div>


        <div className="how-fit-grid">

          <div className="how-fit-card">

            <div className="how-fit-icon">
              🎯
            </div>

            <h3>
              Overfitting
            </h3>

            <p>
              Overfitting happens when a model learns
              the training data too closely and performs
              significantly worse on unseen test data.
            </p>

            <div className="how-fit-status">
              Train vs Test comparison required
            </div>

          </div>


          <div className="how-fit-card">

            <div className="how-fit-icon">
              📉
            </div>

            <h3>
              Underfitting
            </h3>

            <p>
              Underfitting happens when a model is too
              simple to learn the important patterns
              in the data and performs poorly on both
              training and test data.
            </p>

            <div className="how-fit-status">
              Train vs Test comparison required
            </div>

          </div>


          <div className="how-fit-card">

            <div className="how-fit-icon">
              ⚖️
            </div>

            <h3>
              Generalization
            </h3>

            <p>
              A useful model should perform reasonably
              well on unseen data rather than only
              memorizing its training examples.
            </p>

            <div className="how-fit-status">
              Test performance: R² 0.7508
            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          MODEL FILE
      ================================================== */}

      <section className="how-model-file">

        <div className="how-file-icon">
          💾
        </div>

        <div>

          <p>DEPLOYED MODEL</p>

          <h2>
            small_car_price_model.pkl
          </h2>

          <span>
            The trained Random Forest model was saved
            using Joblib and can be loaded by the
            prediction API when a user requests a
            car-price estimate.
          </span>

        </div>

        <div className="how-file-size">

          <strong>
            12.19 MB
          </strong>

          <span>
            Model Size
          </span>

        </div>

      </section>


      {/* ==================================================
          FEATURES
      ================================================== */}

      <section className="how-features">

        <div className="how-feature">

          <div>🤖</div>

          <h3>
            Machine Learning
          </h3>

          <p>
            Get an estimated car price using our trained
            machine learning regression model.
          </p>

        </div>


        <div className="how-feature">

          <div>🔎</div>

          <h3>
            Easy Search
          </h3>

          <p>
            Quickly find cars using multiple filters
            and search options.
          </p>

        </div>


        <div className="how-feature">

          <div>💾</div>

          <h3>
            Database Powered
          </h3>

          <p>
            Car listings are stored and retrieved from
            MongoDB.
          </p>

        </div>


        <div className="how-feature">

          <div>⚡</div>

          <h3>
            Simple Experience
          </h3>

          <p>
            A simple interface for buying, selling,
            and valuing cars.
          </p>

        </div>

      </section>


      {/* ==================================================
          CTA
      ================================================== */}

      <section className="how-cta">

        <h2>
          Ready to Explore?
        </h2>

        <p>
          Find your next car or discover what your car
          could be worth.
        </p>

        <div className="how-buttons">

          <Link
            to="/buy"
            className="how-primary-button"
          >
            Browse Cars
          </Link>

          <Link
            to="/valuation"
            className="how-secondary-button"
          >
            Value My Car
          </Link>

        </div>

      </section>

    </div>
  );
}

export default HowItWorks;
