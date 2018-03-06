
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {ListItem} from 'material-ui/List';

import Usure from "/imports/ui/static-data/svg/svg-usure.template.jsx"
import Securite from "/imports/ui/static-data/svg/svg-securite.template.jsx"
import Bascule from "/imports/ui/static-data/svg/svg-bascule.template.jsx"

import ButtonWrapper from "./button-wrapper.template.jsx"


@Usure()
class $Usure{}

@Securite()
class $Securite{}

@Bascule()
class $Bascule{}

@ButtonWrapper()
class $ButtonWrapper{}



export default function TrbNewCampaignLayerTemplate(childs) {
    return (wrappedComponent) => {
        const $TrbNewCampaignLayerTemplate = (props) => {
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
                        <ListItem key={0} >
                             <div key={0} style={styles.layer.container}>
                                <div style={styles.buttonBox} onClick={()=>props.changeStateList("layer", "usure")}>
                                    <$ButtonWrapper 
                                        {...styles.appliAttr} 
                                        svgIcon={$Usure}
                                        isSelected={props.layer.usure}
                                        />
                                </div>
                                <div style={styles.buttonBox} onClick={()=>props.changeStateList("layer", "secu")}>
                                    <$ButtonWrapper 
                                        {...styles.appliAttr} 
                                        svgIcon={$Securite} 
                                        isSelected={props.layer.secu}
                                        />
                                </div>
                                <div style={styles.buttonBox} onClick={()=>props.changeStateList("layer", "bascule")}>
                                    <$ButtonWrapper 
                                        {...styles.appliAttr} 
                                        svgIcon={$Bascule}
                                        isSelected={props.layer.bascule}
                                        />
                                </div>
                            </div>
                        </ListItem>
                     ]} />
            );
        }
        $TrbNewCampaignLayerTemplate.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbNewCampaignLayerTemplate
    }
}
    