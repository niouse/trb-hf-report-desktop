
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/gestion.template.jsx";
import Api from "./api/gestion.api.jsx";
import Styles from "./services/gestion.styles.service.jsx";
import Texts from "./services/gestion.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/gestion.styles.default.js";
import stylesOptions from "./styles/gestion.styles-options.default.js";
import computeStyles from "./styles/gestion.compute-styles.js";
import texts from "./text/gestion.text.js";

export default function Gestion(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class Gestion_Component {}
		return Gestion_Component
	}
}  
