var fs = require('fs');


var ADCres = 1023.0 ;
var Beta = 3950;
var Kelvin = 273.15;
var Rb = 10000;
var Ginf = 120.6685;
var pin = 'A0';




exports.read_ADCres = function(cb){
    cb(ADCres);
}

exports.write_ADCres = function(content, cb){
    ADCres = content;
    cb();
}

exports.read_Beta = function(cb){
    cb(Beta);
}

exports.write_Beta = function(content, cb){
    Beta = content;
    cb();
}

exports.read_Kelvin = function(cb){
    cb(Kelvin);
}

exports.write_Kelvin = function(content, cb){
    Kelvin = content;
    cb(); 
}


exports.read_Rb = function(cb){
    cb(Rb);
}

exports.write_Rb = function(content, cb){
    Rb = content;
    cb(); 
}


exports.read_Ginf = function(cb){
    cb(Ginf);
}

exports.write_Ginf = function(content, cb){
    Ginf = content;
    cb(); 
}


exports.read_pin = function(cb){
    cb(pin);
}

exports.write_pin = function(content, cb){
    pin = content;
    cb(); 
}


exports.read_temperature = function(cb){
    var sensor = fs.readFileSync('/sys/bus/iio/devices/iio:device0/in_voltage_'+pin+'_raw', 'utf8'); 

    var Rthermistor = Rb * (ADCres / sensor - 1);
    var _temperatureC = Beta / (Math.log( Rthermistor * Ginf )) ;
    var cel = _temperatureC - Kelvin;
    cb(cel);
}







/*

exports.myprint = function(A){
  console.log("AAAA: " + A);
}


exports.read_Param = function(param, cb){
    if(param === "ADCres") cb(ADCres);
    if(param === "Beta") cb(Beta);
    if(param === "Kelvin") cb(Kelvin);
    if(param === "Rb") cb(Rb);
    if(param === "Ginf") cb(Ginf);
    if(param === "pin") cb(pin);
    if(param === "temperature") {
	var sensor = fs.readFileSync('/sys/bus/iio/devices/iio:device0/in_voltage_'+pin+'_raw', 'utf8'); 

	var Rthermistor = Rb * (ADCres / sensor - 1);
	var _temperatureC = Beta / (Math.log( Rthermistor * Ginf )) ;
	var cel = _temperatureC - Kelvin;
	cb(cel);
    }
}


exports.write_Param = function(param, content, cb){
    if(param === "ADCres") {
      ADCres = content;
      cb();
    }
    if(param === "Beta") {
      Beta = content;
      cb();
    }
    if(param === "Kelvin") {
      Kelvin = content;
      cb();
    }
    if(param === "Rb") {
      Rb = content;
      cb();
    }
    if(param === "Ginf") {
      Ginf = content;
      cb();
    }
    if(param === "pin") {
      pin = content;
      cb();
    }
}
*/
