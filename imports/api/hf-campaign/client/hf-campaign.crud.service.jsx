
import React, { Component } from 'react';
import {hfCampaignSchema} from "./../hf-campaign.schema.js";
import {hfCampaignMongo} from "./../hf-campaign.js";

export default function HfCampaignCrudService(){
    
    var hfCampaignCrudContext = hfCampaignSchema.namedContext("hfCampaignCrudOp")
    
    return (WrappedComponent)=>{

        return class _HfCampaigsCrudService extends Component {

            constructor(props){
                super(props);
            }

            createHfCampaig(options , callback){
                console.log(options)
                hfCampaignSchema.clean(options);
                if(hfCampaignCrudContext.validate(options)){
                    hfCampaignMongo.insert(options, callback);
                }
                else {
                    let err = {}
                    let res = false
                    err.reason = "Problematic keys :"+hfCampaignCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
                    callback(err, res)
                }
            }

            readHfCampaig(options , callback){

            }

            updateHfCampaig(id, options , callback){
                console.log(options)
                hfCampaignSchema.clean(options);
                if(hfCampaignCrudContext.validate(options)){
                    hfCampaignMongo.update({_id : id}, {$set : options}, callback);
                }
                else {
                    let err = {}
                    let res = false
                    err.reason = "Problematic keys :"+hfCampaignCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
                    callback(err, res)
                }
            }

            deleteHfCampaig(id , callback){
                hfCampaignMongo.remove({_id : id}, callback);
            }

            render (){
                return (
                    <WrappedComponent
                        {...this.props}
                        createHfCampaig = {this.createHfCampaig}
                        readHfCampaig = {this.readHfCampaig}
                        updateHfCampaig = {this.updateHfCampaig}
                        deleteHfCampaig = {this.deleteHfCampaig}
                    />
                )
            }
        }
    }
}
