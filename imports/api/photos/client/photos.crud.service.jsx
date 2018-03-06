
import React, { Component } from 'react';
import {photosSchema} from "./../photos.schema.js";
import {photosMongo} from "./../photos.js";

export const PhotosCrudService = (WrappedComponent)=>{
	
	var photosCrudContext = photosSchema.namedContext("photosCrudOp")

	return class _PhotosCrudService extends Component {

		constructor(props){
			super(props);
		}

		createPhoto(options , callback){
			photosSchema.clean(options);
			if(photosCrudContext.validate(options)){
				photosMongo.insert(options, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+photosCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		readPhoto(options , callback){

		}
		
		updatePhoto(id, options , callback){
			console.log(options)
			photosSchema.clean(options);
			if(photosCrudContext.validate(options)){
				photosMongo.update({_id : id}, {$set : options}, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+photosCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		deletePhoto(id , callback){
			photosMongo.remove({_id : id}, callback);
		}
		
		render (){
			return (
				<WrappedComponent
					{...this.props}
					createPhoto = {this.createPhoto}
					readPhoto = {this.readPhoto}
					updatePhoto = {this.updatePhoto}
					deletePhoto = {this.deletePhoto}
				/>
			)
		}
	}
}
