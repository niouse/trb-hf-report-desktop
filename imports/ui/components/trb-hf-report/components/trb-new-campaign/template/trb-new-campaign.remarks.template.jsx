
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//MARETRIAL COMPONENTS
import TextField from 'material-ui/TextField';
import {ListItem} from 'material-ui/List';


//MATERIAL SVG
import Add from 'material-ui/svg-icons/content/add-circle-outline';
import Close from 'material-ui/svg-icons/navigation/close';


export default function TrbNewCampaignRemarksTemplate(childs) {
    return (wrappedComponent) => {
        const $TrbNewCampaignRemarksTemplate = (props) => {
            let styles = props.styles
            let text = props.text
            
            const nestedItems = [
                <ListItem 
                   key="0" 
                   primaryText={text.addRemark} 
                   onClick={props.addRemark} 
                   rightIcon={<Add />}
                   />
            ]
            
            props.remarks.forEach((rem, index)=>{
               const item = <ListItem key={index+2} rightIcon={<Close onClick={()=>props.deleteRemark(index)}/>}>
                 <TextField  
                     hintText={text.hintText} 
                     id={"textRemarque"+index} 
                     multiLine={true} 
                     rows={3} 
                     style={{border:"1px solid grey"}}
                     value={rem}
                     onChange={(event, value)=>props.changeRemark(index, value)}
                 />
                </ListItem>
                 nestedItems.push(item)    
             })
            
            return (
                <ListItem 
                  key={props.keyNum} 
                  style={styles.menu}
                  nestedListStyle={styles.innerMenu}
                  primaryText={<div style={styles.title}><div>{text.title}</div><div> ({props.remarks.length})</div></div>}
                  primaryTogglesNestedList={true} 
                  nestedItems={nestedItems} />
            );
        }
        $TrbNewCampaignRemarksTemplate.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbNewCampaignRemarksTemplate
    }
}
    