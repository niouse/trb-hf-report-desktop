

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {photosMongo} from "./../photos.js"

var containerStyles = {
	width:"100%", 
	height:"100%", 
	display:"flex",
	alignItems : "center",
	justifyContent : "center",
}

export default function PhotosDataService(){

    return (WrappedComponent)=>{

         class _PhotosComponentDataService0 extends Component {

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
                        photo = {this.props.photo}
                    /> :
                    <div style={containerStyles}>{this.getLoading()}</div>
                )
            }
        }

        const _PhotosDataService1 = createContainer((props) => {

          let photoSub = Meteor.subscribe("photos")
          return {
            ...props,
            photo : photosMongo.find({_id : props.photoId}).fetch()[0],
            isReady : photoSub.ready()
          };
        }, _PhotosComponentDataService0);

        return _PhotosDataService1
    }
}
    