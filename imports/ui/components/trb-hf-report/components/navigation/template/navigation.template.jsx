
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

export default function Navigation_Template() {
    return (wrappedComponent) => {
        const $Navigation_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="navigation-container" className="container" style={styles.container}>
					<FlatButton label={text.reports} primary={props.activePage === "reports"} onTouchTap={()=>props.goToPage("reports")}/>
                    <FlatButton label={text.sites} primary={props.activePage === "sites"} onTouchTap={()=>props.goToPage("sites")}/>
                    <FlatButton label={text.photos} primary={props.activePage === "photos"} onTouchTap={()=>props.goToPage("photos")}/>
                    {/*<FlatButton label={text.profils} onTouchTap={()=>props.goToPage("/reports")}/>*/}
                    <FlatButton label={text.stats} primary={props.activePage === "stats"} onTouchTap={()=>props.goToPage("stats")}/>
                    <FlatButton label={text.gestion} primary={props.activePage === "gestion"} onTouchTap={()=>props.goToPage("gestion")}/>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $Navigation_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Navigation_Template
    }
}    