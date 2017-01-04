/**
 * Created by arnoc on 4/01/2017.
 */
// begonnen met npm install mongodb en npm install mongoose
// omdat gebruik maken van mongoose blijkbaar the way to go is

var mongoose = require("mongoose");

var PlaatsenSchema = mongoose.Schema({
    plaatsId: {
        type: String,
        required: true,
        unique: true
    },
    plaatsNaam: {
        type: String,
        required: true
    },
    verdieping: {
        type: String,
        required: true
    },
    gangTF: {
        type: Boolean,
        required: true
    }

});

var Plaatsen = mongoose.model ('Plaatsen', PlaatsenSchema);

module.exports = {
    listAllPlaatsen: function (callback) {
        Plaatsen.find(callback);
    },
    findPlaats: function(plaatsId, callback) {
        Plaatsen.find({plaatsId: plaatsId}, callback);
    },
    createPlaats: function(plaats, callback) {
        Plaatsen.create(plaats, callback);
    },
    updatePlaats: function (plaatsId, newplaats, callback) {
        Plaatsen.findOneAndUpdate({plaatsId: plaatsId}, newplaats, callback);
    }

};