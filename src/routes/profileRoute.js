const express = require("express");
const { personalInfoRouter, addAboutInfo, addIncomeInfo } = require("../controllers/profileController");
const router = express.Router();


router.post("/personal-info", personalInfoRouter);
router.post("/about-info", addAboutInfo);
router.post("/income-info", addIncomeInfo);






module.exports = router;

