
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { BrowserRouter, Route,  Link, Switch } from 'react-router-dom'
import {withRouter} from "react-router-dom"

// COMPONENT LAYERS
import Template from "./template/trb-hf-report.template.jsx";
import Api from "./api/trb-hf-report.api.jsx";
import Styles from "./services/trb-hf-report.styles.service.jsx";
import Texts from "./services/trb-hf-report.text.service.jsx";

//APP SERVICES
import AppRouterService from "./services/trb-hf-report.router.service.jsx";
import AppWithRouterService from "./services/trb-hf-report.with-router.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-hf-report.styles.default.js";
import stylesOptions from "./styles/trb-hf-report.styles-options.default.js";
import computeStyles from "./styles/trb-hf-report.compute-styles.js";
import texts from "./text/trb-hf-report.text.js";

//APP CHILDREN
import Navigation from "./components/navigation/navigation.component.jsx";
import Reports from "./components/reports/reports.jsx";
    import TrbNewCampaign from "./components/trb-new-campaign/trb-new-campaign.component.jsx";
import Sites from "./components/sites/sites.component.jsx";
import Photos from "./components/photos/photos.component.jsx";
import Stats from "./components/stats/stats.component.jsx";
//import Profils from "./components/profils/profils.component.jsx";
import Gestion from "./components/gestion/gestion.component.jsx";



// MONGO COLLECTIONS SERVICES
import TrbSitesCrudService from "/imports/api/sites/client/sites.crud.service.jsx"
import TrbSitesDataService from "/imports/api/sites/client/sites.data.service.jsx"
import TrbSitesListDataService from "/imports/api/sites/client/sites-list.data.service.jsx"
import TrbSitesOneDataService from "/imports/api/sites/client/sites-one.data.service.jsx"

import TrbHfCampaignCrudService from "/imports/api/hf-campaign/client/hf-campaign.crud.service.jsx"
import TrbHfCampaignDataService from "/imports/api/hf-campaign/client/hf-campaign.data.service.jsx"


import UsersListDataService from "/imports/api/users/client/users-list.data.service.jsx"


@AppWithRouterService(withRouter)
@Navigation()
class $Navigation{}

@TrbNewCampaign()
class $TrbNewCampaign{}

let reportsChilds = {
    trbNewCampaign : $TrbNewCampaign
}

@UsersListDataService()
@TrbSitesListDataService()
@TrbHfCampaignDataService()
@Reports(reportsChilds)
class $Reports{}

@Sites()
class $Sites{}

@Stats()
class $Stats{}

@Photos()
class $Photos{}

/*@Profils()
class $Profils{}*/

@Gestion()
class $Gestion{}

var appChilds = {
    navigation : $Navigation,
    reports : $Reports,
    sites : $Sites,
    stats : $Stats,
    photos : $Photos,
    //profils : $Profils,
    gestion : $Gestion
}

export default function TrbHfReport(){
	return (wrappedComponent)=>{
        @AppRouterService(BrowserRouter)
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Texts(texts)
		@Api()
		@Template(appChilds)
		class TrbHfReport_Component {}
		return TrbHfReport_Component
	}
}  
