var ebml = require('./index.js');
var fs = require('fs');
var util = require('util');

var decoder = new ebml.Decoder(EbmlDecoder.OnlyMetaDatas());

var filename = process.argv[2];
console.log("Parsing ... " + filename);

var t1 = Date.now();

decoder.parseFileInfoTagsAndAttachments(filename, function(error, document) {
	var t2 = Date.now();

	console.log("Delta=" + (t2 - t1) + "ms");

	console.log(document.print());
});