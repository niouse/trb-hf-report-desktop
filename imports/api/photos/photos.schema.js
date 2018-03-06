export const hfCampaignSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Id of the report creator",
        max: 20,
        min : 0
    },
    photo : {
        type : String,      
    }
})

