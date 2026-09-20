import json
import urllib.request

test_data = {
    "Brand": "Toyota",
    "Model": "Corolla",
    "Year": 2020,
    "Mileage_kmpl": 18,
    "Engine_CC": 1500,
    "Horsepower": 120,
    "Fuel_Type": "Petrol",
    "Transmission": "Manual",
    "Owner_Type": "First",
    "Color": "White",
    "City": "Mumbai",
    "Kms_Driven": 50000,
    "Insurance_Valid": 1,
    "Service_History": 1,
    "Accidents": 0,
    "Tax_Paid": 1,
    "Number_of_Doors": 4,
    "Seats": 5,
    "Registration_Age": 5
}

data = json.dumps(test_data).encode("utf-8")

request = urllib.request.Request(
    "http://127.0.0.1:5000/predict",
    data=data,
    headers={"Content-Type": "application/json"},
    method="POST"
)

try:
    with urllib.request.urlopen(request) as response:
        result = response.read().decode("utf-8")

        print("===== CAR PRICE PREDICTION =====")
        print(result)

except Exception as e:
    print("API Error:", e)