
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Close from 'material-ui/svg-icons/navigation/close';
import Refresh from 'material-ui/svg-icons/navigation/refresh';
import Search from 'material-ui/svg-icons/action/search.js';


export default function ReportsFiltersTemplate() {
    return (wrappedComponent) => {
        const $ReportsFiltersTemplate = (props) => {
            let styles = props.styles
            let text = props.text
            
            
            return (
                <div id="reports-filters-container"  style={styles.container}>
					<List>
                        <ListItem 
                           style={{cursor:"pointer", borderBottom:"1px solid red"}}
                           primaryText="Fermer" 
                           onClick={()=>props.toggleStateBool('openFilters')}
                           rightIcon={<Close />}
                           />
                        <ListItem 
                           style={{cursor:"pointer", borderBottom:"1px solid red"}}
                           primaryText="Rafraichir" 
                           onClick={props.resetFilters}
                           rightIcon={<Refresh />}
                           />
                        
                        <ListItem
                            primaryText={"Site"}
                            rightToggle={<Toggle />}
                                    />
                       <ListItem
                            leftIcon={<Search />}
                            innerDivStyle={styles.listItem}
                            disabled={true}
                            primaryText={
                                    <SelectField
                                      value={props.value}
                                      onChange={()=>props.selectFilter("site")}
                                    >
                                      {/*<MenuItem key={"a0"} value={"all"} primaryText={"all"} />*/}
                                      {props.sitesList.map((item, index)=>{
                                            return  (
                                                <MenuItem 
                                                    key={index} 
                                                    value={item.name} 
                                                    primaryText={item.name} 
                                                    />
                                            )
                                        })}
                                    </SelectField>
                               }
                           />
                         <Divider />
                         <ListItem
                            primaryText={"Reporter"}
                            rightToggle={<Toggle />}
                                    />
                       <ListItem
                            leftIcon={<Search />}
                            innerDivStyle={styles.listItem}
                            disabled={true}
                            primaryText={
                                    <SelectField
                                      value={props.value}
                                      onChange={()=>props.selectFilter("site")}
                                    >
                                      {/*<MenuItem key={"a0"} value={"all"} primaryText={"all"} />*/}
                                      {props.usersList.map((item, index)=>{
                                            return  (
                                                <MenuItem 
                                                    key={index} 
                                                    value={item.name} 
                                                    primaryText={item.name} 
                                                    />
                                            )
                                        })}
                                    </SelectField>
                               }
                           />
                         <Divider />
                        <ListItem 
                            primaryText={`Trouvés: ${props.numberOfItems}`}
                            />
                    </List>
                    
				</div>
            );
        }
        $ReportsFiltersTemplate.propTypes = {
            styles: PropTypes.object.isRequired,
            //text: PropTypes.object.isRequired,
        };
        return $ReportsFiltersTemplate
    }
}
    