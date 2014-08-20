/**
 * Grumble Button issues collection routines for client and server. Issues
 *	result from grumbling.
 */

Issues = new Meteor.Collection('issues');
/**
 * Server side function called by client to update Issues.
 */
Meteor.methods({
	grumble:function(grumbleAttribs) {
		if(!grumbleAttribs.user)
			throw new Meteor.Error(421, "You haven't put a username in the url");
		// ensure the grumble has correct field values
		if (!grumbleAttribs.shortdesc)
			throw new Meteor.Error(422, 'Please fill in the short description.');
		//if (!grumbleAttribs.category)
		//	throw new Meteor.Error(422, 'Please fill in the category.');
		if(grumbleAttribs.interface == 'wye'){
			if (!grumbleAttribs.date)
				throw new Meteor.Error(422, 'Please fill in the date.');
			if (!grumbleAttribs.time)
				throw new Meteor.Error(422, 'Please fill in the time.');
			if (!grumbleAttribs.location)
				throw new Meteor.Error(422, 'Please fill in the location.');
			if (!grumbleAttribs.anonymous)
				throw new Meteor.Error(422, 'Please fill in the anonymity requirement.');
		}
		//if (!grumbleAttribs.urgency)
		//	throw new Meteor.Error(422, 'Please fill in the urgency.');
		  
		//if (!grumbleAttribs.subcategory)
		//	throw new Meteor.Error(422, 'Please fill in the subcategory.');
		// Add additional rules ...
		var userName;

		if(grumbleAttribs.anonymous == "anonymous")
	    {
		  	userName = 'anonymous';	
	    }
		else
		{
		 	userName = grumbleAttribs.user;
		}
		  	userPosted = grumbleAttribs.user;
		
		// pick out the whitelisted keys
		var issue = _.extend(
			_.pick(grumbleAttribs,
			'shortdesc', 'date', 'time', 'device', 'location',
			'interface', 'started'/*, 'urgency',
			'category',  'details', */
			), {
					author: userName,
					postedUser:userPosted,
					submitted: new Date().getTime(),
		});

		var issueId = Issues.insert(issue);
		return issueId;
	}
});
