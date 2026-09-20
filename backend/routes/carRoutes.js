const express = require("express");
const Car = require("../models/Car");

const router = express.Router();


// GET ALL AVAILABLE CARS
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find({
      status: "Available",
    }).sort({
      createdAt: -1,
    });

    res.json(cars);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch cars",
      error: error.message,
    });
  }
});


// GET ONE CAR
router.get("/:id", async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({
        message: "Car not found",
      });
    }

    res.json(car);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch car",
      error: error.message,
    });
  }
});


// ADD NEW CAR
router.post("/", async (req, res) => {
  try {
    const car = new Car(req.body);

    const savedCar = await car.save();

    res.status(201).json(savedCar);

  } catch (error) {
    res.status(400).json({
      message: "Failed to add car",
      error: error.message,
    });
  }
});


// UPDATE CAR
router.put("/:id", async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedCar) {
      return res.status(404).json({
        message: "Car not found",
      });
    }

    res.json(updatedCar);

  } catch (error) {
    res.status(400).json({
      message: "Failed to update car",
      error: error.message,
    });
  }
});


// DELETE CAR
router.delete("/:id", async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(
      req.params.id
    );

    if (!deletedCar) {
      return res.status(404).json({
        message: "Car not found",
      });
    }

    res.json({
      message: "Car deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to delete car",
      error: error.message,
    });
  }
});


module.exports = router;