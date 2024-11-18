const mongoose = require("mongoose");
const hospital_schema = new mongoose.Schema({
    hospital_applicant_name: String,
    hospital_name: String,
    identity_type: String,
    identity_card: [],
    hospital_contact_number: String,
    hospital_email: String,
    hospital_pincode: String,
    hospital_address: String,
    hospital_photoes: [],
})

const Hospitals = mongoose.model("hospitals",hospital_schema);
module.exports = Hospitals;