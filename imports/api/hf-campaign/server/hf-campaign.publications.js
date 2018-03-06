
import {hfCampaignMongo} from "./../hf-campaign.js";


Meteor.publish("hfCampaign", function() {
	return  hfCampaignMongo.find({});
});

Meteor.publish("hfCampaignList", function() {
	return  hfCampaignMongo.find({}, {fields : {
		createdBy : 1, 
        createdAt:1, 
        site : 1, 
	}})
});

Meteor.publish("oneHfCampaign", function(hfCampaignId) { 
	return  hfCampaignMongo.find({_id : hfCampaignId});
});
    