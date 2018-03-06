import React, { Component } from 'react';

export default function  TrbHfReportRouterService(Router){
	return (WrappedComponent)=>{
		class $TrbHfReportRouterService extends Component {
            constructor(props) {
				super(props)
			}
            render (){
                return (
                    <Router>
                        <WrappedComponent {...this.props}/>
                    </Router>
                )	
            }
		}
		return $TrbHfReportRouterService
	}
}



