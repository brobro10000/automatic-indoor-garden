import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_DEVICE = gql`
  mutation addDevice($uuid: String!, $name: String!) {
  addDevice(uuid: $uuid, name: $name) {
    _id
    uuid
    name
  }
}
`;

export const ADD_PLANT = gql`
mutation Mutation($name: String!, $position: Int!, $uuid: String!, $temperature: Int, $pH: Float, $humidity: Int) {
  createPlant(name: $name, position: $position, uuid: $uuid, temperature: $temperature, pH: $pH, humidity: $humidity) {
    name
    position
    temperature
    pH
    humidity
  }
}
`;