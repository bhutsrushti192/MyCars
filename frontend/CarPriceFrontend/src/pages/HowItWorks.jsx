import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <div className="how-page">

      {/* Header */}
      <section className="how-header">
        <p>HOW IT WORKS</p>
        <h1>CarValue Makes It Simple</h1>
        <span>
          Buy, sell, or discover the value of your car
          in just a few simple steps.
        </span>
      </section>

      {/* Main Steps */}
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
              model, year, mileage, engine, horsepower,
              fuel type, and other information.
            </p>
          </div>
        </div>

        <div className="how-step">
          <div className="how-number">04</div>
          <div className="how-icon">🤖</div>
          <div>
            <h2>Get AI-Based Valuation</h2>
            <p>
              Our machine learning model processes the
              information and provides an estimated
              market price for your car.
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

      {/* Features */}
      <section className="how-features">
        <div className="how-feature">
          <div>🤖</div>
          <h3>Machine Learning</h3>
          <p>
            Get an estimated car price using our trained
            machine learning model.
          </p>
        </div>

        <div className="how-feature">
          <div>🔎</div>
          <h3>Easy Search</h3>
          <p>
            Quickly find cars using multiple filters
            and search options.
          </p>
        </div>

        <div className="how-feature">
          <div>💾</div>
          <h3>Database Powered</h3>
          <p>
            Car listings are stored and retrieved from
            MongoDB.
          </p>
        </div>

        <div className="how-feature">
          <div>⚡</div>
          <h3>Simple Experience</h3>
          <p>
            A simple interface for buying, selling,
            and valuing cars.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="how-cta">
        <h2>Ready to Explore?</h2>
        <p>
          Find your next car or discover what your car
          could be worth.
        </p>

        <div className="how-buttons">
          <Link to="/buy" className="how-primary-button">
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