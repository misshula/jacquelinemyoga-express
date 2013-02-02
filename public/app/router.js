define([
	'app',
	'views/index',
	'models/index'

],

function(app, IndexView, IndexModel){

	 return Backbone.Router.extend({
		
		routes : {
			'' : 'index'
 		},

		index : function(){
			var indexModel = new IndexModel();

			var index = new IndexView({model : indexModel});
			index.render();
		},
	});

});