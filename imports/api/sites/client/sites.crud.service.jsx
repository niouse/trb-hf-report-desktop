
import React, { Component } from 'react';
import {sitesSchema} from "./../sites.schema.js";
import {sitesMongo} from "./../sites.js";

export default function SitesCrudService(){
    
    return (WrappedComponent)=>{

        var sitesCrudContext = sitesSchema.namedContext("sitesCrudOp")

        return class _SitesCrudService extends Component {

            constructor(props){
                super(props);
            }

            createSite(options , callback){
                sitesSchema.clean(options);
                if(sitesCrudContext.validate(options)){
                    sitesMongo.insert(options, callback);
                }
                else {
                    let err = {}
                    let res = false
                    err.reason = "Problematic keys :"+sitesCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
                    callback(err, res)
                }
            }

            readSite(options , callback){

            }

            updateSite(id, options , callback){
                console.log(options)
                sitesSchema.clean(options);
                if(sitesCrudContext.validate(options)){
                    sitesMongo.update({_id : id}, {$set : options}, callback);
                }
                else {
                    let err = {}
                    let res = false
                    err.reason = "Problematic keys :"+sitesCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
                    callback(err, res)
                }
            }

            deleteSite(id , callback){
                sitesMongo.remove({_id : id}, callback);
            }

            render (){
                return (
                    <WrappedComponent
                        {...this.props}
                        createSite = {this.createSite}
                        readSite = {this.readSite}
                        updateSite = {this.updateSite}
                        deleteSite = {this.deleteSite}
                    />
                )
            }
        }
    }
}
