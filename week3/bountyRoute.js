const express = require('express');
const bountyRoute = express.Router();
const {v4:uuid} =require('uuid');


const bounty = [
    {
        firstName: "Buzz",
        lastName: "Lightyear",
        living: true,
        bountyAmount: 6000,
        type: "Space Ranger",
        _ID: uuid()
    },
    {
        firstName: "Woody",
        lastName: "Pride",
        living: true,
        bountyAmount: 35000,
        type: "Sheriff",
        _ID: uuid()
    },
    {
        firstName: "Bazooka",
        lastName: "Jane",
        living: true,
        bountyAmount: 1000,
        type: "Cowgirl",
        _ID: uuid()
    },
    {
        firstName: "Bo",
        lastName: "Peep",
        living: true,
        bountyAmount: 300,
        type: "Shepherd",
        _ID: uuid()
    },
    {
        firstName: "Tyrannosaurus",
        lastName: "Rex",
        living: true,
        bountyAmount: 80000,
        type: "Dinosaur",
        _ID: uuid()
    }
]

// Routes
bountyRoute.route("/")
    .get((req, res) => {
        res.send(bounty)
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._ID = uuid();
        bounties.push(newBounty)
        res.send(`Added ${newBounty.firstName} ${newBounty.lastName} to the bounty list.`)
    });

bountyRoute.route("/:ID")
    .get((req, res) => {
        res.send(bounty.filter(req.params._ID))
    })
    .delete((req, res) => {
        res.send(`DELETE on /bounty/${req.params._ID} endpoint`)
    })

module.exports = bountyRoute
