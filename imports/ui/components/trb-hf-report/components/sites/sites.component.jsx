
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/sites.template.jsx";
import Api from "./api/sites.api.jsx";
import Styles from "./services/sites.styles.service.jsx";
import Texts from "./services/sites.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/sites.styles.default.js";
import stylesOptions from "./styles/sites.styles-options.default.js";
import computeStyles from "./styles/sites.compute-styles.js";
import texts from "./text/sites.text.js";

export default function Sites(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Texts(texts)
		@Api()
		@Template()
		class Sites_Component {}
		return Sites_Component
	}
}  
