define([
	'app'
],

function(app){

	var IndexModel = Backbone.Model.extend({
		url : '/email'
	});

	return IndexModel;

});