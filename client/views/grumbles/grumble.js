/**
*
*Template for getting the values of the sayIt.today so that manager and subscribed users of that particular domain can be notified.
*/
Template.grumble.events({
	'submit form': function(e) {
		//alert('grumble.js');
		e.preventDefault();
		var issue = {
			user: Session.get("id"),
			date: $(e.target).find('[name=date]').val(),
			time: $(e.target).find('[name=time]').val(),
			location: $(e.target).find('[name=location]').val(),
			shortdesc: $(e.target).find('[name=shortdesc]').val(),
			anonymous: $(e.target).find('[name=anonymous]').val(),
			device: navigator.userAgent,
			interface: Session.get('form'),
			started: Session.get('started')
			//urgency: $(e.target).find('[name=urgency]').val(),
			//category: $(e.target).find('[name=category]').val(),
		}
		

		// alert('inside grumble.js');
		//alert('before calling Meteor.call()');
		Meteor.call('grumble', issue, function(error, id){
			if (error)
			{
				//alert('throwing error');
				throwError(error.reason); 
			}
			else{
				//alert('before Meteor.Router.to() inside grumble.js');
				Router.go('thankyou');
				//alert('after Meteor.Router.to() inside grumble.js');
			}					
		});	
	}
});

Template.grumble2.events({
	'submit form': function(e) {
		//alert('grumble.js');
		e.preventDefault();
		var issue = {
			user: Session.get("id"),
			shortdesc: $(e.target).find('[name=shortdesc]').val(),
			anonymous: 'anonymous',
			device: navigator.userAgent,
			interface: Session.get('form'),
			started: Session.get('started')
		}
		

		// alert('inside grumble.js');
		//alert('before calling Meteor.call()');
		Meteor.call('grumble', issue, function(error, id){
			if (error)
			{
				//alert('throwing error');
				throwError(error.reason); 
			}
			else{
				// alert('before Meteor.Router.to() inside grumble.js');
				Router.go('thankyou');
				jQuery('html','body').animate({scrollTop:0},0);
				//alert('after Meteor.Router.to() inside grumble.js');
			}					
		});	
	}
});


Template.grumble.helpers({
	date: function() {
	var date = new Date();
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
	},
	time: function(){
		var date = new Date();
		var hours = date.getHours();
		var min = date.getMinutes();
		return '' + (hours<=9 ? '0' + hours : hours) + ':' + (min<=9 ? '0' + min : min);
	}
});
