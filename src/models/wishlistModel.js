const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AllProperty",
      },

});

const Wishlist = mongoose.model("Wishlists", wishlistSchema);

module.exports = Wishlist;


