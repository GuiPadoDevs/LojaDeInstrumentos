const express = require('express')
const app = express()

app.use(express.json())

const cors = require("cors")
app.use(cors({origin: "*"}))

require("./routes/produtos")(app)


app.listen( 3001 , function() {

    console.log("Servidor ligado")
} )