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
  mutation addDevice($uuid: String!, $nickname: String!) {
  addDevice(uuid: $uuid, nickname: $nickname) {
    _id
    uuid
    nickname
  }
}
`;

