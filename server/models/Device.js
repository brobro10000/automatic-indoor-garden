const { Schema, model, Types } = require("mongoose");

const deviceSchema = new Schema({
    uuid: {
        type: String,
        required: true,
        unique: true,
    },
    plants: [
        {
            type: Schema.Types.ObjectId,
            ref: "Plant",
        },
    ],
})

const Device = model("Device", deviceSchema);

module.exports = Device;