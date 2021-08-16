import { gql } from '@apollo/client'

const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      height
      weight
      abilities {
        ability {
          name
        }
      }
      types {
        type {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
      moves {
        move {
          name
        }
        version_group_details {
          level_learned_at
        }
      }
    }
  }
`

export default GET_POKEMON