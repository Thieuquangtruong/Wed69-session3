const express = require("express")
const app = express()
const PORT = 8888
const router = require('./router')
const morgan = require("morgan")

app.use(morgan("combined"))
app.use(express.json()) //mid
app.use(router)

app.listen(PORT, ()=>{
    console.log("sever is listening on localhost:"+PORT)
})