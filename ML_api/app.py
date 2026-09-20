
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

# =========================================================
# LOAD TRAINED MODEL AND FEATURE COLUMNS
# =========================================================

model = joblib.load("car_price_model.pkl")
feature_columns = joblib.load("car_price_features.pkl")


# =========================================================
# HOME
# =========================================================

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Car Price Prediction API is running"
    })


# =========================================================
# PREDICT
# =========================================================

@app.route("/predict", methods=["POST"])
def predict():

    try:
        data = request.get_json()

        if not data:
            return jsonify({
                "success": False,
                "error": "No input data received"
            }), 400

        # =================================================
        # CREATE EMPTY ROW WITH EXACT 105 FEATURES
        # =================================================

        input_data = pd.DataFrame(
            np.zeros((1, len(feature_columns))),
            columns=feature_columns
        )

        # =================================================
        # NUMERICAL FEATURES
        # =================================================

        numerical_features = [
            "Year",
            "Mileage_kmpl",
            "Engine_CC",
            "Horsepower",
            "Kms_Driven",
            "Insurance_Valid",
            "Service_History",
            "Accidents",
            "Tax_Paid",
            "Number_of_Doors",
            "Seats",
            "Registration_Age"
        ]

        for column in numerical_features:

            if column in data:

                value = data[column]

                if value != "":
                    input_data.loc[0, column] = float(value)

        # =================================================
        # BRAND
        # =================================================

        brand = str(
            data.get("Brand", "")
        ).strip()

        brand_column = "Brand_" + brand

        if brand_column in input_data.columns:
            input_data.loc[0, brand_column] = 1

        # Dataset also contains some brand values with
        # extra spaces. Handle those as well.

        brand_space_column = "Brand_ " + brand + " "

        if brand_space_column in input_data.columns:
            input_data.loc[0, brand_space_column] = 1

        # =================================================
        # MODEL
        # =================================================

        car_model = str(
            data.get("Model", "")
        ).strip()

        model_column = "Model_" + car_model

        if model_column in input_data.columns:
            input_data.loc[0, model_column] = 1

        # =================================================
        # FUEL TYPE
        # =================================================

        fuel_type = str(
            data.get("Fuel_Type", "")
        ).strip()

        fuel_column = "Fuel_Type_" + fuel_type

        if fuel_column in input_data.columns:
            input_data.loc[0, fuel_column] = 1

        # =================================================
        # TRANSMISSION
        # =================================================

        transmission = str(
            data.get("Transmission", "")
        ).strip()

        transmission_column = (
            "Transmission_" + transmission
        )

        if transmission_column in input_data.columns:
            input_data.loc[0, transmission_column] = 1

        # =================================================
        # OWNER TYPE
        # =================================================

        owner_type = str(
            data.get("Owner_Type", "")
        ).strip()

        owner_column = (
            "Owner_Type_" + owner_type
        )

        if owner_column in input_data.columns:
            input_data.loc[0, owner_column] = 1

        # =================================================
        # COLOR
        # =================================================

        color = str(
            data.get("Color", "")
        ).strip()

        color_column = "Color_" + color

        if color_column in input_data.columns:
            input_data.loc[0, color_column] = 1

        # =================================================
        # CITY
        # =================================================

        city = str(
            data.get("City", "")
        ).strip()

        city_column = "City_" + city

        if city_column in input_data.columns:
            input_data.loc[0, city_column] = 1

        # =================================================
        # FEATURE ENGINEERING
        # Same logic used during training
        # =================================================

        current_year = 2026

        input_data["Car_Age"] = (
            current_year - input_data["Year"]
        )

        input_data["Mileage_Engine"] = (
            input_data["Mileage_kmpl"]
            * input_data["Engine_CC"]
        )

        # Avoid division by zero

        input_data["Power_per_CC"] = np.where(
            input_data["Engine_CC"] != 0,
            input_data["Horsepower"]
            / input_data["Engine_CC"],
            0
        )

        # =================================================
        # HANDLE NaN / INFINITY
        # =================================================

        input_data = input_data.replace(
            [np.inf, -np.inf],
            0
        )

        input_data = input_data.fillna(0)

        # =================================================
        # EXACT FEATURE ORDER
        # =================================================

        input_data = input_data[feature_columns]

        # =================================================
        # RANDOM FOREST PREDICTION
        #
        # IMPORTANT:
        # NO SCALER HERE.
        # Tuned Random Forest was trained on unscaled data.
        # =================================================

        prediction = model.predict(input_data)

        predicted_price = float(prediction[0])

        # =================================================
        # RESPONSE
        # =================================================

        return jsonify({
            "success": True,
            "predicted_price": predicted_price
        })

    except Exception as e:

        print("Prediction Error:", str(e))

        return jsonify({
            "success": False,
            "error": str(e)
        }), 400


# =========================================================
# RUN SERVER
# =========================================================

if __name__ == "__main__":

    app.run(
        debug=False,
        port=5000
    )