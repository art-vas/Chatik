"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    id_message:{type:String},
    date: {type: Date},
    content: {type: String},
    username: {type: String}
}, {
    versionKey: false,
    collection: "MessageCollection"
});

module.exports = mongoose.model('MessageModel', MessageSchema);
