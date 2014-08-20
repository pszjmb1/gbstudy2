/**
 * Main client subscription rules
 */

// issuesHandle = Meteor.subscribeWithPagination('newIssues',10);
// Single issue and Comments subscription reacts when the current issue
// changes.
var loggedIn = false;
Deps.autorun(function() {
	Meteor.subscribe('issues');
	Deps.afterFlush(function (){
		$('.content-inner').scrollTop(0);
    	$(window).scrollTop(0);
	});
});









