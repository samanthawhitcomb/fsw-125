const express = require('express')
const fruitsRouter = express.Router()

// Data
const inventories = [
    {
        type: "banana",
        brand: "fruit",
        price: ".50"
    },
    {
        type: "avocado",
        brand: "veggie",
        price: "1"
    },
    {
        type: "pear",
        brand: "fruit",
        price: ".50"
    },
    {
        type: "potato",
        brand: "veggie",
        price: "1"
    },
    {
        type: "apple",
        brand: "fruit",
        price: ".25"
    },
    {
        type: "green pepper",
        brand: "veggie",
        price: ".75"
    },
    {
        type: "lettuce",
        brand: "veggie",
        price: ".80"
    },
    {
        type: "grapes",
        brand: "fruit",
        price: "2"
    },
    {
        type: "strawberry",
        brand: "fruit",
        price: "4"
    },
    {
        type: "orange",
        brand: "fruit",
        price: ".75"
    },
    {
        type: "onion",
        brand: "veggie",
        price: ".50"
    },
    {
        type: "zucchini",
        brand: "veggie",
        price: ".50"
    },
    {
        type: "watermelon",
        brand: "fruit",
        price: "2"
    }
]

fruitsRouter.route("/")
    .get((req, res) => {
        res.send(inventory)
    })


fruitsRouter.route("inventory/brand")
    .get((req,res,next) => {
        const whatBrand = req.query.brand
        const fruitOrVeggies = inventories.filter(inventory => inventory.brand === whatBrand)
        if(fruitOrVeggies.length == 0){
            const error = new Error(`No fruits or veggies found with the brand of ${whatBrand}`)
            res.status(500)
            return next(error)
        }
        res.status(200).send(fruitOrVeggies)
    })

   
fruitsRouter.route("/price")
    .get((req,res,next) => {
        const price = req.query.price
        const fruitOrVeggies = inventories.filter(inventory => inventory.price === price)
        if(fruitOrVeggies.length == 0){
            const error = new Error(`No fruits or veggies found for ${price}`)
            res.status(500)
            return next(error)
        }
        res.status(200).send(fruitOrVeggies)
    })

fruitsRouter.route("/type")
    .get((req,res,next) => {
        const type = req.query.type
        const fruitOrVeggies = inventories.filter(inventory => inventory.type === type)
        if(fruitOrVeggies.length == 0){
            const error = new Error(`No fruits or veggies found with the type ${type}`)
            res.status(500)
            return next(error)
        }
        res.status(200).send(fruitOrVeggies)
    })


module.exports = fruitsRouter