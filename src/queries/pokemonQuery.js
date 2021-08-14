import { gql } from '@apollo/client'

const GET_POKEMON = gql`
  pokemon(name: $name) {
    id
    name
    sprites {
      front_default
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
  }
`

export default GET_POKEMON