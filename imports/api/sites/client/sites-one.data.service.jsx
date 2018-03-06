

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

export default function SitesOneDataService(Loading){
    
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

            /*render (){
                return (
                    this.props.isReady ?
                    <WrappedComponent
                        {...this.props}
                        getOneSite = {this.props.getOneSite}
                        site={this.props.site}
                    /> :
                    <div style={containerStyles}>{this.getLoading()}</div>
                )
            }*/
             render (){
                return (
                    <WrappedComponent
                        {...this.props}
                        getOneSite = {this.props.getOneSite}
                        site={this.props.site}
                    /> 
                )
            }
        }

        const _SitesOneDataService1 = createContainer((props) => {

          let siteSubOne = Meteor.subscribe("oneSites", props.siteId)  
          return {
            ...props,
            site : sitesMongo.find({_id : props.siteId}).fetch()[0],
            isReady : siteSubOne.ready()
          };
        }, _SitesComponentDataService0);


        return class _SitesOneDataService2 extends Component {

            constructor(props){
                super(props);
                this.state = {
                    siteId : null
                }
            }

            getOneSite(id){
                this.setState({
                    siteId : id
                })
            }

            render (){
                return (
                    <_SitesOneDataService1
                        {...this.props}
                        siteId = {this.state.siteId}
                        getOneSite={(id)=>this.getOneSite(id)}
                    /> 
                )
            }
        }

    }
}

