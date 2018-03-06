
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Gestion_Template() {
    return (wrappedComponent) => {
        const $Gestion_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="gestion-container" className="container" style={styles.container}>
					<h1  id="gestion-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $Gestion_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Gestion_Template
    }
}
    