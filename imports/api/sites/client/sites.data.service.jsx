

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

export default function SitesDataService(Loading){
    
    return (WrappedComponent)=>{

         class _SitesComponentDataService0 extends Component {

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
                        sites = {this.props.sites}
                    /> :
                    <div style={containerStyles}>{this.getLoading()}</div>
                )
            }
        }

        const _SitesDataService1 = createContainer((props) => {

          let sitesSub = Meteor.subscribe("sites")  
          return {
            ...props,
            sites : sitesMongo.find({}).fetch(),
            isReady : sitesSub.ready()
          };
        }, _SitesComponentDataService0);


        return _SitesDataService1
    }
}

