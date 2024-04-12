import mongoose from "mongoose";

const textSchema = new mongoose.Schema({
    "MOBILE NO": String,
    "CITY": String,
    "NAME": String,
    "PAN": String,
    "EMAIL": String,
    "COMPANY NAME": String,
    "EMPLOYMENT TYPE": String,
    "PINCODE": String,
    "DESIGNATION": String,
    "OFFICIAL EMAIL ID": String,
    "DETAILS1": String,
    "DETAILS2": String,
    "REMARKS": String,
    "WHATS APP": String,
    "DATE": String,
    "SMS": String,
    "DATE_3": String,
    "CALLING": String,
    "DATE_4": String,
    "LOGIN DONE": String,
    "LOGIN BANK": String,
    "BANKS STATUS": String,
    "LOGIN DONE_1": String,
    "LOGIN BANK 2": String,
    "BANKS STATUS_1": String
}, { strict: false, timestamps: true });

const Test = mongoose.model("Test", textSchema);

export default Test;
