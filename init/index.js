// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");


// const MONGO_URL ="mongodb://127.0.0.1:27017/drone";

// main().then(()=>{
//     console.log("Connected to MongoDB");
// }).catch((err)=>{
//     console.log(err);
// }
// );

// async function main(){
//     await mongoose.connect(MONGO_URL);
// }

// const initDB = async()=>{
//      await Listing.deleteMany({});
//      await Listing.insertMany(initData.data);
//      console.log("data was intialized");
// }

// initDB();


const mongoose = require("mongoose");
const initData = require("./data.js"); // Assuming this file contains valid data
const Listing = require("../models/listing.js"); // Ensure Listing model is correct

// MongoDB Connection URL
const MONGO_URL = "mongodb://127.0.0.1:27017/drone";

// Function to connect to MongoDB
async function main() {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Connection error: ", err);
    }
}

// Initialize database by deleting all records and inserting new data
const initDB = async () => {
    try {
        // Delete all existing listings
        await Listing.deleteMany({});
        console.log("Existing data deleted.");

        // Log data to ensure no invalid _id values
        console.log("Data to be inserted: ", initData.data);

        // Insert new data (omit _id to let Mongoose generate it automatically)
        await Listing.insertMany(initData.data.map(item => ({
            ...item,
            _id: undefined // Ensure Mongoose generates a new _id for each document
        })));
        console.log("Data was initialized successfully.");
    } catch (err) {
        console.error("Error initializing database: ", err);
    }
}

// Run the main function and then initialize the database
main().then(() => {
    initDB();
}).catch(err => {
    console.error("Initialization error: ", err);
});
