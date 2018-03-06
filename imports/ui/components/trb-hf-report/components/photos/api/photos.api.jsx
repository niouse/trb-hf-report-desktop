
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function Photos_Api(_optional) {
    return (WrappedComponent) => {
        class $Photos_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            componentDidMount() {}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            testMethod(test) {
                return test
            }

            render() {
                return <WrappedComponent
				{...this.props}
				testMethod={()=>this.testMethod()}
				/>
            }
        }
        $Photos_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $Photos_Api
    }
}
    