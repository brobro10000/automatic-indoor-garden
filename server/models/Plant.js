const { Schema, model, Types } = require("mongoose");

const plantSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    position: {
        type: Number,
        required: true,
    },
    temperature: {
        type: Number,
    },
    pH: {
        type: Number,
    },
    humidity: {
        type: Number,
    },
    history: [
        {
            type: Schema.Types.ObjectId,
            ref: 'PlantHistory'
        }
    ]
},
    {
        timestamps: true,
        stricitPopulate: false
    });


const Plant = model("Plant", plantSchema);

module.exports = Plant;
