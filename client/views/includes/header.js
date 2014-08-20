Template.header.helpers({
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