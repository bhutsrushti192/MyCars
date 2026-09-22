const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const carRoutes = require("./routes/carRoutes");

// ======================================================
// MIDDLEWARE
// ======================================================

app.use(cors());
app.use(express.json());

// ======================================================
// HOME
// ======================================================

app.get("/", (req, res) => {
  res.json({
    message: "Car Price Backend is running",
  });
});

// ======================================================
// ML PREDICTION
// ======================================================

// app.post("/predict", async (req, res) => {
//   try {
//     const carData = req.body;

//     const response = await fetch(`${process.env.ML_API_URL}/predict`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(carData),
//     });

//     // Read response as text first
//     const rawResponse = await response.text();

//     console.log("ML API Status:", response.status);
//     console.log("ML API Response:", rawResponse);

//     // Check if ML API returned an HTTP error
//     if (!response.ok) {
//       return res.status(502).json({
//         success: false,
//         error: `ML API returned status ${response.status}`,
//       });
//     }

//     // Convert JSON response safely
//     let result;

//     try {
//       result = JSON.parse(rawResponse);
//     } catch (parseError) {
//       console.error("ML API returned non-JSON response:", rawResponse);

//       return res.status(502).json({
//         success: false,
//         error: "ML API returned an invalid response",
//       });
//     }

//     res.json(result);
//   } catch (error) {
//     console.error("ML API Error:", error);

//     res.status(500).json({
//       success: false,
//       error: "Unable to connect to ML API",
//     });
//   }
// });
// ======================================================
// ML PREDICTION
// ======================================================

app.post("/predict", async (req, res) => {
  const carData = req.body;

  const maxRetries = 2;
  let lastError = null;

  for (let attempt = 1; attempt <= maxRetries + 1; attempt++) {
    try {
      console.log(`ML API attempt ${attempt}/${maxRetries + 1}`);

      const response = await fetch(`${process.env.ML_API_URL}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carData),
      });

      const rawResponse = await response.text();

      console.log("ML API Status:", response.status);

      // Successful response
      if (response.ok) {
        try {
          const result = JSON.parse(rawResponse);

          console.log("ML API prediction successful");

          return res.json(result);
        } catch (parseError) {
          console.error("ML API returned invalid JSON:", rawResponse);
          lastError = new Error("ML API returned invalid JSON");
        }
      } else {
        console.error(
          `ML API returned HTTP ${response.status}:`,
          rawResponse.substring(0, 300),
        );

        lastError = new Error(`ML API returned status ${response.status}`);
      }
    } catch (error) {
      console.error(`ML API attempt ${attempt} failed:`, error.message);
      lastError = error;
    }

    // Wait before retry
    if (attempt <= maxRetries) {
      console.log("Waiting 2 seconds before retry...");

      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
    }
  }

  console.error("ML API failed after all retry attempts:", lastError);

  return res.status(502).json({
    success: false,
    error:
      "ML API is temporarily unavailable. Please try again in a few seconds.",
  });
});

// ======================================================
// MONGODB CONNECTION
// ======================================================

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error.message);
  });

// ======================================================
// CAR ROUTES
// ======================================================

app.use("/cars", carRoutes);

// ======================================================
// START SERVER
// ======================================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Node.js Backend running on port ${PORT}`);
});
