const express = require("express")
const app = express()

const users = [
    { name: "Sami", age: 10},
    { name: "Joe",  age: 40},
    { name: "Bob",  age: 80}
]
app.get("/users", (req, res) => {
    res.send(users)
})
const description = [
    { height: "4ft"},
    { height: "6ft"},
    { height: "5ft 7in"}
]
app.get("/description", (req, res) => {
    res.send(description)
})
const other = [
    { Hair: "long"},
    { Hair: "short"},
    { Hair: "short"}
]
app.get("/other", (req, res) => {
    res.send(other)
})
// app.put()
// app.post()
// app.delete()

    //1:PORT    2: CallBack
app.listen(7000, () => {
    console.log("the server is running on port 7000")
})