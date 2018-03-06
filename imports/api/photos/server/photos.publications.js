
import {photosMongo} from "./../photos.js";


Meteor.publish("photos", function() {
	return  photosMongo.find({});
});

Meteor.publish("photosList", function() {
	return  photosMongo.find({}, {fields : {
		name : 1,
		status : 1,
		dateShow : 1,
		country : 1
	}});
});

Meteor.publish("onephotos", function(photosId) { 
	return  photosMongo.find({_id : photosId});
});
    