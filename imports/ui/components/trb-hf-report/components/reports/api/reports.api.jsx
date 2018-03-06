
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function Reports_Api(_optional) {
    return (WrappedComponent) => {
        class $Reports_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    openFilters : false,
                    numberOfFilters : 0,
                    numberOfItems : 0,
                    
                }
                this.toggleStateBool=this.toggleStateBool.bind(this)
                this.selectFilter=this.selectFilter.bind(this)
                
                console.log(props)
            }
            componentDidMount() {}
            componentWillReceiveProps(newProps) {
                console.log(newProps)
            }
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            toggleStateBool(key){
                this.setState({
                    [key]: !this.state[key]
                })
            }
            
            selectFilter(key){
                
            }

            render() {
                return <WrappedComponent
				{...this.props}
				toggleStateBool={this.toggleStateBool}
                openFilters = {this.state.openFilters}
                numberOfFilters={this.state.numberOfFilters}
                numberOfItems={this.state.numberOfItems}
                selectFilter={this.selectFilter}
				/>
            }
        }
        $Reports_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $Reports_Api
    }
}
    