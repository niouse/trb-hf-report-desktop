import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {  Route } from 'react-router-dom'

export default function TrbHfReport_Template(childs) {
    return (wrappedComponent) => {
        const $TrbHfReport_Template = (props) => {
            let styles = props.styles
            let text = props.text
            let startUrl = props.startUrl || ""
            return (
                <div id="trb-hf-report-container" className="container" style={styles.container}>
                    <childs.navigation 
                        startUrl={startUrl}
                        />
                        <Route 
                            path={startUrl+"/"} 
                            exact component={childs.reports} 
                            startUrl={startUrl}
                            />
                        <Route 
                            path={startUrl+"/reports"} 
                            exact component={childs.reports} 
                            startUrl={startUrl}
                            />
						<Route 
							path={startUrl+"/sites"}
							component={childs.sites}
                            startUrl={startUrl}
							/>
						<Route 
							path={startUrl+"/photos"}
							component={childs.photos}
                            startUrl={startUrl}
							/>
						{/*<Route 
							path={startUrl+"profils"}
							component={childs.profils}
                            startUrl={startUrl}
							/>*/}
                        <Route 
							path={startUrl+"/stats"}
							component={childs.stats}
                            startUrl={startUrl}
							/>
                        <Route 
							path={startUrl+"/gestion"}
							component={childs.gestion}
                            startUrl={startUrl}
							/>
				</div>
            );
        }
        $TrbHfReport_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbHfReport_Template
    }
}
    