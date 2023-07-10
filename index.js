const express = require("express")
const app = express()
const PORT = 8888
const router = require('./router')
const morgan = require("morgan")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()
app.use(morgan("combined"))
app.use(cors({
    origin: ["http://localhost:1000"]
}))
app.use(express.json()) //mid
app.use(router)

app.listen(PORT, ()=>{
    console.log("sever is listening on localhost:"+PORT)
})