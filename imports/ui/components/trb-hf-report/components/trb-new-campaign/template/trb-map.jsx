
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';
let options = {
    chart: {
        type: 'scatter',
        backgroundColor : "none",
        plotBorderWidth : 1,
        plotBorderColor : 'white',
        margin: [0, 0, 0, 0],
    },
    title: {
        text: 'Profil d\'usure',
        style : {display :"none"}

    },
    /*subtitle: {
        text: 'Click the plot area to add a point. Click a point to remove it.'
    },*/
    xAxis: {
        gridLineWidth: 1,
        minPadding: 0.2,
        maxPadding: 0.2,
        maxZoom: 60
    },
    yAxis: {
        title: {
            text: 'Distance (mm)'
        },
        minPadding: 0.2,
        maxPadding: 0.2,
        maxZoom: 60,
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        boxPlot : {
            color : 'white'
        },
        series: {
            lineWidth: 1,
        }
    },
    series: [
        {
        color:'red',
        data: [[-30, 100]]
    },
    {
        color:'blue',
        data: [[0,0]]
    }]
}


export default function TrbMap(_optional) {
    return (WrappedComponent) => {
        class $TrbMap extends Component {
            constructor(props) {
                super(props);
                this.state = {
				}
				this.chart=false
               // console.log(props.wwearProfile)
            }
            componentDidMount() {
                if(this.props.newProfile){
                    options.series[0].data=this.props.newProfile
                    options.series[1].data=this.props.wearProfile
                }
				this.chart = Highcharts.chart(this.props.id, options) 	
			}
            
            componentWillReceiveProps(newProps) {
                console.log(newProps.wearProfile)
                console.log(newProps.newProfile)
                this.chart.update({
                    series: [
                        {
                            color:'red',
                            data: newProps.newProfile
                        },
                        {
                            color:'blue',
                            data: newProps.wearProfile
                        }]
                })
                /*this.chart.series[0].update({
                    data : newProps.newProfile
                })
                this.chart.series[1].update({
                    data : newProps.wearProfile
                })*/
               // this.chart.series[1].setData(newProps.wearProfile)
                
                this.chart.redraw()
            }
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {
			
			}
            componentDidUpdate() {}
            componentWillUnmount() {}


            render() {
                return <div id={this.props.id} style={{width : "100%", height:"480px"}}></div>
            }
        }
        $TrbMap.propTypes = {
            //styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbMap
    }
}
    