const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

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
        message: "Car Price Backend is running"
    });
});


// ======================================================
// ML PREDICTION
// ======================================================

app.post("/predict", async (req, res) => {

    try {

        const carData = req.body;

        const response = await fetch(
            "http://127.0.0.1:5000/predict",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(carData)
            }
        );

        const result = await response.json();

        res.json(result);

    } catch (error) {

        console.error("ML API Error:", error);

        res.status(500).json({
            success: false,
            error: "Unable to connect to ML API"
        });
    }
});


// ======================================================
// MONGODB CONNECTION
// ======================================================

mongoose
    .connect("mongodb://127.0.0.1:27017/car_price_project")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.log(
            "MongoDB Connection Error:",
            error.message
        );
    });


// ======================================================
// CAR ROUTES
// ======================================================

app.use("/cars", carRoutes);


// ======================================================
// START SERVER
// ======================================================

app.listen(3000, () => {

    console.log(
        "Node.js Backend running on http://localhost:3000"
    );

});