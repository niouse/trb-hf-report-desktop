
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/photos.template.jsx";
import Api from "./api/photos.api.jsx";
import Styles from "./services/photos.styles.service.jsx";
import Texts from "./services/photos.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/photos.styles.default.js";
import stylesOptions from "./styles/photos.styles-options.default.js";
import computeStyles from "./styles/photos.compute-styles.js";
import texts from "./text/photos.text.js";

export default function Photos(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class Photos_Component {}
		return Photos_Component
	}
}  
