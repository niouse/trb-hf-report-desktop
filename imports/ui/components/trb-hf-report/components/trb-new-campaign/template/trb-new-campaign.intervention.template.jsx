
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';


import IconHf from "/imports/ui/static-data/svg/app-icons/svg-hf.template.jsx"
import HfCoulage from "/imports/ui/static-data/svg/svg-hf-coulage.template.jsx"
import CoulageVibre from "/imports/ui/static-data/svg/svg-coulage-vibre.template.jsx"
import GunitageDense from "/imports/ui/static-data/svg/svg-gunitage-dense.template.jsx"
import Gunitage from "/imports/ui/static-data/svg/svg-gunitage.template.jsx"
import BlockPrefa from "/imports/ui/static-data/svg/svg-block-prefa.template.jsx"
import Damage from "/imports/ui/static-data/svg/svg-damage.template.jsx"

import ButtonWrapper from "./button-wrapper.template.jsx"

@HfCoulage()
class $HfCoulage{}

@CoulageVibre()
class $CoulageVibre{}

@GunitageDense()
class $GunitageDense{}

@Gunitage()
class $Gunitage{}

@BlockPrefa()
class $BlockPrefa{}

@Damage()
class $Damage{}

@ButtonWrapper()
class $ButtonWrapper{}


export default function TrbNewCampaignInterventionTemplate(childs) {
    return (wrappedComponent) => {
        const $TrbNewCampaignInterventionTemplate = (props) => {
            let styles = props.styles
            let text = props.text
			var openSnack = false
            return (
                <ListItem 
                    key={props.keyNum} 
                    primaryText={<div style={styles.title}>{text.title}</div>}
                    style={styles.menu} 								
                    nestedListStyle={styles.innerMenu}
                    primaryTogglesNestedList={true} 
                    nestedItems={[
                        <ListItem key={0}>
                            <div style={styles.buttonContainer}>
                                <div style={styles.buttonBox} onClick={()=>props.changeStateList("interventionType", "coulee")}>
                                    <$ButtonWrapper 
                                        {...styles.appliAttr} 
                                        svgIcon={$HfCoulage }
                                        isSelected={props.interventionType.coulee}
                                        />
                                </div>
                                <div style={styles.buttonBox} onClick={()=>props.changeStateList("interventionType", "couleeVibre")}>
                                    <$ButtonWrapper 
                                        {...styles.appliAttr} 
                                        svgIcon={$CoulageVibre} 
                                        isSelected={props.interventionType.couleeVibre}
                                        />
                                </div>
                                <div style={styles.buttonBox} onClick={()=>props.changeStateList("interventionType", "gunitDense")}>
                                    <$ButtonWrapper 
                                        {...styles.appliAttr} 
                                        svgIcon={$GunitageDense} 
                                        isSelected={props.interventionType.gunitDense}
                                        />
                                </div>
                                <div style={styles.buttonBox} onClick={()=>props.changeStateList("interventionType", "gunitFin")}>
                                    <$ButtonWrapper 
                                        {...styles.appliAttr} 
                                        svgIcon={$Gunitage} 
                                        isSelected={props.interventionType.gunitFin}
                                        />
                                </div>
                                <div style={styles.buttonBox} onClick={()=>props.changeStateList("interventionType", "prefa")}>
                                    <$ButtonWrapper 
                                        {...styles.appliAttr} 
                                        svgIcon={$BlockPrefa}
                                        isSelected={props.interventionType.prefa}
                                        />
                                </div>
                                <div style={styles.buttonBox} onClick={()=>props.changeStateList("interventionType", "dammage")}>
                                    <$ButtonWrapper 
                                        {...styles.appliAttr} 
                                        svgIcon={$Damage}
                                        isSelected={props.interventionType.dammage}
                                        />
                                </div>
                            </div>
                        </ListItem>
                ]}/>
            );
        }
        $TrbNewCampaignInterventionTemplate.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbNewCampaignInterventionTemplate
    }
}
    