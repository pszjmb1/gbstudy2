/**
 * Grumble Button publication rules
 */

Meteor.publish('issues', function(){
  return Issues.find();
});
