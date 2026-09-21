import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CarDetail() {
  const { id } = useParams();

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://mycars-node-backend.onrender.com/cars/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Car not found");
        }

        return response.json();
      })
      .then((data) => {
        setCar(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load car details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="detail-message">
        <h2>Loading Car Details...</h2>
        <p>Please wait.</p>
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="detail-message">
        <h2>Car Not Found</h2>
        <p>{error}</p>

        <Link to="/buy" className="back-button">
          ← Back to Buy Cars
        </Link>
      </div>
    );
  }

  return (
    <div className="car-detail-page">
      <div className="car-detail-container">

        <Link to="/buy" className="back-link">
          ← Back to Buy Cars
        </Link>

        <div className="car-detail-card">

          {/* Car Image */}
          <div className="car-detail-image">
            🚗
          </div>

          {/* Car Information */}
          <div className="car-detail-content">

            <p className="detail-year">
              {car.year}
            </p>

            <h1>
              {car.brand} {car.model}
            </h1>

            <div className="detail-price">
              ₹{Number(car.price).toLocaleString("en-IN")}
            </div>

            <p className="detail-description">
              {car.description ||
                "No description provided by the seller."}
            </p>

            {/* Specifications */}
            <div className="detail-section">
              <h2>Car Specifications</h2>

              <div className="spec-grid">

                <div className="spec-item">
                  <span>Fuel Type</span>
                  <strong>{car.fuel}</strong>
                </div>

                <div className="spec-item">
                  <span>Transmission</span>
                  <strong>{car.transmission}</strong>
                </div>

                <div className="spec-item">
                  <span>Mileage</span>
                  <strong>{car.mileage} km/l</strong>
                </div>

                <div className="spec-item">
                  <span>Kilometers Driven</span>
                  <strong>
                    {Number(car.kms).toLocaleString("en-IN")} km
                  </strong>
                </div>

                <div className="spec-item">
                  <span>City</span>
                  <strong>{car.city}</strong>
                </div>

                <div className="spec-item">
                  <span>Color</span>
                  <strong>{car.color}</strong>
                </div>

              </div>
            </div>

            {/* Seller Information */}
            <div className="detail-section seller-section">
              <h2>Seller Information</h2>

              <div className="seller-info">
                <p>
                  <span>Seller Name</span>
                  <strong>{car.sellerName}</strong>
                </p>

                <p>
                  <span>Phone Number</span>
                  <strong>{car.sellerPhone}</strong>
                </p>

                <p>
                  <span>Location</span>
                  <strong>{car.city}</strong>
                </p>
              </div>
            </div>

            <button
              className="contact-seller-button"
              onClick={() =>
                alert(
                  `Contact ${car.sellerName} at ${car.sellerPhone}`
                )
              }
            >
              Contact Seller
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;