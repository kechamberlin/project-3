const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AttorneySchema = new Schema({
    name: {
        type: String,
    },
    practice: {
        type: String
    }
});

const AssociateAttorney = mongoose.model("associateattorneys", AttorneySchema);

module.exports = AssociateAttorney;