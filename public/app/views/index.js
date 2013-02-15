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
			$('.nav').removeClass('selected');
			
		},

		about : function(){
			$('.module').fadeOut(1500);
			$('#about').fadeIn(1500);
			$('.nav').removeClass('selected');
			$('#nav_about').addClass('selected');
		},

		contact : function(){
			$('.module').fadeOut(1500);
			$('#contact').fadeIn(1500);
			this.model.save({
				success : function(){
					console.log('yes')
				}
			});
			$('.nav').removeClass('selected');
			$('#nav_contact').addClass('selected');
		},

		schedule : function(){
			$('.module').fadeOut(1500);
			$('#schedule').fadeIn(1500);
			$('.nav').removeClass('selected');
			$('#nav_schedule').addClass('selected');
		},

		heart : function(){
			$('.module').fadeOut(1500);
			$('#heart').fadeIn(1500);
			$('.nav').removeClass('selected');
			$('#nav_heart').addClass('selected');
		},

		render : function(){

			$('#home').show()
			$('#homemodal').fadeIn(1500)
			
			$('#home').backstretch('/images/IMG_4222.jpg');
			$('#about').backstretch('/images/IMG_4383.jpg');
			$('#contact').backstretch('/images/IMG_4239_1.jpg');
			$('#schedule').backstretch('/images/IMG_4310wide.jpg');
			$('#heart').backstretch('/images/IMG_4251.jpg');
			
			
			//return this.$el.html(this.template());
			
		}	

	});

	return IndexView;

});