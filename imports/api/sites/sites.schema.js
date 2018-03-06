export const hfCampaignSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Id of the report creator",
        max: 20,
        min : 0
    },
    numBf : {
        type : Number,
        label : "number of blast furnace"
    },
    numTc : {
        type : Number,
        label : "number of TC"
    },
    profile : {
        type : [[Number]],
        label : "wear profile",
        decimal : true
    }
})

