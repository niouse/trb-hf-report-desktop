
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-new-campaign.template.jsx";
import Api from "./api/trb-new-campaign.api.jsx";
import Styles from "./services/trb-new-campaign.styles.service.jsx";
import Texts from "./services/trb-new-campaign.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-new-campaign.styles.default.js";
import stylesOptions from "./styles/trb-new-campaign.styles-options.default.js";
import computeStyles from "./styles/trb-new-campaign.compute-styles.js";
import texts from "./text/trb-new-campaign.text.js";

//SERVICES
import AppStylesOptionsService from "./services/app.styles-options.service.jsx"

// THEMES
import themes from "./themes/index.js"
import materials from "./themes/materialui.index.js"
import materialTrb from "./themes/materialui.trb.js"
import materialRuggieri from "./themes/materialui.ruggieri.js"

export default function TrbNewCampaign(childs){
	return (wrappedComponent)=>{
		@AppStylesOptionsService(themes)
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(childs)
		class TrbNewCampaign_Component {}
		return TrbNewCampaign_Component
	}
}  

