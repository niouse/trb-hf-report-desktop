
import {hfCampaignMongo} from "./../hf-campaign.js";
import hfCampaignDefaults from "./hf-campaign.defaults.js";

import {photosMongo} from "./../../photos/photos.js";
import {sitesMongo} from "./../../sites/sites.js"


loadHfCampaign = function(){
	 if (hfCampaignMongo.find({}).fetch().length === 0) {
		 hfCampaignDefaults.forEach((item, index)=>{
             item.photos=photosMongo.find({}).fetch()
             item.site = sitesMongo.find({}).fetch()[0]
             item.createdBy=Meteor.users.find({}).fetch()[0]
	     	 hfCampaignMongo.insert(hfCampaignDefaults[index]); 
		 })
   }
}
    