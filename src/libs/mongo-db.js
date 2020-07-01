const mongoose = require("mongoose")
require("../apps/models/admin")
const uris = "mongodb://127.0.0.1:27017/Hit_face"

//uris: link connect toi mongodb
mongoose.connect(uris)