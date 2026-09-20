import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

function BuyCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [city, setCity] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Get cars from MongoDB through Node.js
  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cars");
        }

        return response.json();
      })
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load cars. Please check the backend.");
        setLoading(false);
      });
  }, []);

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const searchText =
        `${car.brand} ${car.model}`.toLowerCase();

      const matchesSearch =
        searchText.includes(search.toLowerCase());

      const matchesBrand =
        !brand || car.brand === brand;

      const matchesFuel =
        !fuel || car.fuel === fuel;

      const matchesTransmission =
        !transmission ||
        car.transmission === transmission;

      const matchesCity =
        !city || car.city === city;

      const matchesPrice =
        !maxPrice ||
        car.price <= Number(maxPrice);

      return (
        matchesSearch &&
        matchesBrand &&
        matchesFuel &&
        matchesTransmission &&
        matchesCity &&
        matchesPrice
      );
    });
  }, [
    cars,
    search,
    brand,
    fuel,
    transmission,
    city,
    maxPrice,
  ]);

  const clearFilters = () => {
    setSearch("");
    setBrand("");
    setFuel("");
    setTransmission("");
    setCity("");
    setMaxPrice("");
  };

  return (
    <div className="buy-page">

      <section className="buy-header">
        <p>EXPLORE CARS</p>

        <h1>Find Your Next Car</h1>

        <span>
          Search and compare cars that match your
          requirements.
        </span>
      </section>

      <section className="buy-container">

        {/* FILTERS */}

        <aside className="filters">

          <div className="filter-heading">
            <h2>Filters</h2>

            <button onClick={clearFilters}>
              Clear
            </button>
          </div>

          <div className="filter-group">

            <label>Search</label>

            <input
              type="text"
              placeholder="Brand or model..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          <div className="filter-group">

            <label>Brand</label>

            <select
              value={brand}
              onChange={(e) =>
                setBrand(e.target.value)
              }
            >
              <option value="">All Brands</option>
              <option>Audi</option>
              <option>BMW</option>
              <option>Ford</option>
              <option>Honda</option>
              <option>Hyundai</option>
              <option>Kia</option>
              <option>Mahindra</option>
              <option>Nissan</option>
              <option>Skoda</option>
              <option>Tata</option>
              <option>Toyota</option>
              <option>Volkswagen</option>
            </select>

          </div>

          <div className="filter-group">

            <label>Fuel Type</label>

            <select
              value={fuel}
              onChange={(e) =>
                setFuel(e.target.value)
              }
            >
              <option value="">All Fuel Types</option>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>CNG</option>
              <option>Electric</option>
              <option>Hybrid</option>
            </select>

          </div>

          <div className="filter-group">

            <label>Transmission</label>

            <select
              value={transmission}
              onChange={(e) =>
                setTransmission(e.target.value)
              }
            >
              <option value="">Any</option>
              <option>Manual</option>
              <option>Automatic</option>
            </select>

          </div>

          <div className="filter-group">

            <label>City</label>

            <select
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
            >
              <option value="">All Cities</option>
              <option>Ahmedabad</option>
              <option>Bangalore</option>
              <option>Chennai</option>
              <option>Delhi</option>
              <option>Hyderabad</option>
              <option>Kolkata</option>
              <option>Mumbai</option>
              <option>Pune</option>
              <option>Rajkot</option>
            </select>

          </div>

          <div className="filter-group">

            <label>Maximum Price</label>

            <select
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(e.target.value)
              }
            >
              <option value="">No limit</option>

              <option value="500000">
                ₹5 Lakh
              </option>

              <option value="800000">
                ₹8 Lakh
              </option>

              <option value="1000000">
                ₹10 Lakh
              </option>

              <option value="1500000">
                ₹15 Lakh
              </option>
            </select>

          </div>

        </aside>

        {/* RESULTS */}

        <div className="car-results">

          <div className="results-top">

            <div>
              <h2>Available Cars</h2>

              <p>
                {loading
                  ? "Loading cars..."
                  : `${filteredCars.length} cars found`}
              </p>
            </div>

          </div>

          {/* LOADING */}

          {loading && (
            <div className="no-results">
              <div>🚗</div>
              <h2>Loading Cars...</h2>
              <p>Please wait while we fetch cars from the database.</p>
            </div>
          )}

          {/* ERROR */}

          {!loading && error && (
            <div className="no-results">
              <div>⚠️</div>
              <h2>Unable to Load Cars</h2>
              <p>{error}</p>
            </div>
          )}

          {/* CARS */}

          {!loading && !error && filteredCars.length > 0 && (

            <div className="car-grid">

              {filteredCars.map((car) => (

                <div
                  className="car-card"
                  key={car._id}
                >

                  <div className="car-image">
                    🚗
                  </div>

                  <div className="car-card-content">

                    <p className="car-year">
                      {car.year}
                    </p>

                    <h3>
                      {car.brand} {car.model}
                    </h3>

                    <div className="car-specs">

                      <span>
                        ⛽ {car.fuel}
                      </span>

                      <span>
                        ⚙️ {car.transmission}
                      </span>

                      <span>
                        🛣️{" "}
                        {Number(car.kms).toLocaleString()}
                        {" "}km
                      </span>

                    </div>

                    <div className="car-card-bottom">

                      <strong>
                        ₹
                        {Number(car.price).toLocaleString(
                          "en-IN"
                        )}
                      </strong>

                      <Link
                        to={`/buy/${car._id}`}
                        className="view-button"
                      >
                        View Details →
                      </Link>

                    </div>

                  </div>

                </div>

              ))}

            </div>
          )}

          {/* NO RESULTS */}

          {!loading &&
            !error &&
            filteredCars.length === 0 && (

              <div className="no-results">

                <div>🚗</div>

                <h2>No cars found</h2>

                <p>
                  Try changing your search or filters.
                </p>

                <button onClick={clearFilters}>
                  Clear Filters
                </button>

              </div>
            )}

        </div>

      </section>

    </div>
  );
}

export default BuyCars;