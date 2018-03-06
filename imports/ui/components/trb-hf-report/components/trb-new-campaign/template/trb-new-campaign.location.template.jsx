
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {ListItem} from 'material-ui/List';

import ButtonWrapper from "./button-wrapper.template.jsx"


import Damage from "/imports/ui/static-data/svg/svg-damage.template.jsx"
import Usure from "/imports/ui/static-data/svg/svg-usure.template.jsx"
import Securite from "/imports/ui/static-data/svg/svg-securite.template.jsx"
import BriqueFond from "/imports/ui/static-data/svg/svg-brique-fond.template.jsx"
import RmAvBarrage from "/imports/ui/static-data/svg/svg-rm-av-barrage.template.jsx"
import RmApBarrage from "/imports/ui/static-data/svg/svg-rm-ap-barrage.template.jsx"
import RmImpact from "/imports/ui/static-data/svg/svg-rm-impact.template.jsx"
import RmPoutre from "/imports/ui/static-data/svg/svg-rm-poutre.template.jsx"
import RlDroite from "/imports/ui/static-data/svg/svg-rl-droite.template.jsx"
import RlGauche from "/imports/ui/static-data/svg/svg-rl-gauche.template.jsx"
import RlPiege from "/imports/ui/static-data/svg/svg-rl-piege.template.jsx"
import RlVirage from "/imports/ui/static-data/svg/svg-rl-virage.template.jsx"
import RfDroite from "/imports/ui/static-data/svg/svg-rf-droite.template.jsx"
import RfGauche from "/imports/ui/static-data/svg/svg-rf-gauche.template.jsx"
import RfPiege from "/imports/ui/static-data/svg/svg-rf-piege.template.jsx"
import RfVirage from "/imports/ui/static-data/svg/svg-rf-virage.template.jsx"
import Bascule from "/imports/ui/static-data/svg/svg-bascule.template.jsx"



@ButtonWrapper()
class $ButtonWrapper{}

@BriqueFond()
class $BriqueFond{}

@RmPoutre()
class $RmPoutre{}

@RmAvBarrage()
class $RmAvBarrage{}

@RmApBarrage()
class $RmApBarrage{}

@RmImpact()
class $RmImpact{}

@RlDroite()
class $RlDroite{}

@RlGauche()
class $RlGauche{}

@RlPiege()
class $RlPiege{}

@RlVirage()
class $RlVirage{}

@RfDroite()
class $RfDroite{}

@RfGauche()
class $RfGauche{}

@RfPiege()
class $RfPiege{}

@RfVirage()
class $RfVirage{}

let buttonList = [
    {
        name : "rmImpact",
        icon : $RmImpact
    },
    {
        name : "rmAvBarrage",
        icon : $RmAvBarrage
    },
    {
        name : "rmApBarrage",
        icon : $RmApBarrage
    },
    {
        name : "rmPoutre",
        icon : $RmPoutre
    },
    {
        name : "rlPiege",
        icon : $RlPiege
    },
    {
        name : "rlVirage",
        icon : $RlVirage
    },
    {
        name : "rlGauche",
        icon : $RlGauche
    },
    {
        name : "rlDroite",
        icon : $RlDroite
    },
    {
        name : "rfPiege",
        icon : $RfPiege
    },
    {
        name : "rfVirage",
        icon : $RfVirage
    },
    {
        name : "rfGauche",
        icon : $RfGauche
    },
    {
        name : "rfDroite",
        icon : $RfDroite
    }
]

