import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {hfCampaignMongo} from "./../hf-campaign.js"

export default function HfCampaignsDataService(){
    
    return (WrappedComponent)=>{
	
         class _HfCampaignsComponentDataService0 extends Component {

            constructor(props){
                super(props);
            }



            render (){
                return (
                    this.props.isReady ?
                    <WrappedComponent
                        {...this.props}
                        hfCampaign = {this.props.hfCampaign}
                        hfCampaignsList = {this.props.hfCampaignsList}
                        getOneHfCampaign = {this.props.getOneHfCampaign}
                    /> :
                    <p>loading</p>
                )
            }
        }

        const _HfCampaignsDataService1 = createContainer((props) => {

          let hfCampaignSubOne = Meteor.subscribe("oneHfCampaign", props.hfCampaignId)  
          let hfCampaignSubList = Meteor.subscribe("hfCampaignList")
          return {
            ...props,
            hfCampaign : hfCampaignMongo.find({_id : props.hfCampaignId}).fetch()[0],
            hfCampaignsList : hfCampaignMongo.find({}, {fields : {createdBy : 1, createdAt:1, site : 1, numberOfworkers:1}}).fetch(),
            isReady : hfCampaignSubList.ready(),
          };
        }, _HfCampaignsComponentDataService0);


        return class _HfCampaignsDataService2 extends Component {

            constructor(props){
                super(props);
                this.state = {
                    hfCampaignId : null
                }
            }

            getOneHfCampaign(id){
                this.setState({
                    hfCampaignId : id
                })
            }

            render (){
                return (
                    <_HfCampaignsDataService1
                        {...this.props}
                        hfCampaignId = {this.state.hfCampaignId}
                        getOneHfCampaign={(id)=>this.getOneHfCampaign(id)}
                    /> 
                )
            }
        }

    }
}

