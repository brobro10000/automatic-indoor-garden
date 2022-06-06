const { Schema, model, Types } = require("mongoose");

const plantSchema = new Schema({
    createdAt: {
        type: Array,
    },
    temperature: {
        type: Array,
    },
    pH: {
        type: Array,
    },
    humidity: {
        type: Array,
    }
});

new Date()//?
const PlantHistory = model("PlantHistory", plantSchema);

module.exports = PlantHistory;
