const express = require ("express")
const req = require("express/lib/request")

const app = express()

const cars =[
{id: 1, make: 'Tesla', year: '2023', model: 'x'},
{id: 2, make: 'mercedes', year: 2022, model: 'G-Wagon'},
{id: 3, make: 'nissan', year: 2025, model: 'G-Wagon'},
{id: 4, make: 'audi', year: 2008, model: 'G-Wagon'},
{id: 5, make: 'gmc', year: 2009, model: 'G-Wagon'},
]

//get all cars
app.get('/', (request, response) => {
    response.send(cars)
})

//get only my future audi
app.get('/cars/:carsId', (request, response) => {
    console.log('this is my request.params +++++', request.params)

    //extracting CarsId from request.params
    const { carsId } = request.params

    response.send(cars[carsId])
})

app.listen(3000, () => {
    console.log('API listening on port 3000!')
})
