/**
 * Created by sahaque on 7/20/2017.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Message', {
    msg: String,
    user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});