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
    history: [PlantHistory]
  }
  type PlantHistory {
    _id: ID
    createdAt: [String]
    temperature: [Int]
    pH: [Float]
    humidity: [Int]
  }



  type Query {
    plants: [Plant]
    plantById(_id: ID!): Plant
    historyById(_id: ID!): PlantHistory
    user: User
  }

  type Mutation {
    updateHistory(_id: ID!, temperature: Int, pH: Float, humidity: Int): PlantHistory
    setHistory(_id: ID!, temperature:[Int], pH:[Float], humidity:[Int]): [PlantHistory]
    createPlant(name: String!, temperature: Int, pH: Float, humidity: Int): Plant
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
