const { User, Plant } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { async } = require("rxjs");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findById(context.user._id)
          .select("-__v -password")
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    plants: async (parent, args, context) => {
      const plantData = await Plant.find()
        .select("-__v");
      let test = plantData.filter((plantData) => plantData._id)
      let allData = []
      test.forEach(element => {
        let data = Plant.findById(Buffer.from(element._id.id).toString('hex')).then(data => data)
        allData.push(data)
      })
      for (var i = 0; i < allData.length; i++) {
        allData[i] = await allData[i]
      }
      let data = allData.filter(data => data.name == "Pikachu")
      console.log(data)
      return data;
    },
    plantById: async (parent, args, context) => {
      const plantData = await Plant.findById(args._id)
        .select("-__v")
      console.log(plantData);
      return plantData;
    }
  },

  Mutation: {
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
    createPlant: async (parent, { name, minTemp, maxTemp, minPH, maxPH, minHumidity, maxHumidity }) => {
      const plant = await Plant.create({
        name: name,
        temperature: {
          minTemp: minTemp,
          maxTemp: maxTemp,
        },
        pH: {
          minPH: minPH,
          maxPH: maxPH,
        },
        humidity: {
          minHumidity: minHumidity,
          maxHumidity: maxHumidity
        }
      });
      return plant;
    }
  }

};

module.exports = resolvers;
