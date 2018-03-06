
export default function TrbNewCampaign_computeStyles(defaultStyles, stylesOptions, userStyles) {
    let styles = Object.assign({}, defaultStyles);
    
    let height = (window.innerHeight-50).toString()+"px"
    
    // Overwrite styles according screen size or theme
    styles.title.color= stylesOptions.theme.colors.primary
	styles.menu2.color=stylesOptions.theme.colors.primary
	styles.menu2.border="2px solid "+stylesOptions.theme.colors.primary
    styles.box2.maxHeight=height
    styles.title.color = stylesOptions.theme.colors.primary
    
    styles.cell.color = stylesOptions.theme.colors.secondary
    
    styles.appliAttr.color = stylesOptions.theme.colors.primary
    styles.appliAttr.hoverColor = stylesOptions.theme.colors.primary
    styles.appliAttr.hoverBoxStrokeColor = stylesOptions.theme.colors.primary
    styles.appliAttr.fill= "green"
    // Overwrite styles according to device type
    if (stylesOptions.device === "pc") {}
    if (stylesOptions.device === "smartPhone") {
		styles.box.width = "100%",
		styles.box.maxWidth = "1000px"
	}

    // Overwrite styles according user provided styles
    for (var key in userStyles) {
        if (styles[key]) {
            for (var key2 in userStyles[key]) {
                console.log(userStyles[key][key2])
                styles[key][key2] = userStyles[key][key2]
            }
        }
    }
    return styles
}
