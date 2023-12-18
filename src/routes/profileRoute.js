const express = require("express");
const multer = require("multer");


const { uploadAvatar,personalInfoRouter, addAboutInfo, addIncomeInfo, addressHistoryInfo, emergencyContactInfo} = require("../controllers/profileController");
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(
        null,
        `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      );
    },
  });

  const path = require('path');
  const upload = multer({ storage });


router.post("/users/avatar", upload.single('avatar'), uploadAvatar);
router.post("/personal-info", personalInfoRouter);
router.post("/about-info", addAboutInfo);
router.post("/income-info",upload.single('file'), addIncomeInfo);
router.post("/address-info", addressHistoryInfo);
router.post("/emergency-info", emergencyContactInfo);





module.exports = router;

