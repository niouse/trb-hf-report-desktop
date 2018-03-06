

import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

//import {usersMongo} from "./../users.js"

var containerStyles = {
	width:"100%", 
	height:"100%", 
	display:"flex",
	alignItems : "center",
	justifyContent : "center",
}

export default function UsersListDataService(Loading){
    
    return (WrappedComponent)=>{

         class _UsersListComponentDataService0 extends Component {

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
                        usersList = {this.props.usersList}
                    /> :
                    <div style={containerStyles}>{this.getLoading()}</div>
                )
            }
        }

         const _UsersListDataService1 = createContainer((props) => {
            
          let usersSubList = Meteor.subscribe("usersList")
          return {
            ...props,
            usersList : Meteor.users.find({}).fetch().map((user)=>{
                return {name : user.firstName + " " + user.lastName}
            }),
            isReady : usersSubList.ready()
          };
        }, _UsersListComponentDataService0);
        
        return _UsersListDataService1 

    }
}

