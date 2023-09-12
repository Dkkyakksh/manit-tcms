const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req,res)=>{
    res.sendFile("feedback.html", {root:"./public"});
})

module.exports = router;