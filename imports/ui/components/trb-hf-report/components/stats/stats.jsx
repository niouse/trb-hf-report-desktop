
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/stats.template.jsx";
import Api from "./api/stats.api.jsx";
import Styles from "./services/stats.styles.service.jsx";
import Texts from "./services/stats.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/stats.styles.default.js";
import stylesOptions from "./styles/stats.styles-options.default.js";
import computeStyles from "./styles/stats.compute-styles.js";
import texts from "./text/stats.text.js";

export default function Stats(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class Stats_Component {}
		return Stats_Component
	}
}  
