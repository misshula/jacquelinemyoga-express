define([
	'app'
],

function(app){

	console.log(app)

	var IndexView = Backbone.View.extend({
		events : {
			'click #nav_about' : 'about',
			'click #nav_contact' : 'contact',
			'click #nav_schedule' : 'schedule',
			'click #nav_heart' : 'heart'
		},
		el : 'body',

		about : function(){
			console.log('about clicked!')
			$.backstretch('/images/IMG_4222.jpg');
		},

		contact : function(){
			console.log('contact!')
			$.backstretch('/images/IMG_4239.jpg');
		},

		schedule : function(){
			console.log('schedule!')
			$.backstretch('/images/IMG_4239_1.jpg');
		},

		heart : function(){
			console.log('heart@!!')
			$.backstretch('/images/IMG_4254.jpg');
		},

		render : function(){

			
			///$.backstretch('/images/IMG_4383.jpg');
			$('#home').backstretch('/images/IMG_4383.jpg');
			
			
			//return this.$el.html(this.template());
			
		}	

	});

	return IndexView;

});