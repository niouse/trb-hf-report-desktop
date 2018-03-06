

import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function AppContainer_ButtonWrapper(_optional) {
    return (WrappedComponent) => {
        class $AppContainer_ButtonWrapper extends Component {
            constructor(props) {
                super(props);
                this.state = {
					wrappedComponent : props.children,
					bg : props.fill ||"green",
					fillOpacity : 0,
				}				
				this.attr={
					color : props.color ||"grey",
					fill : props.fill ||"none"
				}
            }
            componentDidMount() {

			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}
			
			mouseOver(e){
				if(this.props.hoverColor){
					let els = e.currentTarget.childNodes
					els[0].style.stroke = this.props.hoverBoxStrokeColor || "red"
					//els[0].style.fill = this.props.hoverBoxFill || "white"
					//els[1].style.stroke = this.props.hoverColor ||"red"
					//els[1].style.fill = this.props.hoverFill ||"white"
				}
			}
			
			mouseOut(e){
				if(this.props.color){
					let els = e.currentTarget.childNodes
					els[0].style.stroke = this.props.boxStrokeColor ||"grey"
					/*els[0].style.fill = this.props.boxFill || "none"
					els[1].style.stroke = this.props.color ||"grey"
					els[1].style.fill = this.props.fill ||"grey"*/
				}
			}
			
			changeBG(e){
				let bg = this.state.bg ==="none" ? "#4af371" : "none"
				this.setState({
					bg : bg
				})
				/*let fillOpacity = this.state.fillOpacity ===0 ? 1 : 0
				this.setState({
					fillOpacity : fillOpacity
				})*/
			}

            render() {
				const WrappedComponent = this.props.svgIcon
                let bg = this.props.isSelected ? this.state.bg : "none"
                return  <div style={{width : "100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center", cursor:"pointer"}}>
				<svg id="svg2" height={this.props.width || 90} width={this.props.width || 90} viewBox="0 0 500 500" onMouseOver={(e)=>this.mouseOver(e)} onMouseOut={(e)=>this.mouseOut(e)} >
					 {this.props.showBox ?
						<path id="contour" d="M 0,0 500,0 500,500 0,500 z" fill={bg}   stroke={this.props.boxStrokeColor || "#000"} strokeWidth="20px"/> :
					   <path />}
					<WrappedComponent {...this.attr}/>
					{/*React.cloneElement(this.state.wrappedComponent, {...this.attr})*/}
					
				</svg>
				</div>
            }
        }
        $AppContainer_ButtonWrapper.propTypes = {
            //styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $AppContainer_ButtonWrapper
    }
}
    

