import React, {Component} from 'react';
import PropTypes from 'prop-types';

//MATERIAL UI
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';


export default function ReportsDetailsTemplate() {
    return (wrappedComponent) => {
        const $ReportsDetailsTemplate = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="reports-details-container"  style={styles.container}>
                    <p>details</p>
				</div>
            );
        }
        $ReportsDetailsTemplate.propTypes = {
            //styles: PropTypes.object.isRequired,
            //text: PropTypes.object.isRequired,
        };
        return $ReportsDetailsTemplate
    }
}
    