
import React, {Component} from 'react';
import PropTypes from 'prop-types';


//MARETRIAL COMPONENTS
import TextField from 'material-ui/TextField';
import {ListItem} from 'material-ui/List';

//MATERIAL SVG
import Add from 'material-ui/svg-icons/content/add-circle-outline';
import Close from 'material-ui/svg-icons/navigation/close';



export default function TrbNewCampaignPhotosTemplate(childs) {
    return (wrappedComponent) => {
        const $TrbNewCampaignPhotosTemplate = (props) => {
            let styles = props.styles
            let text = props.text
            
            nestedItems = [
                <ListItem key="0" primaryText={text.addPhoto} onClick={()=>props.addPhoto()} rightIcon={<Add />}/>
            ]
            
             props.photos.forEach((rem, index)=>{
                const item =  <ListItem key={index+2} rightIcon={<Close />}>
                 <div style={styles.row}>
                        <TextField hintText={text.photoLegend} id={"textLegendePhoto"+index} style={styles.photoLegend}/>
                     <TextField type="file" id={"filePhoto"+index} style={styles.photoLegend} onChange={(event)=>props.loadPhoto(event, index)}/>
                     
                    </div>
                    <img id={"image"+index} style={{width:"100%", height:"auto"}} src="#" alt="#"></img>
                </ListItem>
                nestedItems.push(item)
             })
            
            return (
               <ListItem  
                  key={props.keyNum}
                  style={styles.menu}
                  nestedListStyle={styles.innerMenu}
                  primaryText={<div style={styles.title}><div>{text.title}</div> <div>({props.photos.length})</div></div>}
                  primaryTogglesNestedList={true} 
                  nestedItems={nestedItems} />
            );
        }
        $TrbNewCampaignPhotosTemplate.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbNewCampaignPhotosTemplate
    }
}
    