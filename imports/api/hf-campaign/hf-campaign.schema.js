export const hfCampaignSchema = new SimpleSchema({
    createdBy: {
        type: String,
        label: "Id of the report creator",
        max: 20,
        min : 0
    },
    createdAt : {
        type : Date,
        label: "Creation date of the repport",
    },
    numberOfworkers: {
        type: Number,
        label: "NUmber of workers",
    },
    timeStart: {
        type: Date,
        label: "Starting time of work",
    },
    timeStop : {
        type : Date,
        label : "Stop time of work"
    },
    siteId : {
        type : String,
        label : "Id du site d'intervention",
    },
    numberOfworkers : {
        type : Number,
        optional : true
    },
    numBf : {
        type : Number,
        optional : true
    },
    numRunner : {
        type : Number,
        optional : true
    },
    productId : {
        type : "string",
        optional : true
    },
    concreteT : {
        type : Number,
        optional : true
    },
    ironT: {
        type : Number,
        optional : true
    },
    first : {
        type : Boolean,
        optional : true,
    },
    interventionType : {
        type : Object,
        optional : true,
        //allowedValues : ["coulage", "coulage-vibre", "dammage", "prefa", "gunitage-dense", "gunitage-leger"]
    },
    layer : {
        type : Object,
        optional : true,
        //allowedValues : ["securite", "usure"]
    },
    location : {
        type : Object,
        //allowedValues : ["coulage", "coulage-vibre", "dammage", "prefa", "gunitage-dense", "gunitage-leger"]
    },
    remarks : {
        type : [String],
        optional : true,
    }
})

