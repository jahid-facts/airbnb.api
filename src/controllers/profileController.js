const Income = require("../models/fileModel");
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
  //  const { userId } = req.body;
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

 console.log(values);
// Create a new instance of the Income model
const newIncome = new Income({
  incomeSource: values.incomeSource,
  officeName: values.officeName,
  workplaceLocation: values.workplaceLocation,
  file: {
    data: values.file.data,
    contentType: values.file.contentType
  }
});

 try {
   const mongores = await User.findByIdAndUpdate(
       userId,
       { $set: { "personalInfo.incomeSources": newIncome } },
       { new: false },
   );
   
   res
     .status(200).send('Object saved successfully to MongoDB')
     .json({ message: "Server returned Saved, addIncomeInfo", mongores });
 } catch (err) {
   console.error(err);
   console.log(err.message);
   res.status(500).json({ message: "Internal server error" });
 }
};

// /address-info
exports.addressHistoryInfo = async (req, res) => {
  const { userId, values }=req.body;
//  const { userId } = req.body;
 console.log(userId);
 try {
   const mongores = await User.findByIdAndUpdate(
       userId,
       { $set: { "personalInfo.addressHistory": values } },
       { new: false },
   );

   res
     .status(200)
     .json({ message: "Server returned Saved, addressHistoryInfo", mongores });
 } catch (err) {
   console.error(err);
   console.log(err.message);
   res.status(500).json({ message: "Internal server error" });
 }
};



// /emergency-info
exports.emergencyContactInfo = async (req, res) => {
  const { userId, values }=req.body;
//  const { userId } = req.body;
 console.log(userId);
 try {
   const mongores = await User.findByIdAndUpdate(
       userId,
       { $set: { "personalInfo.emergencyContact": values } },
       { new: false },
   );

   res
     .status(200)
     .json({ message: "Server returned Saved, emergencyContactInfo", mongores });
 } catch (err) {
   console.error(err);
   console.log(err.message);
   res.status(500).json({ message: "Internal server error" });
 }
};










// const yourSchema = new Schema({
//   name: String,
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   file: Buffer
// });

// const YourModel = mongoose.model('YourModel', yourSchema);




























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