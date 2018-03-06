

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

export default function PhotosListDataService(Loading){
    
    return (WrappedComponent)=>{

         class _PhotosListComponentDataService0 extends Component {

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
                        photosList = {this.props.photosList}
                    /> :
                    <div style={containerStyles}>{this.getLoading()}</div>
                )
            }
        }

         const _PhotosListDataService1 = createContainer((props) => {
            
          let photoSubList = Meteor.subscribe("photosList")
          return {
            ...props,
            photosList : photosMongo.find({}, {fields : {name : 1}}).fetch(),
            isReady : photoSubList.ready()
          };
        }, _PhotosListComponentDataService0);
        
        return _PhotosListDataService1 
    }
}



    