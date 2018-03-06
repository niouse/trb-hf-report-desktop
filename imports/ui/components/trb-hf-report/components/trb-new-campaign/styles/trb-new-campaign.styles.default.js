
export default TrbNewCampaign_Styles_Default = {
    container: {
        width: "100%",
        height: "100%",
    },
	box : {
		maxWidth : "100%", 
		margin : "auto"
	},
    box2 : {
        width:"100%", 
        maxHeight: "100%", 
        overflow:"auto"
    },
    mainList : {
        width:"100%", 
        height:"auto"
    },
    title : {
        fontWeight : "bold",
        color : "red",
        display : "flex",
        justifyContent : "space-between",
        width : "200px"
    },
	menu : {
		//height : "80px",
		//background: "#fa1212", 
		//backgroundImage:"linear-gradient(to bottom, #fa1212, #ffffff)", 
		//borderRadius : "10px",
		//backgroundColor :"black",
	},
	menu2 : {
		display : "flex", 
		justifyContent:"space-around",
		alignItems:"center",
		//height : "40px", 
		borderRadius : "5px", 
		backgroundColor :"black", 
		color:"white", 
		fontWeight : "bold",
		cursor : "pointer",
	},
	innerMenu : {
		backgroundColor:"white",
		borderRadius : "10px"
	},
    row : {
        display : "flex",
        justifyContent : "space-between",
        width : "100%"
    },
    cell:{
        flex : 1,
        display : "flex",
        alignItems : "center",
        color : "grey",
        paddingLeft : "12px"
    },
    textFieldNumber:{
        width : "100px"
    },
    appliAttr : {
        fill : "none",
        hoverFill : "none",
        color : "red",
        hoverColor : "red",
        width : "130px",
        showBox : true,
        boxStrokeColor : "none",
        hoverBoxStrokeColor : "red",
        hoverBoxFill : "white",
        boxFill : "white",	
    },
    buttonContainer : {
        display : "flex", 
        flexWrap:"wrap", 
        justifyContent : "center"
    },
    buttonBox : {
        width : "120px", 
        height:"120px", 
        border:"1px solid grey"
    },
    buttonContainer : {
        display : "flex", 
        justifyContent : "center", 
        flexWrap : "wrap"
    },
    layer : {
        container : {
            display : "flex", 
            justifyContent : "center"
        }
    },
    locationTc : {
        maxWidth : "50px", 
        marginRight :"20px"
    },
    chartHeader : {
        width:"100%",
        display:"flex", 
        justifyContent : "space-between", 
        alignItems:"center",
        
    },
    chartOptions : {
        display : "flex",
        //border : "1px solid red"
    },
    chartPointsContainer : {
        flex : 1,
    },
    chartPoints : {
        display : "flex",
        alignItems : "center",
        justifyContent : "space-between",
        //flexDirection : "column",
        flex : 1,
        // border : "1px solid blue"
    },
    chartButtonContainer : {
        display: "flex",
        flexDirection : "column",
        jutifyContent: "center",
        alignItems : "center",
         //border : "1px solid green"
    },
    photoLegend : {
        maxWidth : "150px"
    }
}
