const express = require ('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));

app.use("/todos", require("./todoRouter.js"));

app.listen(7003, () => console.log("App is running on Port 7003"));