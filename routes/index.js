


var index = {
	get : function( req, res){
		res.render('index', { title: 'jacquelinemyoga' });
	}
}

var contact = {
	email : function( req, res ){
		console.log('WOOO!')
	}
}


module.exports.enable = function( app ){
  app.get('/', index.get );
  
  app.post('/email', contact.email);

};