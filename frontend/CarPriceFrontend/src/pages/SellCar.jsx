import { useState } from "react";

function SellCar() {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    fuel: "",
    transmission: "",
    kms: "",
    city: "",
    color: "",
    description: "",
    sellerName: "",
    sellerPhone: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const carData = {
        ...formData,
        year: Number(formData.year),
        price: Number(formData.price),
        mileage: Number(formData.mileage),
        kms: Number(formData.kms),
        images: [],
        status: "Available",
      };

      const response = await fetch(
        "https://mycars-node-backend.onrender.com/cars",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(carData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to add car"
        );
      }

      setMessage(
        "🎉 Your car has been listed successfully!"
      );

      setFormData({
        brand: "",
        model: "",
        year: "",
        price: "",
        mileage: "",
        fuel: "",
        transmission: "",
        kms: "",
        city: "",
        color: "",
        description: "",
        sellerName: "",
        sellerPhone: "",
      });
    } catch (err) {
      console.error(err);

      setError(
        err.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page sell-page">

      <div className="sell-container">

        <div className="sell-header">
          <p>SELL YOUR CAR</p>

          <h1>List Your Car</h1>

          <span>
            Enter your car details and connect with
            potential buyers.
          </span>
        </div>

        <form
          className="sell-form"
          onSubmit={handleSubmit}
        >

          {/* CAR DETAILS */}

          <div className="form-section">

            <h2>Car Details</h2>

            <div className="form-grid">

              <div className="form-group">
                <label>Brand *</label>

                <input
                  type="text"
                  name="brand"
                  placeholder="e.g. Toyota"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Model *</label>

                <input
                  type="text"
                  name="model"
                  placeholder="e.g. Corolla"
                  value={formData.model}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Year *</label>

                <input
                  type="number"
                  name="year"
                  placeholder="e.g. 2020"
                  min="1990"
                  max="2026"
                  value={formData.year}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Expected Price (₹) *</label>

                <input
                  type="number"
                  name="price"
                  placeholder="e.g. 750000"
                  min="1"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Mileage (km/l) *</label>

                <input
                  type="number"
                  name="mileage"
                  placeholder="e.g. 18"
                  min="0"
                  step="0.1"
                  value={formData.mileage}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Kilometers Driven *</label>

                <input
                  type="number"
                  name="kms"
                  placeholder="e.g. 50000"
                  min="0"
                  value={formData.kms}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Fuel Type *</label>

                <select
                  name="fuel"
                  value={formData.fuel}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Fuel
                  </option>

                  <option value="Petrol">
                    Petrol
                  </option>

                  <option value="Diesel">
                    Diesel
                  </option>

                  <option value="CNG">
                    CNG
                  </option>

                  <option value="Electric">
                    Electric
                  </option>

                  <option value="Hybrid">
                    Hybrid
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>Transmission *</label>

                <select
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Transmission
                  </option>

                  <option value="Manual">
                    Manual
                  </option>

                  <option value="Automatic">
                    Automatic
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>City *</label>

                <input
                  type="text"
                  name="city"
                  placeholder="e.g. Rajkot"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Color *</label>

                <input
                  type="text"
                  name="color"
                  placeholder="e.g. White"
                  value={formData.color}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>
          </div>

          {/* DESCRIPTION */}

          <div className="form-section">

            <h2>Car Description</h2>

            <div className="form-group">

              <label>Description</label>

              <textarea
                name="description"
                placeholder="Tell buyers about your car..."
                rows="5"
                value={formData.description}
                onChange={handleChange}
              />

            </div>

          </div>

          {/* SELLER DETAILS */}

          <div className="form-section">

            <h2>Seller Details</h2>

            <div className="form-grid">

              <div className="form-group">

                <label>Your Name *</label>

                <input
                  type="text"
                  name="sellerName"
                  placeholder="Enter your name"
                  value={formData.sellerName}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>Phone Number *</label>

                <input
                  type="tel"
                  name="sellerPhone"
                  placeholder="Enter phone number"
                  value={formData.sellerPhone}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

          </div>

          {/* MESSAGE */}

          {message && (
            <div className="success-message">
              {message}
            </div>
          )}

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {/* SUBMIT */}

          <button
            type="submit"
            className="sell-submit-button"
            disabled={loading}
          >
            {loading
              ? "Listing Car..."
              : "List My Car"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default SellCar;