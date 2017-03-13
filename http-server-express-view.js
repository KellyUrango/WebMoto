/**
 * http://usejsdoc.org/
 */
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var data = require('./models/data');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('view cache', false);

app.get('/', function(req, res, next){
	res.render('index');
});

app.get('/tiendaelectrica', function(req, res, next){
	res.render('tiendaelectrica', {pollito: data.getAllElectrica()});
});


app.get('/tiendagasolina', function(req, res, next){
    res.render('tiendagasolina', {pollito: data.getAllGasolina()});
});

app.get('/tiendagasolina/:categoria', function(req, res, next){
    res.render('tiendagasolina',{pollito:data.getCategoriaGasolina(req.params.categoria)});
});


app.get('/tiendaelectrica/:categoria', function(req, res, next){
    res.render('tiendaelectrica',{pollito:data.getCategoriaElectrica(req.params.categoria)});
});


// rutas para contacto
app.get('/contacto', function(req,res,next){
	res.render('contacto');
});



// Ofrecer archivos estáticos si es necesario
app.use(express.static(__dirname + '/public'));

var hostname = 'localhost';
var port = 3000;

app.listen(port, hostname, function(){
	console.log('Servidor corriendo en http://'+hostname+':'+port+'/');
});