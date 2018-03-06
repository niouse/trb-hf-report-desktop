
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-hf-report.template.jsx";
import Api from "./api/trb-hf-report.api.jsx";
import Styles from "./services/trb-hf-report.styles.service.jsx";
import Texts from "./services/trb-hf-report.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-hf-report.styles.default.js";
import stylesOptions from "./styles/trb-hf-report.styles-options.default.js";
import computeStyles from "./styles/trb-hf-report.compute-styles.js";
import texts from "./text/trb-hf-report.text.js";

export default function TrbHfReport(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbHfReport_Component {}
		return TrbHfReport_Component
	}
}  
