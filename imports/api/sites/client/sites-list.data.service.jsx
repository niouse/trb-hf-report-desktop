

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {sitesMongo} from "./../sites.js"

var containerStyles = {
	width:"100%", 
	height:"100%", 
	display:"flex",
	alignItems : "center",
	justifyContent : "center",
}

export default function SitesListDataService(Loading){
    
    return (WrappedComponent)=>{

         class _SitesListComponentDataService0 extends Component {

            constructor(props){
                super(props);
            }

             getLoading(){
                 if (Loading){
                     return <Loading />
                 }
                 else return <p>loading</p>
             }

            render (){
                return (
                    this.props.isReady ?
                    <WrappedComponent
                        {...this.props}
                        sitesList = {this.props.sitesList}
                    /> :
                    <div style={containerStyles}>{this.getLoading()}</div>
                )
            }
        }

         const _SitesListDataService1 = createContainer((props) => {
            
          let siteSubList = Meteor.subscribe("sitesList")
          return {
            ...props,
            sitesList : sitesMongo.find({}, {fields : {name : 1, numBf:1, numTc:1}}).fetch().map((site)=>{
                return {
                    _id : site._id,
                    name : site.name+"_BF"+site.numBf+"_TC"+site.numTc
                }
            }),
            isReady : siteSubList.ready()
          };
        }, _SitesListComponentDataService0);
        
        return _SitesListDataService1 

    }
}

