
import {sitesMongo} from "./../sites.js";

Meteor.methods({
	getsitesKeys : function(){
		var sitesKeys = [];
		for (var key in sitesMongo.findOne({})){
			sitesKeys.push(key)
		};
		return sitesKeys;
	}
})
    