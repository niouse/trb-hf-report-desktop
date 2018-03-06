
import React, {Component} from 'react';
import PropTypes from 'prop-types';


//MARETRIAL COMPONENTS
import {ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';




export default function TrbNewCampaignOptionsTemplate(childs) {
    return (wrappedComponent) => {
        const $TrbNewCampaignOptionsTemplate = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <ListItem  
                     key={props.keyNum}
                     style={styles.menu}
                     nestedListStyle={styles.innerMenu}
                     primaryText={<div style={styles.title}>{text.title}</div>}
                     primaryTogglesNestedList={true} 
                     nestedItems={[
                          <ListItem key="0" primaryText="Env. mail client" rightToggle={<Toggle />} />,
                         <ListItem key="1" primaryText="Enregistrer brouillon" rightToggle={<Toggle />} />
                     ]} />
            );
        }
        $TrbNewCampaignOptionsTemplate.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbNewCampaignOptionsTemplate
    }
}
    