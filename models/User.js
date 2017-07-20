/**
 * Created by sahaque on 7/20/2017.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    email: String,
    pwd: String
});