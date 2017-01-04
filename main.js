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

var Book = function(id, name){
    this.id = id;
    this.name = name;
};

app.get('/books', function (request, response) {
    var books = [new Book(1, 'harry potter'), new Book (2, 'Blinker')];
    response.send(books);
});

app.listen(4321);