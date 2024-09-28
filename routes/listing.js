// const express = require("express");
// const router = express.Router();
// const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const { listingSchema, reviewSchema } = require("../schema.js");
// const Listing = require("../models/listing");
// const multer = require('multer');

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads'); // Specify your desired upload directory
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage: storage });

// // validation for schema middleware
// const validateListing = (req, res, next) => {
//   const { error } = listingSchema.validate(req.body);
//   if (error) {
//     if (error.details) {
//       let errMsg = error.details.map((el) => el.message).join(",");
//       throw new ExpressError(400, errMsg);
//     } else {
//       throw new ExpressError(400, "Invalid request");
//     }
//   }
//   next();
// };

// // index route
// router.get("/", async (req, res) => {
//   const allListings = await Listing.find({});
//   res.render("listings/index.ejs", { allListings });
// });

// // new route
// router.get("/new", (req, res) => {
//   res.render("listings/new");
// });

// // show route
// router.get("/:id", async (req, res) => {
//   let { id } = req.params;
//   const listing = await Listing.findById(id).populate("reviews");
//   res.render("listings/show.ejs", { listing });
// });

// // create new listings
// router.post("/", validateListing, wrapAsync(async (req, res, next) => {
//   const newListing = new Listing(req.body.listing);
//   await newListing.save();
//   res.redirect("/listings");
// }));

// // edit route
// router.get("/:id/edit", wrapAsync(async (req, res) => {
//   let { id } = req.params;
//   const listing = await Listing.findById(id);
//   res.render("listings/edit.ejs", { listing });
// }));

// // update route
// router.put("/:id", validateListing, wrapAsync(async (req, res) => {
//   let { id } = req.params;
//   await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//   res.redirect(`/listings/${id}`);
// }));

// // edit route
// router.get("/:id/edit", wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     const listing = await Listing.findById(id);
//     res.render("listings/edit.ejs", { listing });
//   }));
  
// // delete route
// router.delete("/:id", wrapAsync(async (req, res) => {
//   let { id } = req.params;
//   let deleteListing = await Listing.findByIdAndDelete(id);
//   console.log(deleteListing);
//   res.redirect("/listings");
// }));

// module.exports = router;



const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listing");
const multer = require('multer');
const path = require('path'); // Import path

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Specify your desired upload directory
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Validation middleware for listing schema
const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }
  next();
};

// Index route - Get all listings
router.get("/", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

// New route - Render form for creating new listings
router.get("/new", (req, res) => {
  res.render("listings/new");
});

// Show route - Display a specific listing
router.get("/:id", wrapAsync(async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews");
  res.render("listings/show.ejs", { listing });
}));

// Create new listing with image upload
router.post("/", upload.single('image'), validateListing, wrapAsync(async (req, res, next) => {
  const newListing = new Listing(req.body.listing);
  if (req.file) {
    newListing.image = req.file.path; // Save image path
  }
  await newListing.save();
  res.redirect("/listings");
}));

// Edit route - Render edit form for a specific listing
router.get("/:id/edit", wrapAsync(async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}));

// Update route - Update listing with optional image upload
router.put("/:id", upload.single('image'), validateListing, wrapAsync(async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  // Update listing fields
  Object.assign(listing, req.body.listing);

  // Handle new image upload
  if (req.file) {
    listing.image = req.file.path;
  }

  await listing.save();
  res.redirect(`/listings/${id}`);
}));

// Delete route - Delete a specific listing
router.delete("/:id", wrapAsync(async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
}));

module.exports = router;
