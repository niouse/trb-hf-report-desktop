import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

    let options = {
        chart: {
            type: 'scatter',
            backgroundColor : "none",
            plotBorderWidth : 1,
            plotBorderColor : "white",
            margin: [70, 50, 60, 80],
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
                color : "white"
            },
            series: {
                lineWidth: 1,
            }
        },
        series: [
            {
            color:"red",
            data: []
        },
        {
            color:"blue",
            data: []
        }]
    }


export default function TrbNewCampaign_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbNewCampaign_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					createdAt : new Date(),
                    numberOfworkers : 5,
                    timeStart : 0,
                    timeStop : 0,
                    siteId : props.hfCampaign.site.name,
                    numBf : 2,
                    numRunner : 2,
                    productId : "54N06",
                    concreteT : 11,
                    ironT:45,
                    first : false,
                    interventionType : {
                        coulee : false,
                        couleeVibre : false,
                        gunitDense : false,
                        gunitFin : false,
                        prefa : false,
                        dammage : false
                    },
                    layer : {
                        usure : false,
                        secu : false,
                        bascule : false,
                    },
                    location : {
                        rmImpact : false,
                        rmAvBarrage : false,
                        rmApBarrage : false,
                        rmPoutre : false,
                        rlPiege : false,
                        rlVirage : false,
                        rlGauche : false,
                        rlDroite : false,
                        rfPiege : false,
                        rfVirage : false,
                        rfGauche : false,
                        rfDroite : false
                    },
                    usureProfiles : [],
                    newProfile : [],
                    photos : [],
                    remarks : [],
					openSnack : false
				}

				this.chart=false
				this.charts=[]
                
                
                //COMMON API
                this.saveCampaign=this.saveCampaign.bind(this)
                
                //GENERAL API
                this.selectSite=this.selectSite.bind(this)
                this.changeState=this.changeState.bind(this)
                this.changeStateList=this.changeStateList.bind(this)
               
                //CHART API
                this.addPointToProfile=this.addPointToProfile.bind(this)
                this.deletPointToProfile=this.deletPointToProfile.bind(this)
                this.changeDistanceTc=this.changeDistanceTc.bind(this)
                this.changePointValue=this.changePointValue.bind(this)
                this.deleteProfile=this.deleteProfile.bind(this)
                this.updateChartProfile=this.updateChartProfile.bind(this)
                
                //PHOTOS API
                this.addPhoto=this.addPhoto.bind(this)
                this.loadPhoto=this.loadPhoto.bind(this)
                
                //REMARKS API
                this.addRemark=this.addRemark.bind(this)
                this.changeRemark=this.changeRemark.bind(this)
                this.deleteRemark=this.deleteRemark.bind(this)
            }
            
            componentDidMount() {
                   // this.props.getOneSite(this.props.sitesList[0]._id)
			}
            
            componentWillReceiveProps(newProps) {
               /* if (newProps.site && newProps.site.profile){
                    this.setState({
                        newProfile : newProps.site.profile
                    })
                }*/
                this.setState({...newProps.hfCampaign})
            }
            
            shouldComponentUpdate(nextProps, nextState) {
                /*if(nextProps.site !== this.props.site) {console.log("false"); return false}
                else {console.log('true'); return true}*/
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}
			
            changeState(key, value){
                this.setState({
                    [key]:value
                })
            }
            
            selectSite(value){
                this.setState({
                    siteId:value
                })
                let siteId = this.props.sitesList.filter((site)=>{return (site.name===value)})[0]._id
                this.props.getOneSite(siteId)
            }
            
            changeStateList(key, value){
                let list = Object.assign({},this.state[key])
                list[value]=!list[value]
                this.setState({
                    [key]: list
                })
            }
            
			toggleStateBool(key){
				let res = !this.state[key]
				this.setState({
					[key] : res
				})
			}

            showChart(id) {
				this.chart = Highcharts.chart(id, options) 
            }
			
			addStateItem(item){
				let newRemarques = this.state[item]
				newRemarques.push(true)
				this.setState({
					[item] : newRemarques
				})
			}
            
            addRemark(rmeark){
                let newRemarques = this.state.remarks.slice()
				newRemarques.push("")
				this.setState({
					remarks : newRemarques
				})
            }
            
            changeRemark(index, remark){
                let newRemarques = this.state.remarks.slice()
				newRemarques[index]=remark
				this.setState({
					remarks : newRemarques
				})
            }
            
            deleteRemark(index){
                let newRemarques = this.state.remarks.slice()
				newRemarques.splice(index, 1)
				this.setState({
					remarks : newRemarques
				})
            }
            
            saveCampaign(){
                let options = {
                    createdBy : "me",
                    createdAt : this.state.createdAt,
                    numberOfworkers : Number(this.state.numberOfworkers),
                    timeStart : this.state.timeStart,
                    timeStop : this.state.timeStop,
                    siteId : this.state.siteId,
                    numBf : this.state.numBf,
                    numRunner : Number(this.state.numRunner),
                    productId : this.state.productId,
                    concreteT : Number(this.state.concreteT),
                    ironT: Number(this.state.ironT),
                    first : this.state.first,
                    interventionType : this.state.interventionType,
                    layer : this.state.layer,
                    location : this.state.location,
                    usureProfiles : this.state.usureProfiles,
                    photos : this.state.photos,
                    remarks : this.state.remarks,
                }
                
                this.props.createHfCampaig(options, (err, res)=>{
                    if(err) console.log(err)
                    else this.toggleStateBool('openSnack')
                })
            }
			
			addProfile(){
				let index=this.state.usureProfiles.length 
				let newUsureProfiles = this.state.usureProfiles
				newUsureProfiles.push({
                    distanceTc : 0,
                    data : [[-50, 100], [-12, 40], [0, 35], [12, 40], [50, 100]]
                })
				
				this.setState({
					usureProfiles : newUsureProfiles
				}/*, ()=>{
					console.log("new-campaign-chart"+index)
					
					this.chart[index]=Highcharts.chart(("new-campaign-chart"+index), options) 
				}*/)
			}
            
            addPointToProfile(profileIndex){
                let newProfile = this.state.usureProfiles.slice()
                newProfile[profileIndex].data.push([0,0])
                this.setState({
                    usureProfiles : newProfile
                })
            }
            
            deletPointToProfile(profileIndex, pointIndex){
                 let newProfile = this.state.usureProfiles.slice()
                 newProfile[profileIndex].data.splice(pointIndex, 1)
                 this.setState({
                    usureProfiles : newProfile
                })
            }
            
            changeDistanceTc(profileIndex, value){
                let newProfile = this.state.usureProfiles.slice()
                newProfile[profileIndex].distanceTc = value
                 this.setState({
                    usureProfiles : newProfile
                })
            }
            
            changePointValue(profileIndex, pointIndex, xOrY, value){
                let newProfile = this.state.usureProfiles.slice()
                newProfile[profileIndex].data[pointIndex][xOrY] = Number(value)
                 this.setState({
                    usureProfiles : newProfile
                })
            }
            
            deleteProfile(profileIndex){
                let newProfile = this.state.usureProfiles.slice()
                newProfile.splice(profileIndex, 1)
                 this.setState({
                    usureProfiles : newProfile
                })
            }
            
            updateChartProfile(profileIndex){
                
            }
            
            addPhoto(){
                let newPhotos=this.state.photos.slice()
                newPhotos.push("")
                this.setState({
                    photos : newPhotos
                })
            }
            
            loadPhoto(event, index){
                let file = event.currentTarget.files[0]
                var reader  = new FileReader();
                let preview=document.getElementById("image"+index)
                
                reader.addEventListener("load", function () {
                    preview.src = reader.result;
                  }, false);

                  if (file) {
                    reader.readAsDataURL(file);
                  }
                
                console.log(file)
            }
            

            render() {
                return <WrappedComponent
				{...this.props}
                createdAt = {this.state.createdAt}
                numberOfworkers ={this.state.numberOfworkers}
                timeStart ={this.state.timeStart}
                timeStop = {this.state.timeStop}
                siteId = {this.state.siteId}
                numBf = {this.state.numBf}
                numRunner = {this.state.numRunner}
                productId = {this.state.productId}
                concreteT = {this.state.concreteT}
                ironT = {this.state.ironT}
                first = {this.state.first}
                interventionType = {this.state.interventionType}
                layer = {this.state.layer}
                location = {this.state.location}
                photos = {this.state.photos}
                remarks = {this.state.remarks} 
                           
                siteList={this.props.sitesList}
                
                selectSite={this.selectSite}
                changeState={this.changeState}
                changeStateList={this.changeStateList}
                addRemark = {this.addRemark}           
                changeRemark = {this.changeRemark}
                deleteRemark = {this.deleteRemark}
                saveCampaign={this.saveCampaign}
                 
                usureProfiles={this.state.usureProfiles}
                addProfile={()=>this.addProfile()}
                addPointToProfile={this.addPointToProfile}
                deletPointToProfile={this.deletPointToProfile}
                changeDistanceTc={this.changeDistanceTc}
                changePointValue={this.changePointValue}
                deleteProfile={this.deleteProfile}
                newProfile={this.state.newProfile}
                updateChartProfile={this.updateChartProfile}
                
                           
                addPhoto={this.addPhoto}
				showChart={(id)=>this.showChart(id)}
				remarks={this.state.remarks}
				photos={this.state.photos}
                loadPhoto={this.loadPhoto}
				addStateItem={(item)=>this.addStateItem(item)}
				
				
				toggleStateBool={(key)=>this.toggleStateBool(key)}
				openSnack={this.state.openSnack}
				/>
            }
        }
        $TrbNewCampaign_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbNewCampaign_Api
    }
}   