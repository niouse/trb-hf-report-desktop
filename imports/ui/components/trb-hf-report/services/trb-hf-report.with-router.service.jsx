import { Subject } from 'rxjs/Subject';
import React, { Component } from 'react';

export default function  TrbHfReportWithRouterService(withRouter){
	return (WrappedComponent)=>{
		const $WrappedComponent=withRouter(WrappedComponent)
		class $TrbHfReportWithRouterService extends Component {
			constructor(props) {
				super(props)

			}
			componentDidMount(){}
			render (){
				return (
						<$WrappedComponent {...this.props}/>
				)
			}	
		}
		return $TrbHfReportWithRouterService
	}
}