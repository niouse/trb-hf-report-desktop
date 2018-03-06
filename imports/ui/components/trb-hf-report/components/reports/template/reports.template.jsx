
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//MATERIAL UI
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';


//TEMPLATE CHILDREN
import ReportsListHeader from "./reports.list-header.template.jsx";
import ReportsFilters from "./reports.filters.template.jsx";
import ReportsList from "./reports.list.template.jsx";
import ReportDetails from "./reports.details.template.jsx";

@ReportsFilters()
class $ReportsFilters{}

@ReportsList()
class $ReportsList{}

@ReportDetails()
class $ReportDetails{}

export default function Reports_Template(childs) {
    return (wrappedComponent) => {
        const $Reports_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="reports-container" className="container" style={styles.container}>
					<Paper style={styles.reportsListContainer}>
                        <ReportsListHeader 
                            styles={styles.listHeader}
                            toggleStateBool={props.toggleStateBool}
                            numberOfFilters={props.numberOfFilters}
                            />
                         <$ReportsList 
                             styles={styles.reportsList}
                             list={props.hfCampaignsList}
                             getOneHfCampaign={props.getOneHfCampaign}
                             />
                    </Paper>
                    <div style={styles.reportDetail}>
                            {props.hfCampaign ? <childs.trbNewCampaign hfCampaign={props.hfCampaign} sitesList={props.sitesList}/> : <p>select</p>}
                    </div>
                     <Drawer 
                         open={props.openFilters}
                         onRequestChange={()=>props.toggleStateBool("openFilters")}
                         width={320}
                         >
                        <$ReportsFilters 
                            styles={styles.reportsFilters}
                            toggleStateBool={props.toggleStateBool}
                            sitesList={props.sitesList}
                            usersList={props.usersList}
                            selectFilter={this.selectFilter}
                            numberOfItems={props.numberOfItems}
                            />
                    </Drawer>
				</div>
            );
        }
        $Reports_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Reports_Template
    }
}
    