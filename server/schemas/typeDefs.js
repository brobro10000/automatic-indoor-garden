const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  type Plant {
    _id: ID
    name: String
    temperature: Int
    pH: Float
    humidity: Int
  }

  type Query {
    user: User
    plants: Plant
    plantById(_id: ID!): Plant
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    createPlant(name: String!, minTemp:Int, maxTemp:Int, minPH:Float, maxPH:Float, minHumidity:Int, maxHumidity:Int): Plant
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
