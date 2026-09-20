const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      trim: true,
    },

    model: {
      type: String,
      required: true,
      trim: true,
    },

    year: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    mileage: {
      type: Number,
      required: true,
    },

    fuel: {
      type: String,
      required: true,
      enum: [
        "Petrol",
        "Diesel",
        "CNG",
        "Electric",
        "Hybrid",
      ],
    },

    transmission: {
      type: String,
      required: true,
      enum: ["Manual", "Automatic"],
    },

    kms: {
      type: Number,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    images: {
      type: [String],
      default: [],
    },

    sellerName: {
      type: String,
      required: true,
    },

    sellerPhone: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Available", "Sold"],
      default: "Available",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);