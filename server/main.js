import { Meteor } from 'meteor/meteor';

import './../imports/api/users/server';
import './../imports/api/hf-campaign/server';
import './../imports/api/sites/server';
import './../imports/api/photos/server';

import  './../imports/startup/server';


Meteor.startup(() => {
	loadUsers()
    loadSites(()=>{
        loadPhotos(()=>{
            loadHfCampaign()
        })
    })    
});
