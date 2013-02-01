define([
	'app',
	'views/index'

],

function(app, IndexView){

	 return Backbone.Router.extend({
		
		routes : {
			'' : 'index'
 		},

		index : function(){
			var index = new IndexView();
			index.render();
		},
	});

});