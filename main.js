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
        response.send(plaatsen);
    });
});

app.listen(4321);