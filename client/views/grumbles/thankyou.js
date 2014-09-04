Template.submit.rendered = function() {
	// alert("scroll Called");
	jQuery('html','body').animate({scrollTop:0},0);
}

Template.submit.helpers({
	getURL: function() {
		if(Session.get('form') && (Session.get('id'))){
			var url = location.protocol + '//' + location.hostname + (location.port && ":" + location.port) + "/" + Session.get('form') + '/' + Session.get('id');
			return url;
		}
		else{
			return '#';
		}
	}
})