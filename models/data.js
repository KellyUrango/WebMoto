/**
 * http://usejsdoc.org/
 */
var datosElectrica = [
    {"nombre": "Maker", "precio": "5.950.000", "tipo": "sport", "img": "http://localhost:3000/img/electrica/sp1-01.jpg"},
    {"nombre": "Intrepid", "precio": "8.100.000", "tipo": "sport", "img": "http://localhost:3000/img/electrica/sp2-01.jpg"},
    {"nombre": "Forest", "precio": "8.100.000", "tipo": "sport", "img": "http://localhost:3000/img/electrica/sp3-01.jpg"},


    {"nombre": "Climate", "precio": "3.400.000", "tipo": "scooter", "img": "http://localhost:3000/img/electrica/cs1-01.jpg"},
    {"nombre": "Ocean", "precio": "5.790.000", "tipo": "scooter", "img": "http://localhost:3000/img/electrica/cs2-01.jpg"},
    {"nombre": "Emax", "precio": "$5.450.000", "tipo": "scooter", "img": "http://localhost:3000/img/electrica/cs3-01.jpg"},

    {"nombre": "Neon", "precio": "4.300.000", "tipo": "urbana", "img": "http://localhost:3000/img/gasolina/urUna-01.jpg"},
    {"nombre": "Impresiver", "3.850.000": "15.000", "tipo": "urbana", "img": "http://localhost:3000/img/gasolina/urDos-01.jpg"},
    {"nombre": "SZ-RR", "precio": "4.990.000", "tipo": "urbana", "img": "http://localhost:3000/img/gasolina/urTres-01.jpg"},


    {"nombre": "ATV mini", "precio": "1.350.000", "tipo": "escala", "img": "http://localhost:3000/img/electrica/as1-01.jpg"},
    {"nombre": "Cross mini", "precio": "1.190.000", "tipo": "escala", "img": "http://localhost:3000/img/electrica/as2-01.jpg"},
    {"nombre": "Climate mini", "precio": "950.000", "tipo": "escala", "img": "http://localhost:3000/img/electrica/as3-01.jpg"}

];

var datosGasolina = [
    {"nombre": "FZ 2.0", "precio": "6.490.000", "tipo": "urbana", "img": "http://localhost:3000/img/gasolina/urUna-01.jpg"},
    {"nombre": "FAZER 2.0", "precio": "6.750.000", "tipo": "urbana", "img": "http://localhost:3000/img/gasolina/urDos-01.jpg"},
    {"nombre": "SZ-RR", "precio": "4.990.000", "tipo": "urbana", "img": "http://localhost:3000/img/gasolina/urTres-01.jpg"},

    {"nombre": "MT 09 Tracer", "precio": "38.990.000", "tipo": "deportivas", "img": "http://localhost:3000/img/gasolina/deporUna-01.jpg"},
    {"nombre": "MT 9", "precio": "35.490.000", "tipo": "deportivas", "img": "http://localhost:3000/img/gasolina/deporDos-01.jpg"},
    {"nombre": "MT 7", "precio": "29.990.000", "tipo": "deportivas", "img": "http://localhost:3000/img/gasolina/deporTres-01.jpg"},
    {"nombre": "YZF-R1 2015", "precio": "67.490.000", "tipo": "deportivas", "img": "http://localhost:3000/img/gasolina/depor4-01.jpg"},
    {"nombre": "RT 6", "precio": "45.090.000", "tipo": "deportivas", "img": "http://localhost:3000/img/gasolina/depor5-01.jpg"},
    {"nombre": "RT 3", "precio": "18.400.000", "tipo": "deportivas", "img": "http://localhost:3000/img/gasolina/depor6-01.jpg"},


    {"nombre": "XT 1200", "precio": "52.990.000", "tipo": "turismo", "img": "http://localhost:3000/img/gasolina/tu1-01.jpg"},
    {"nombre": "XT 1200Z", "precio": "46.990.000", "tipo": "turismo", "img": "http://localhost:3000/img/gasolina/tu2-01.jpg"},
    {"nombre": "XT 660", "precio": "35.390.000", "tipo": "turismo", "img": "http://localhost:3000/img/gasolina/tu3-01.jpg"},

    {"nombre": "Yz 450 F", "precio": "28.490.000", "tipo": "motocross", "img": "http://localhost:3000/img/gasolina/croos1-01.jpg"},
    {"nombre": "WR 450", "precio": "29.990.000", "tipo": "motocross", "img": "http://localhost:3000/img/gasolina/croos2-01.jpg"},
    {"nombre": "YZ 250", "precio": "27.490.000", "tipo": "motocross", "img": "http://localhost:3000/img/gasolina/croos3-01.jpg"},

    {"nombre": "XT 660 R", "precio": "26.700.000 ", "tipo": "todot", "img": "http://localhost:3000/img/gasolina/to1-01.jpg"},
    {"nombre": "XTZ 250", "precio": "15.400.000", "tipo": "todot", "img": "http://localhost:3000/img/gasolina/to2-01.jpg"},
    {"nombre": "XTZ 125", "precio": "6.290.000", "tipo": "todot", "img": "http://localhost:3000/img/gasolina/to3-01.jpg"}
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