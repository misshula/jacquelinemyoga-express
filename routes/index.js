


var index = {
	get : function( req, res){
		res.render('index', { title: 'jacquelinemyoga' });
	}
}

module.exports.enable = function( app ){
  app.get('/', index.get );



};