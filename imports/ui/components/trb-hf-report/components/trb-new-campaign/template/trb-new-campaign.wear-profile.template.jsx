
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';


import Add from 'material-ui/svg-icons/content/add-circle-outline';
import Close from 'material-ui/svg-icons/navigation/close';

import Map from "./trb-map.jsx"


@Map()
class $Map{}


export default function TrbNewCampaignWearProfileTemplate(childs) {
    return (wrappedComponent) => {
        const $TrbNewCampaignWearProfileTemplate = (props) => {
            let styles = props.styles
            let text = props.text
            
            console.log(props.usureProfiles)
            
            const nestedItems = [
                <ListItem key="0"  primaryText={text.addProfile} onClick={()=>props.addProfile()} rightIcon={<Add />}>
                </ListItem>,	
            ]
            
            props.usureProfiles.forEach((profil, index)=>{
                console.log(profil, index)
                const item = (
                    <ListItem key={index+2} disabled={true}>
                        <div>
                             
                            <div style={styles.chartHeader}>
                                <RaisedButton label="UPDATE" onTouchTap={()=>props.updateChartProfile(index)}/>
                                <RaisedButton label="ADD POINT" onTouchTap={()=>props.addPointToProfile(index)}/>
                                 <RaisedButton label="DELETE" onTouchTap={props.deleteProfile}/>
                            </div>
                            <div style={styles.chartHeader}>	
                                 <span>Distance TC :</span>
                                 <TextField hintText={"0"} 
                                     id={"distanceTC"} 
                                     type="number" 
                                     style={styles.locationTc}
                                     onChange={(event, value)=>props.changeDistanceTc(index, value)}
                                     />
                                  
                                 <Divider/>
                            </div>
                            <div  style={styles.chartOptions}>
                                <div style={styles.chartPointsContainer}>
                                     {profil.data.map((point, index2)=>{
                                         return <div key={index2} style={styles.chartPoints}>
                                             <span>Point {index2+1} :</span>
                                            <TextField 
                                                hintText={"x"} 
                                                value={point[0]} 
                                                id={"x"+index+index2} 
                                                type="number" 
                                                style={{width : "50px", paddingLeft:"10px"}}
                                                onChange={(event, value)=>props.changePointValue(index, index2, 0, value)}
                                                />
                                            <TextField 
                                                hintText={"y"} 
                                                value={point[1]} 
                                                id={"y"+index+index2} 
                                                type="number" 
                                                style={{width : "50px", paddingLeft:"10px"}}
                                                onChange={(event, value)=>props.changePointValue(index, index2, 1, value)}
                                                />
                                             <Close style={{cursor : "pointer"}} onTouchTap={()=>props.deletPointToProfile(index, index2)}/>
                                         </div>

                                     })}
                                </div>
                                {/*<div style={styles.chartButtonContainer}>
                                    
                                   
                                 </div>*/}
                            </div>
                            <$Map 
                                id={"map"+index} 
                                newProfile={props.newProfile}
                                wearProfile={profil.data}
                                />
                            <Divider/>
                        </div>
                    </ListItem>
                )
                nestedItems.push(item)
            })
            
            return (
                 <ListItem 
                      key={props.keyNum}
                      style={styles.menu}
                      nestedListStyle={styles.innerMenu}
                      primaryText={<div style={styles.title}><div>{text.title}</div> <div>({props.usureProfiles.length})</div></div>}
                      //onNestedListToggle={()=>{props.showChart("new-campaign-chart")}} 
                      primaryTogglesNestedList={true} 
                      nestedItems={nestedItems} />
            );
        }
        $TrbNewCampaignWearProfileTemplate.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbNewCampaignWearProfileTemplate
    }
}
    