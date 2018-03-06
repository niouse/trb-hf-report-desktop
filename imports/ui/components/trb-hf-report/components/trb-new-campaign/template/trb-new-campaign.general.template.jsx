
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import SelectField from 'material-ui/SelectField';

import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import {ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';

import Add from 'material-ui/svg-icons/content/add-circle-outline';

let betonList1 = [
	"33B01",
    "33B02",
    "54B56",
    "54N06"
]



export default function TrbNewCampaignTemplateGeneral(childs) {
    return (wrappedComponent) => {
        const $TrbNewCampaignTemplateGeneral = (props) => {
            let styles = props.styles
            let text = props.text
			
            return (
                <ListItem 
                    primaryText={<div style={styles.title}>{text.title}</div>}
                    //secondaryText={"24/08/2017" }
                    key={props.keyNum}
                    style={styles.menu}
                    nestedListStyle={styles.innerMenu}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                        <ListItem key="31" disabled={true}>
                            <div style={styles.row}>
                                <div style={styles.cell}>{text.site}</div>
                                  <SelectField value={props.siteId} onChange={(event, index, value)=>props.selectSite(value)}>
                                      {props.siteList.map((item, index)=>{
                                          return (
                                               <MenuItem value={item.name} key={index} primaryText={item.name} />
                                          )
                                      })}
                                    </SelectField>
                            </div>
                             </ListItem>,
                        
                         <ListItem key="0">
                            <div  style={styles.row}>
                                <div style={styles.cell}>{text.date}</div>
                                <DatePicker 
                                    hintText={text.selectDate} 
                                    value={props.createdAt}
                                    onChange={(event, value)=>props.changeState("createdAt", value)}
                                    />
                            </div>
                        </ListItem>,
                        <ListItem key="1">
                            <div  style={styles.row}>
                                <div style={styles.cell}>{text.startTime}</div>
                                  <TextField
                                      type="time" 
                                      name="timeStart" 
                                      style={styles.textFieldNumber}
                                      value={props.timeStart}
                                      onChange={(evennt, value)=>props.changeState("timeStart", value)}
                                      />
                            </div>
                             </ListItem>,
                         <ListItem key="2">
                            <div  style={styles.row}>
                                <div style={styles.cell}>{text.stopTime}</div>
                                  <TextField
                                      type="time" 
                                      name="timeStop" 
                                      style={styles.textFieldNumber}
                                      value={props.timeStop}
                                      onChange={(event, value)=>props.changeState("timeStop", value)}
                                      />
                            </div>
                          </ListItem>,
                          <ListItem key="3" disabled={true}>
                            <div style={styles.row}>
                                <div style={styles.cell}>{text.product}</div>
                                  <DropDownMenu 
                                      value={props.productId} 
                                      onChange={(event, index, value)=>props.changeState("productId", value)}
                                      >
                                      {betonList1.map((item, index)=>{
                                          return (
                                               <MenuItem value={item} key={index} primaryText={item} />
                                          )
                                      })}
                                    </DropDownMenu>
                            </div>
                             </ListItem>,
                            <ListItem key="4">
                                <div style={styles.row}>
                                    <div style={styles.cell}>{text.workersNumber}</div>
                                     <TextField
                                      id="workersNumber"
                                      type="number"
                                      style={styles.textFieldNumber}
                                      value={props.numberOfworkers}
                                      onChange={(event, value)=>props.changeState("numberOfworkers", value)}
                                    />
                                </div>
                            </ListItem>,
                            <ListItem key="5">
                                <div style={styles.row}>
                                    <div style={styles.cell}>{text.concreteQuantity}</div>
                                     <TextField
                                      id="concreteQuantity"
                                      value={props.concreteT}
                                      type="number"
                                      style={styles.textFieldNumber}
                                      onChange={(event, value)=>props.changeState("concreteT", value)}
                                    />
                                </div>
                            </ListItem>,
                            <ListItem key="6">
                                <div style={styles.row}>
                                    <div style={styles.cell}>{text.ironQuantity}</div>
                                     <TextField
                                      id="ironQuantity"
                                      value={props.ironT}
                                      type="number"
                                      style={styles.textFieldNumber}
                                      onChange={(event, value)=>props.changeState("ironT", value)}
                                    />
                                </div>
                             </ListItem>,
                            <ListItem key="7">
                                <ListItem 
                                    key="7"
                                    primaryText="Première refection"
                                    rightToggle={<Toggle toggled={props.first} onToggle={(event, value)=>props.changeState("first", value)}/>}
                                    />
                             </ListItem>
                ]} />
            );
        }
        $TrbNewCampaignTemplateGeneral.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbNewCampaignTemplateGeneral
    }
}
    