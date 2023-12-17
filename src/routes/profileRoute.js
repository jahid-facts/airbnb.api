const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { personalInfoRouter, addAboutInfo, addIncomeInfo, addressHistoryInfo, emergencyContactInfo} = require("../controllers/profileController");
const router = express.Router();


router.post("/personal-info", personalInfoRouter);
router.post("/about-info", addAboutInfo);
router.post("/income-info",upload.single('file'), addIncomeInfo);
router.post("/address-info", addressHistoryInfo);
router.post("/emergency-info", emergencyContactInfo);





module.exports = router;

