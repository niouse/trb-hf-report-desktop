
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Stats_Template() {
    return (wrappedComponent) => {
        const $Stats_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="stats-container" className="container" style={styles.container}>
					<h1  id="stats-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $Stats_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Stats_Template
    }
}
    