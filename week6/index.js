const express = require('express')
const app = express()
const morgan = require('morgan')

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use("/inventory", require("./fruitsRouter.js"))

// Error Handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(7000, () => console.log("App is running on port 7000!"))