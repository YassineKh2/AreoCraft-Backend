const express = require("express");
const router = express.Router();

router.get("/public", (req,res)=>{
    res.send("Hello !")
});


module.exports = router;