var colors = require('colors');
var lineReader = require('line-reader');
var fs = require("fs");
var p = './banners/';
var DEBUG = false;
var itterations = 1;
var itteration = 0;

if (DEBUG && process.argv.length > 2)
	console.log(process.argv);

//Read banner files into array (async)
var files = [];
if (process.argv.length > 2)
	itterations = process.argv[2];
	
doWork();

function doWork() {
	fs.readdir(p, function (err, files) {
		if (err) {
			throw err;
		}

		files.map(function (file) { });
		if (DEBUG)
			console.log("done counting files");
		drawRandomBanner(files);
		files = [];
	});
}


function drawRandomBanner(files) {
var banner_color = randomIntFromInterval(1,9);
	if (DEBUG)
		console.log("banner color: "+banner_color);

	var file = files[randomIntFromInterval(0,files.length-1)];
	if (DEBUG)
		console.log(file);
	console.log("");
	console.log("");

	lineReader.eachLine('banners/'+file, function(line, last) {
		console.log(colorWrap(line,banner_color));
		if(last){
			console.log(colorWrap("         symesh://urn:btih:12a1611484e76ad7922f1ae2b2442478cffb4f8c",banner_color));
			itteration ++;
			if (DEBUG)
				console.log("on itteration "+ itteration + " of "+itterations);
			if (itteration != itterations) {
				doWork();				
			}
		}
	});		
}

function colorWrap(txt,color) {
    switch (color) {
      case 1:
      return(txt.red);
      case 2:
      return(txt.green);
      case 3:
      return(txt.yellow);
      case 4:
      return(txt.blue);
      case 5:
      return(txt.magenta);
      case 6:
      return(txt.cyan);
      case 7:
      return(txt.white);
      case 8:
      return(txt.gray);
      case 9:
      return(txt.zebra);
    }
}

function randomIntFromInterval(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}
