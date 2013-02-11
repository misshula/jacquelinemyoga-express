define([
	'app'
],

function(app){

	var IndexView = Backbone.View.extend({
		events : {
			'click #nav_about' : 'about',
			'click #nav_contact' : 'contact',
			'click #nav_schedule' : 'schedule',
			'click #nav_heart' : 'heart',
			'click #nav_home' : 'home'
		},
		el : 'body',

		home : function(){
			$('.module').fadeOut(1500);
			$('#home').fadeIn(1500);
			$('#homemodal').fadeIn(1500);
		},

		about : function(){
			$('.module').fadeOut(1500);
			$('#about').fadeIn(1500);
		},

		contact : function(){
			$('.module').fadeOut(1500);
			$('#contact').fadeIn(1500);
			this.model.save({
				success : function(){
					console.log('yes')
				}
			});
		},

		schedule : function(){
			$('.module').fadeOut(1500);
			$('#schedule').fadeIn(1500);
		},

		heart : function(){
			$('.module').fadeOut(1500);
			$('#heart').fadeIn(1500);
		},

		render : function(){

			$('#home').show()
			$('#homemodal').fadeIn(1500)
			
			$('#home').backstretch('/images/IMG_4222.jpg');
			$('#about').backstretch('/images/IMG_4383.jpg');
			$('#contact').backstretch('/images/IMG_4239.jpg');
			$('#schedule').backstretch('/images/IMG_4239_1.jpg');
			$('#heart').backstretch('/images/IMG_4254.jpg');
			
			
			//return this.$el.html(this.template());
			
		}	

	});

	return IndexView;

});