import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';


export default function ReportsListTemplate() {
    return (wrappedComponent) => {
        const $ReportsListTemplate = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="reports-list-container"  style={styles.container}>
		              <List>
                        {props.list.map((item, index)=>{
                              console.log(item)
                              return <ListItem 
                                key={index}
                                leftAvatar={<Avatar src={"data:image/png;base64,"+btoa(String.fromCharCode.apply(null, item.createdBy.photo))} />}
                                primaryText = {item.site.name}
                                secondaryText = {item.createdAt.getDate()+"/"+item.createdAt.getMonth()+"/"+item.createdAt.getYear()}
                                onTouchTap={()=>props.getOneHfCampaign(item._id)}
                                />
                          })}
                    </List>
                    <img src={new TextDecoder("utf-8").decode(props.list[0].createdBy.photo)}/>
				</div>
            );
        }
        $ReportsListTemplate.propTypes = {
            styles: PropTypes.object.isRequired,
            //text: PropTypes.object.isRequired,
        };
        return $ReportsListTemplate
    }
}
    