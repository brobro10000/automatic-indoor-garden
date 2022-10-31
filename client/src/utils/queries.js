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
  query devices {
  user {
    devices {
      uuid
      name
    }
  }
}
`

export const QUERY_PLANTS = gql`
query PlantsByUUID($uuid: String!) {
  plantsByUUID(uuid: $uuid) {
    _id
    uuid
    name
    plants {
      _id
      name
      position
      temperature
      pH
      humidity
    }
  }
}`