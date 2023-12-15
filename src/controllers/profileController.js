const User = require("../models/userModel");

exports.personalInfoRouter = async (req, res) => {
   const { userId, values }=req.body;
  //const { userId } = req.body;
  console.log(userId);
  try {
    const mongores = await User.findByIdAndUpdate(
        userId,
        { $set: { personalInfo: values } },
        { new: true },
    );

    res
      .status(200)
      .json({ message: "Server returned Saved, updatePersonalInfo", mongores });
  } catch (err) {
    console.error(err);
    console.log(err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.addAboutInfo = async (req, res) => {
    const { userId, values }=req.body;
   //const { userId } = req.body;
   console.log(userId);
   try {
     const mongores = await User.findByIdAndUpdate(
         userId,
         { $set: { "personalInfo.about": values.aboutMe } },
         { new: false },
     );
 
     res
       .status(200)
       .json({ message: "Server returned Saved, updatePersonalInfo", mongores });
   } catch (err) {
     console.error(err);
     console.log(err.message);
     res.status(500).json({ message: "Internal server error" });
   }
 };




//  /income-info
exports.addIncomeInfo = async (req, res) => {
  const { userId, values }=req.body;
 //const { userId } = req.body;
 console.log(userId);
 try {
   const mongores = await User.findByIdAndUpdate(
       userId,
       { $set: { "personalInfo.incomeSources": values } },
       { new: false },
   );

   res
     .status(200)
     .json({ message: "Server returned Saved, updatePersonalInfo", mongores });
 } catch (err) {
   console.error(err);
   console.log(err.message);
   res.status(500).json({ message: "Internal server error" });
 }
};


// const express = require('express');
const multer = require('multer');
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const upload = multer({ dest: 'uploads/' });

const yourSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  file: Buffer
});

const YourModel = mongoose.model('YourModel', yourSchema);

mongoose.connect('mongodb://localhost/yourDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.post('/upload', upload.single('file'), (req, res) => {
  const yourObject = new YourModel({
    name: req.body.name,
    email: req.body.email,
    file: req.file.buffer
  });
  yourObject.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error occurred while saving the object to MongoDB');
    } else {
      res.status(200).send('Object saved successfully to MongoDB');
    }
  });
});


























exports.addAdressHistoryInfo = async (req, res) => {
  const { userId, values }=req.body;
 //const { userId } = req.body;
 console.log(userId);
 try {
   const mongores = await User.findByIdAndUpdate(
       userId,
       { $set: { "personalInfo.adressHistory": values } },
       { new: false },
   );

   res
     .status(200)
     .json({ message: "Server returned Saved, updatePersonalInfo", mongores });
 } catch (err) {
   console.error(err);
   console.log(err.message);
   res.status(500).json({ message: "Internal server error" });
 }
};