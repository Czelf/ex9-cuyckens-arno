/**
 * Created by arnoc on 4/01/2017.
 */

var express =  require('express'); // eenvoudige  webserver in node js
var parser = require('body-parser'); // slaat input op als javascript object

var app = express();
app.use (parser.json());

console.log("hello world");

app.listen(4321);