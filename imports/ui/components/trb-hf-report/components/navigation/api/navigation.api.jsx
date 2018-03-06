
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function Navigation_Api(_optional) {
    return (WrappedComponent) => {
        class $Navigation_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    activePage : "reports"
                }
                
                this.startUrl=this.props.startUrl || ""
                this.goToPage=this.goToPage.bind(this)
            }
            
            componentDidMount() {}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            goToPage(page, param){
                this.setState({activePage : page})
				if(param){
					page=page+'/'+param
				}
				this.props.history.push(this.startUrl+'/'+page);
			}

            render() {
                return <WrappedComponent
                    {...this.props}
                    goToPage={this.goToPage}
                    activePage={this.state.activePage}
				/>
            }
        }
        $Navigation_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $Navigation_Api
    }
}
    