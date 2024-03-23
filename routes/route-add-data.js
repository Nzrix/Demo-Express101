const express = require("express")
const router = express.Router()

// ตัวแปรข้อมูลทั้งหมดนะจีะ
data = []

router.get("/", (req, res, next) => {
    res.render("home", {
        title: "แปดอันดับแรกพรีเมียร์",
        data: data
    })
})

router.get("/add-data", (req, res, next) => {
    res.render("add-data", {})
})

router.post("/add-data", (req, res, next) => {
    console.log(req.body)
    data.push([req.body["index"],req.body["team"],req.body["status"]])
    res.redirect("/")
})

exports.routers = router;