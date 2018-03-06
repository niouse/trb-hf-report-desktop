
import React, {Component} from 'react';
import PropTypes from 'prop-types';


//MARETRIAL COMPONENTS
import {List} from 'material-ui/List';
import Snackbar from 'material-ui/Snackbar';


//TEMPLATE CHILDREN
import General from "./trb-new-campaign.general.template.jsx"
import Intervention from "./trb-new-campaign.intervention.template.jsx"
import Layer from "./trb-new-campaign.layer.template.jsx"
import Location from "./trb-new-campaign.location.template.jsx"
import WearProfile from "./trb-new-campaign.wear-profile.template.jsx"
import Photos from "./trb-new-campaign.photos.template.jsx"
import Remarks from "./trb-new-campaign.remarks.template.jsx"
import Options from "./trb-new-campaign.options.template.jsx"

@General()
class $General{}

@Intervention()
class $Intervention{}

@Layer()
class $Layer{}

@Location()
class $Location{}

@WearProfile()
class $WearProfile{}

@Photos()
class $Photos{}

@Remarks()
class $Remarks{}

@Options()
class $Options{}



export default function TrbNewCampaign_Template(childs) {
    return (wrappedComponent) => {
        const $TrbNewCampaign_Template = (props) => {
            let styles = props.styles
            let text = props.text
            console.log(props.newProfile)
            return (
                <div id="trb-new-campaign-container" className="container" style={styles.container}>
					<div style={styles.box}>
						<div style={styles.box2}>
						 <List style={styles.mainList}>

							<$General 
                                keyNum={0}
                                styles={styles}
                                text={text.general}
                                selectSite={props.selectSite}
                                changeState={props.changeState}
                                createdAt = {props.createdAt}
                                numberOfworkers ={props.numberOfworkers}
                                timeStart ={props.timeStart}
                                timeStop = {props.timeStop}
                                siteId = {props.siteId}
                                numBf = {props.numBf}
                                numRunner = {props.numRunner}
                                productId = {props.productId}
                                concreteT = {props.concreteT}
                                ironT = {props.ironT}
                                first = {props.first}        
                                siteList={props.siteList}
                                />	
                             
                             <$Intervention 
                                keyNum={1}
                                styles={styles}
                                text={text.intervention}
                                interventionType = {props.interventionType}
                                changeStateList={props.changeStateList}
                                />
                             
                             <$Layer 
                                keyNum={2}
                                styles={styles} 
                                text={text.layer}
                                layer={props.layer}
                                changeStateList={props.changeStateList}
                                 />
					
			                <$Location
                                 keyNum={3}
                                 styles={styles} 
                                 text={text.location}
                                 location={props.location}
                                 changeStateList={props.changeStateList}
                                 />
						
							 <$WearProfile 
                                 keyNum={4}
                                 styles={styles} 
                                 text={text.wearProfile}
                                 usureProfiles={props.usureProfiles}
                                 newProfile={props.newProfile}
                                 showChart={(id)=>props.showChart(id)}
                                 addProfile={()=>props.addProfile()}
                                 addPointToProfile={props.addPointToProfile}
                                 deletPointToProfile={props.deletPointToProfile}
                                 changeDistanceTc={props.changeDistanceTc}
                                 changePointValue={props.changePointValue}
                                 deleteProfile={props.deleteProfile}
                                 updateChartProfile={props.updateChartProfile}
                                 /> 
                             
                             
                             <$Photos 
                                  keyNum={5}
                                  styles={styles} 
                                  text={text.photos}
                                  photos={props.photos}
                                  addPhoto={props.addPhoto}
                                  loadPhoto={props.loadPhoto}
                                  />
                             
							  <$Remarks 
                                  keyNum={6}
                                  styles={styles} 
                                  text={text.remarks}
                                 remarks={props.remarks}
                                   addRemark = {props.addRemark}           
                                    changeRemark = {props.changeRemark}
                                    deleteRemark = {props.deleteRemark}
                                  />
                              
							 <$Options 
                                  keyNum={7}
                                  styles={styles} 
                                  text={text.options}
                                 />
							 
						</List>
						</div>
						{/*<div  
				            style={styles.menu2}
				            onClick={props.saveCampaign}
								 >
							 	<span>{text.submit}</span>
				        </div>*/}
					</div>
					 {/*<Snackbar
						  open={props.openSnack}
						  message="Nouveaux traveaux enregistrés"
						  autoHideDuration={4000}
						  onRequestClose={()=>props.toggleStateBool('openSnack')}
						/>*/}
				</div>
            );
        }
        $TrbNewCampaign_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbNewCampaign_Template
    }
}
    