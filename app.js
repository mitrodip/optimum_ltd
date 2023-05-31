import express, { urlencoded } from "express";
import dotenv from "dotenv"
import dBconnect from "./db/mongCt.js";
import router from "./router/routs.js";
import admin from "./router/router1.js";
const app = express()
dotenv.config()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/", express.static("public"))
app.use("/des", router)
app.use("/", admin)


const Port = process.env.PORT || 3000
const Url = process.env.URL
app.set("view engine", "ejs")


app.listen(Port, async() => {
    await dBconnect(Url)
    console.log(`connnect.....800 `)
})