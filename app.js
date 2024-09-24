const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
// adding middleware
const bodyParser = require('body-parser');
const  ejsMate = require('ejs-mate');
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./schema.js");
const Review = require("./models/review.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// bas yhi tk hai

let MONGO_URL ="mongodb://127.0.0.1:27017/drone";

main().then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
}
);

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended :true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{
    res.send("Hello World");
});

// validation for schema middleware
const validateListing = (req,res,next)=>{
    let error = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400,errMsg);
    }
    console.log(error);

    if(error){
        throw new ExpressError(400,error);
    }else{
        next();
    }

}

// index route

app.get("/listings", async(req,res)=>{
const allListings = await Listing.find({})
res.render("listings/index.ejs", {allListings});
});


// new route

app.get("/listings/new",(req,res)=>{
    res.render("listings/new");
});


// show route
app.get("/listings/:id", async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});


// create new listings

app.post("/listings", validateListing,wrapAsync(async(req,res,next)=>{
    // let listing = req.body.listing;
    // console.log(listing);
    // try{
    // if(!req.body.listing){
    //     throw new ExpressError(400,"Send valid data for listing");
    // }


    // let result = listingSchema.validate(req.body);
    // console.log(result);

    // if(result.error){
    //     throw new ExpressError(400,result.error);
    // }



    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
    // }
    // catch(err){
    //     next();
    // }
    //  const newListing = new Listing(req.body.listing);
    // await newListing.save();
    // res.redirect("/listings");

}));

// edit route

app.get("/listings/:id/edit", wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));

// update route

app.put("/listings/:id", validateListing,wrapAsync(async(req,res)=>{
    let {id} =req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}));

// delete route
app.delete("/listings/:id", wrapAsync(async(req,res)=>{
    let {id} = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    res.redirect("/listings");
}));


// reviews
// post route
app.post("/listings/:id/reviews",async(req,res)=>{
   let listing= await Listing.findById(req.params.id);
   let newReview = new Review(req.body.review);

   listing.reviews.push(newReview);

   await newReview.save();
   await listing.save();

//    console.log("new review saved");
//    res.send("new review added");

   res.redirect(`/listings/${listing._id}`);
});
// app.get("/testListing",async(req,res)=>{
//     let SampleListing = new Listing({
//         "title": "Sample Listing",
//         "price": 1000.00,
//         });
//         await SampleListing.save();
//         console.log("same was saved");
//         res.send("successfully added");
//     });

app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"page not fount"));
});

// custom error handling
app.use((err,req,res,next)=>{
    let{statusCode=500,message="something went wrong"} = err;
    res.status(statusCode).render("listings/error.ejs",{message});
     console.log("something went wrong!");

});

app.listen(8080,()=>{
    console.log("server is running on port 8080");
});