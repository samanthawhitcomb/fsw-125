const express = require('express');
const app = express();

app.use(express.json())

app.use("/bounty", require('./bountyRoute.js'))

app.listen(7000, () => console.log("App is listening on Port 7000!"));