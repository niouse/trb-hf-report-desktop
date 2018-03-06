
import {sitesMongo} from "./../sites.js";


Meteor.publish("sites", function() {
	return  sitesMongo.find({});
});

Meteor.publish("sitesList", function() {
	return  sitesMongo.find({}, {fields : {
		name : 1,
		numBf : 1,
		numTc : 1,
	}});
    /*return list.map((site)=>{
        return {
            _id : site._id,
            name : site.name+"_BF"+site.numBf+"_TC"+site.numTc
        }
    })*/
});

Meteor.publish("oneSites", function(sitesId) { 
	return  sitesMongo.find({_id : sitesId});
});
    