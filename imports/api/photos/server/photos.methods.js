
import {photosMongo} from "./../photos.js";

Meteor.methods({
	getphotosKeys : function(){
		var photosKeys = [];
		for (var key in photosMongo.findOne({})){
			photosKeys.push(key)
		};
		return photosKeys;
	}
})
    