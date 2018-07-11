var mongo = require("./mongo");
var mongoURL = "mongodb:/localhost/minderzbnb";



function handle_request(msg, callback){
	
	var res = {};
	console.log("In handle request:"+ msg.username);
	 
}

exports.handle_request = handle_request;
