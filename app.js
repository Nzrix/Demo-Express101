const express = require("express")
const bodyParser = require("body-parser");
const path = require("path")

const app = express()

// many router
const routerAddData = require("./routes/route-add-data.js")

// จะใช้ engine อะไร กับ กะใช้ folder ไหน ?
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")))
app.use(routerAddData.routers)

app.listen(3000, () => {
    console.log("Server runing on port: http://localhost:3000/")
})