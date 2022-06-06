const { Schema, model, Types } = require("mongoose");

const plantSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    temperature: {
        type: Object,
        minTemp: {
            type: Number
        },
        maxTemp: {
            type: Number
        }
    },
    pH: {
        type: Object,
        minPH: {
            type: Number
        },
        maxPH: {
            type: Number
        },
    },
    humidity: {
        type: Object,
        minHumidity: {
            type: Number
        },
        maxHumidity: {
            type: Number
        },
    }
});


const Plant = model("Plant", plantSchema);

module.exports = Plant;
