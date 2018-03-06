
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Photos_Template() {
    return (wrappedComponent) => {
        const $Photos_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="photos-container" className="container" style={styles.container}>
					<h1  id="photos-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $Photos_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Photos_Template
    }
}
    