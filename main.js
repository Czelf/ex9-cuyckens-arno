/**
 * Created by arnoc on 4/01/2017.
 */

//benodigdheden

var express =  require('express');                  // eenvoudige  webserver in node js
var parser = require('body-parser');                // extensie op express voor eenvoudig body uit te lezen (slaat input op als javascript object)

var app = express();
app.use (parser.json());

var mongoose = require('mongoose');                 // mongoose is volgens andere studenten the way to go
mongoose.connect("mongodb://localhost/examen");     // connectie maken met de mongodb database

//inladen data uit storages

var dalPlaatsen = require("./StoragePlaatsen");
var dalCriteria = require("./StorageCriteria");

//--------------------------------------------
    //  source plaatsen
//--------------------------------------------

var Plaats = function(plaatsId, plaatsNaam, verdieping, gangTF){
    this.plaatsId = plaatsId;
    this.plaatsNaam = plaatsNaam;
    this.verdieping = verdieping;
    this.gangTF = gangTF;
};

app.get('/plaatsen', function (request, response) {
    dalPlaatsen.listAllPlaatsen(function (err, Plaats) {
        if (err) {
            throw err;
        }
        response.send(Plaats);
    });
});


//--------------------------------------------
//  source criteria
//--------------------------------------------

var criterium = function(criteriumId, minAantalPersonen, threshold) {
    this.criteriumId = criteriumId;
    this.minAantalPersonen = minAantalPersonen;
    this.threshold = threshold;
};

app.get('/criteria', function (request, response) {
    dalCriteria.listAllCriteria(function (err, Criterium) {
        if (err) {
            throw err;
        }
        response.send(Criterium);
    });
});

app.put("/criteria/:criteriumId", function (request, response) {
    var Criterium = new criterium(
        request.body.criteriumId,
        request.body.minAantalPersonen,
        request.body.treshold
    );
    dalCriteria.updateCriterium(request.params.criteriumId, Criterium , function (err, drone) {
        if (err) {
            console.log(err);
        }
        response.send(Criterium);
        console.log("Criterium Updated");
    });
});

app.listen(4321);