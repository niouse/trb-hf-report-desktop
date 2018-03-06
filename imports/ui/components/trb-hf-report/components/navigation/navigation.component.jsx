
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/navigation.template.jsx";
import Api from "./api/navigation.api.jsx";
import Styles from "./services/navigation.styles.service.jsx";
import Texts from "./services/navigation.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/navigation.styles.default.js";
import stylesOptions from "./styles/navigation.styles-options.default.js";
import computeStyles from "./styles/navigation.compute-styles.js";
import texts from "./text/navigation.text.js";

export default function Navigation(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Texts(texts)
		@Api()
		@Template()
		class Navigation_Component {}
		return Navigation_Component
	}
}  
