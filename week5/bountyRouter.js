const express = require('express')
const bountyRouter = express.Router()
const {uuid} = require("uuidv4")


const bounties = [
    {
        firstName: "Buzz",
        lastName: "Lightyear",
        living: true,
        bountyAmount: 6000,
        type: "Space Ranger",
        _id: uuid()
    },
    {
        firstName: "Woody",
        lastName: "Pride",
        living: true,
        bountyAmount: 35000,
        type: "Sheriff",
        _id: uuid()
    },
    {
        firstName: "Bazooka",
        lastName: "Jane",
        living: true,
        bountyAmount: 1000,
        type: "Cowgirl",
        _id: uuid()
    },
    {
        firstName: "Bo",
        lastName: "Peep",
        living: true,
        bountyAmount: 300,
        type: "Shepherd",
        _id: uuid()
    },
    {
        firstName: "Tyrannosaurus",
        lastName: "Rex",
        living: true,
        bountyAmount: 80000,
        type: "Dinosaur",
        _id: uuid()
    }
]

// Routes
bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty)
        res.send(newBounty)
    });

bountyRouter.route("/:bountyId")
    .get((req, res) => {
        const bountyId = req.params.bountyId
        const foundBounty = bounties.find(bounty => bounty._id === bountyId)
        res.send(foundBounty)
    })
    .put((req, res) => {
        const bountyId = req.params.bountyId
        const newBounty = req.body
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bounties[bountyIndex], newBounty)
        res.send(updatedBounty)
    })
    .delete((req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send(`Successfully deleted bounty...`)
    });

module.exports = bountyRouter