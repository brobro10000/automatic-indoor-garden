import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      email
    }
  }
`;

export const QUERY_DEVICES = gql`
  {
  user {
    devices {
      uuid
      nickname
    }
  }
}
`