export default function TrbNewCampaign_Template(childs) {
    return (wrappedComponent) => {
        const $TrbNewCampaign_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
               <ListItem 
                  key={props.keyNum}
                  style={styles.menu}
                  nestedListStyle={styles.innerMenu}
                  primaryText={<div style={styles.title}>Lieu d'intervention</div>}
                  primaryTogglesNestedList={true} 
                  nestedItems={[
                    <ListItem key={0} >
                        <div style={styles.buttonContainer}>
                            {buttonList.map((button, index)=>{
                                return <div key={index} style={styles.buttonBox} onClick={()=>props.changeStateList("location", button.name)}>
                                    <$ButtonWrapper 
                                        {...styles.appliAttr} 
                                        svgIcon={button.icon}
                                        isSelected={props.location[button.name]}
                                        />
                                </div>
                            })}
                            {/*<div style={styles.buttonBox} onClick={()=>props.changeStateList("location", "rmImpact")}>
                                <$ButtonWrapper 
                                    {...styles.appliAttr} 
                                    svgIcon={$RmImpact}
                                    isSelected={props.location.rmImpact}
                                    />
                            </div>
                            <div style={styles.buttonBox} onClick={()=>props.changeStateList("location", "rmAvBarrage")}>
                                <$ButtonWrapper 
                                    {...styles.appliAttr} 
                                    svgIcon={$RmAvBarrage}
                                    isSelected={props.location.rmAvBarrage}
                                    />
                            </div>
                            <div style={styles.buttonBox} onClick={()=>props.changeStateList("location", "rmApBarrage")}>
                                <$ButtonWrapper 
                                    {...styles.appliAttr} 
                                    svgIcon={$RmApBarrage}
                                    isSelected={props.location.rmApBarrage}
                                    />
                            </div>
                            <div style={styles.buttonBox} onClick={()=>props.changeStateList("location", "rmPoutre")}>
                                <$ButtonWrapper 
                                    {...styles.appliAttr} 
                                    svgIcon={$RmPoutre}
                                    isSelected={props.location.rmPoutre}
                                    />
                            </div>
                            <div style={styles.buttonBox} onClick={()=>props.changeStateList("location", "rlPiege")}>
                                <$ButtonWrapper 
                                    {...styles.appliAttr} 
                                    svgIcon={$RlPiege} 
                                    isSelected={props.location.rlPiege}
                                    />
                            </div>
                            <div style={styles.buttonBox} onClick={()=>props.changeStateList("location", "rlVirage")}>
                                <$ButtonWrapper 
                                    {...styles.appliAttr} 
                                    svgIcon={$RlVirage}
                                    isSelected={props.location.rlVirage}
                                    />
                            </div>
                            <div style={styles.buttonBox} onClick={()=>props.changeStateList("location", "rlGauche")}>
                                <$ButtonWrapper 
                                    {...styles.appliAttr} 
                                    svgIcon={$RlGauche} 
                                    isSelected={props.location.rlGauche}
                                    />
                            </div>
                            <div style={styles.buttonBox} onClick={()=>props.changeStateList("location", "rlDroite")}>
                                <$ButtonWrapper 
                                    {...styles.appliAttr} 
                                    svgIcon={$RlDroite}
                                    isSelected={props.location.rlDroite}
                                    />
                            </div>
                            <div style={styles.buttonBox} onClick={()=>props.changeStateList("location", "rfPiege")}>
                                <$ButtonWrapper 
                                    {...styles.appliAttr} 
                                    svgIcon={$RfPiege}
                                    isSelected={props.location.rfPiege}
                                    />
                            </div>
                            <div style={styles.buttonBox} onClick={()=>props.changeStateList("location", "rfVirage")}>
                                <$ButtonWrapper 
                                    {...styles.appliAttr} 
                                    svgIcon={$RfVirage}
                                    isSelected={props.location.rfVirage}
                                    />
                            </div>
                            <div style={styles.buttonBox} onClick={()=>props.changeStateList("location", "rfGauche")}>
                                <$ButtonWrapper 
                                    {...styles.appliAttr} 
                                    svgIcon={$RfGauche}
                                    isSelected={props.location.rfGauche}
                                    />
                            </div>
                            <div style={styles.buttonBox} onClick={()=>props.changeStateList("location", "rfDroite")}>
                                <$ButtonWrapper 
                                    {...styles.appliAttr} 
                                    svgIcon={$RfDroite}
                                    isSelected={props.location.rfDroite}
                                    />
                            </div>*/}
                        </div>
                    </ListItem>
                 ]} />
            );
        }
        $TrbNewCampaign_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbNewCampaign_Template
    }
}
    