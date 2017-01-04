/**
 * Created by arnoc on 4/01/2017.
 */
var mongoose = require("mongoose");

var CriteriaSchema = mongoose.Schema({
    criteriumId: {
        type: String,
        required: true,
        unique: true
    },
    minAantalPersonen: {
        type: String,
        required: true
    },
    treshold: {
        type: String,
        required: true
    }
});

var Criteria = mongoose.model ('Criteria', CriteriaSchema);

module.exports = {
    listAllCriteria: function (callback) {
        Criteria.find(callback);
    },
    findCriterium: function(criteriumId, callback) {
        Criteria.find({criteriumId: criteriumId}, callback);
    },
    createCriterium: function(criterium, callback) {
        Criteria.create(criterium, callback);
    },
    updateCriterium: function (criteriumId, newcriterium, callback) {
        Criteria.findOneAndUpdate({criteriumId: criteriumId}, newcriterium, callback);
    }

};