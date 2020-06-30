const express = require('express');
const app = express();

app.use(express.json());

app.use("/bounty", require('./bountyRouter.js'));

app.listen(7002, () => console.log("App is listening on Port 7002!"));