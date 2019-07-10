"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RoomsSchema = new Schema({
    id_user: {type: String},
    id_message: {type: String},
}, {
    versionKey: false,
    collection: "RoomsCollection"
});

module.exports = mongoose.model('RoomsModel', RoomsSchema);