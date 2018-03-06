
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Sites_Template() {
    return (wrappedComponent) => {
        const $Sites_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="sites-container" className="container" style={styles.container}>
					<h1  id="sites-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $Sites_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Sites_Template
    }
}
    