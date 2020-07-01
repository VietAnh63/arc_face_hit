const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    admin_mail: String,
    admin_fullname: String,
    admin_pass: String,
    admin_level: Number
})

mongoose.model("Admin", AdminSchema, "Admins")