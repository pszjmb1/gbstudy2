Template.home.events({
	'submit form': function(e) {
		e.preventDefault();
		if($(e.target).find('[name=formtype]').val() == 0){
			throwError("Please select the type of form that you want");
		}
		else{
			var url = location.protocol + '//' + location.hostname + (location.port && ":" + location.port) + "/" + $(e.target).find('[name=formtype]').val() + '/' + $(e.target).find('[name=username]').val();
			// alert(url);
			window.location.href = url;
		}
	}
});