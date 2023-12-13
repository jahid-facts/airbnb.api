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