const express = require('express')
const app = express()
const {v4: uuidv4} = require('uuid')


//Middlware

app.use(express.json())

//  Routes  //
app.use("/todo", require("./routes/todoRouter.js"))

//  Server Listen //

app.listen(9000, () => {
    console.log("App is listening on port 9000")
})