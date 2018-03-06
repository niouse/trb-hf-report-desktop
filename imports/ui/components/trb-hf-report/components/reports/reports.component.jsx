
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/reports.template.jsx";
import Api from "./api/reports.api.jsx";
import Styles from "./services/reports.styles.service.jsx";
import Texts from "./services/reports.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/reports.styles.default.js";
import stylesOptions from "./styles/reports.styles-options.default.js";
import computeStyles from "./styles/reports.compute-styles.js";
import texts from "./text/reports.text.js";

export default function Reports(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Texts(texts)
		@Api()
		@Template()
		class Reports_Component {}
		return Reports_Component
	}
}  
