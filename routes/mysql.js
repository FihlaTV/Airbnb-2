/**
 * New node file
 */
var mysql_pool = require('mysql');
var pool  = mysql_pool.createPool({
	host     : 'localhost',
	user     : 'root',
	password : 'Botshelo$123',
	port     : 3306,
	database : 'mindezone',
	connectionLimit : '10',
		multipleStatements: true
});

exports.pool = pool;
