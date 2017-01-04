/**
 * Created by arnoc on 4/01/2017.
 */

var express =  require('express'); // eenvoudige  webserver in node js
var parser = require('body-parser'); // extensie op express voor eenvoudig body uit te lezen (slaat input op als javascript object)

var app = express();
app.use (parser.json());

app.get('/', function (request, response) {
    response.send("hello world!");
});

var Plaats = function(plaatsId, plaatsNaam, verdieping, gangTF){
    this.plaatsId = plaatsId;
    this.plaatsNaam = plaatsNaam;
    this.verdieping = verdieping;
    this.gangTF = gangTF;
};

app.get('/plaatsen', function (request, response) {
    var plaatsen = [new Plaats(1, 'lokaal1', 3, false), new Plaats (2, 'lokaal2', 3, false)];
    response.send(plaatsen);
});

app.listen(4321);