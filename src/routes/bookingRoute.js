const express = require("express");
const { getBookingData ,getRenterBookingData, updatebookingStatus , deleteBooking } = require("../controllers/bookingController");
const router = express.Router();

// Define a route for the `getBookingData` function and map it to the new router:
router.get("/booking-data", getBookingData);
router.post("/booking-status-update", updatebookingStatus);
router.get("/renter-bookins", getRenterBookingData);
router.post("/booking-delete", deleteBooking);

module.exports = router;
