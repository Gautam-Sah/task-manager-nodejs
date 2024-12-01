const express = require("express")
const app = express()
const tasks = require("./routes/tasks.js")
const connectDB = require("./DB/connect.js")
require("dotenv").config()

app.use(express.static("./public"))
app.use(express.json())

app.use("/api/v1/tasks", tasks)

const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.Mongo_URI)
    app.listen(port, () => {
      console.log("server is listening....")
    })
  } catch (err) {
    console.log(err)
  }
}

start()
