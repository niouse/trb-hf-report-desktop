
import {hfCampaignMongo} from "./../hf-campaign.js";

hfCampaignMongo.allow({
	insert : ()=>{
		return true
	},
	update : ()=>{
		return true
	},
	remove : ()=>{
		return true
	}
})
    