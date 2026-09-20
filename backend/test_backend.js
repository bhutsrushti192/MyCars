const carData = {
    Brand: "Toyota",
    Model: "Corolla",
    Year: 2020,
    Mileage_kmpl: 18,
    Engine_CC: 1500,
    Horsepower: 120,
    Fuel_Type: "Petrol",
    Transmission: "Manual",
    Owner_Type: "First",
    Color: "White",
    City: "Mumbai",
    Kms_Driven: 50000,
    Insurance_Valid: 1,
    Service_History: 1,
    Accidents: 0,
    Tax_Paid: 1,
    Number_of_Doors: 4,
    Seats: 5,
    Registration_Age: 5
};

async function testBackend() {

    try {

        const response = await fetch(
            "http://localhost:3000/predict",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(carData)
            }
        );

        const result = await response.json();

        console.log("===== BACKEND RESPONSE =====");
        console.log(result);

    } catch (error) {

        console.log("Backend Error:", error);

    }
}

testBackend();