const express = require("express");
const {
  addProperty,
  getAllProperties,
  getUserProperties,
  getProperty,
  deleteProperty, 
  updateProperty,
  getPropertyAllDetails,
  getActiveProperties,
  addWishlistsProperty,
  getWishlistsProperty,
  deletePropertyfromWishlist,
} = require("../controllers/propertyController");
const router = express.Router();

router.post("/add-property", addProperty);
router.post("/wishlists", addWishlistsProperty); 
router.get("/getPropertiesFromWishlist", getWishlistsProperty)
router.delete("/deletePropertyfromWishlist", deletePropertyfromWishlist)


router.get("/getAllProperties", getAllProperties);
router.get("/getActiveProperties", getActiveProperties);
router.get("/user/properties/:id", getUserProperties);
router.get("/edit/property/:id", getProperty);
router.get("/property/details/:id", getPropertyAllDetails);

// Route for updating a property by ID
router.put("/properties/:id", updateProperty);  
// Route for deleting a property by ID
router.delete("/properties/:id", deleteProperty);

module.exports = router;
