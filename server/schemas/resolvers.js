const { User, Plant, PlantHistory } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { async } = require("rxjs");

const resolvers = {
  Query: {
    plants: async (parent, args, context) => {
      const plantData = await Plant.find()
        .populate("history")
        .select("-__v");
      return plantData;
    },
    plantById: async (parent, { _id }, context) => {
      const plantData = await Plant.findById(_id)
        .populate("history")
        .select("-__v")
      return plantData;
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findById(context.user._id)
          .select("-__v -password")
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    updateHistory: async (parent, { _id, temperature, pH, humidity }, context) => {
      const getHistory = await Plant.findById(_id)
      console.log(getHistory.history[0])
      const plantData = await PlantHistory.findByIdAndUpdate(
        getHistory.history[0],
        {
          $push: {
            createdAt: Date.now(),
            temperature: temperature,
            pH: pH,
            humidity: humidity,
          },
        },
        { new: true }
      )
        .select("-__v")
      return plantData;
    },
    setHistory: async (parent, { _id, temperature, pH, humidity }, context) => {
      let createdAt = Date.now();
      createdAt = createdAt.toString()
      let plantHistory = await PlantHistory.create({
        createdAt: [createdAt],
        temperature: temperature,
        pH: pH,
        humidity: humidity
      })
      let updatePlant = await Plant.findByIdAndUpdate(_id, { history: plantHistory }).populate({ path: "history" })
      return updatePlant.history;
    },

    createPlant: async (parent, { name, temperature, pH, humidity }) => {
      const plant = await Plant.create({
        name: name,
        temperature: temperature,
        pH: pH,
        humidity: humidity
      });
      return plant;
    },
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
  }

};

module.exports = resolvers;
