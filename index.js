const express = require("express");
const req = require("express/lib/request");

const app = express();

const cars = [
  {
    id: 1,
    make: "Tesla",
    model: "x",
    year: 2023,
  },
  {
    id: 2,
    make: "mercedes",
    model: "g-wagon",
    year: 2021,
  },
  {
    id: 3,
    make: "nissan",
    model: "rogue",
    year: 2018,
  },
  {
    id: 4,
    make: "audi",
    model: "whatever",
    year: 2020,
  },
  {
    id: 5,
    make: "gmc",
    model: "f150",
    year: 2018,
  },
];

//this command gets all cars
app.get("/", (request, response) => {
  response.send(cars);
});

//this gets only my future Audi
app.get("/car/:carId", (request, response) => {
  console.log("this is my request.params ++++++++", request.params);

  //extracting carId from request.params
  const { carId } = request.params;
  response.send(cars[carId].make);
});

//we want our application to start "listening"
app.listen(3000, () => {
  console.log("API Listening in on port 3000!");
});

//this is just a comment