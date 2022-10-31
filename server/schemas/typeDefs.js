const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }
  type User {
    _id: ID
    email: String
    password: String
    devices: [Device]
  }
  type Device {
    _id: ID
    uuid: String
    name: String
    plants: [Plant]
  }
  type Plant {
    _id: ID
    name: String
    position: Int
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
    devices: [Device]
    plants: [Plant]
    plantsByUUID(uuid: String!): Device
    plantById(_id: ID!): Plant
    historyById(_id: ID!): PlantHistory
    user: User
  }

  type Mutation {
    addDevice(uuid: String!, name: String!): Device
    updateHistory(_id: ID!, temperature: Int, pH: Float, humidity: Int): PlantHistory
    setHistory(_id: ID!, temperature:[Int], pH:[Float], humidity:[Int]): [PlantHistory]
    createPlant(name: String!, position: Int!, uuid: String!, temperature: Int, pH: Float, humidity: Int): Plant
    createUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
