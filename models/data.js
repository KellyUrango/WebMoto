/**
 * http://usejsdoc.org/
 */
var datosElectrica = [
    {"nombre": "ffffffffffff", "precio": "15.000", "tipo": "sport", "img": "http://localhost:3000/img/moto-03.jpg"},
    {"nombre": "agggggggggg", "precio": "15.000", "tipo": "scooter", "img": "http://localhost:3000/img/moto-03.jpg"},
    {"nombre": "aslddddd", "precio": "15.000", "tipo": "urbana", "img": "http://localhost:3000/img/moto-03.jpg"},
    {"nombre": "fsdfsd", "precio": "15.000", "tipo": "escala", "img": "http://localhost:3000/img/moto-03.jpg"}
];

var datosGasolina = [
    {"nombre": "una", "precio": "11.000", "tipo": "urbana", "img": "http://localhost:3000/img/moto-03.jpg"},
    {"nombre": "Dos Dos", "precio": "12.000", "tipo": "urbana", "img": "http://localhost:3000/img/moto-03.jpg"},
    {"nombre": "Tres Tres Tres", "precio": "13.000", "tipo": "urbana", "img": "http://localhost:3000/img/moto-03.jpg"},
    {"nombre": "Cuatro Cuatro Cuatro", "precio": "14.000", "tipo": "deportivas", "img": "http://localhost:3000/img/moto-03.jpg"},
    {"nombre": "rrrrr", "precio": "15.000", "tipo": "turismo", "img": "http://localhost:3000/img/moto-03.jpg"},
    {"nombre": "eeeeee", "precio": "14.000", "tipo": "motocross", "img": "http://localhost:3000/img/moto-03.jpg"},
    {"nombre": "tttttt", "precio": "17.000", "tipo": "todot", "img": "http://localhost:3000/img/moto-03.jpg"}
];

exports.getAllGasolina = function () {
    return datosGasolina;
};

exports.getAllElectrica = function () {
    return datosElectrica;
};

exports.getCategoriaGasolina = function (categoria) {
    var datosFiltrados = datosGasolina.filter(function (element) {
        return ( element.tipo === categoria);
    });
    return datosFiltrados;
};

exports.getCategoriaElectrica = function (categoria) {
    var datosFiltrados = datosElectrica.filter(function (element) {
        return ( element.tipo === categoria);
    });
    return datosFiltrados;
};