import { gql, useQuery } from '@apollo/client';

const GET_MISSION = gql`
  query GetMission($id: ID!) {
    launch(id: $id){
    id
        mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          flight
          core {
            reuse_count
            status
          }
        }
      }
      second_stage {
        payloads {
          payload_type
          payload_mass_kg
          payload_mass_lbs
        }
      }
    }
    ships {
      name
      home_port
      image
    }
  }
  }
`;

export const useMission = (id) => {
  const { loading, error, data } = useQuery(GET_MISSION, {
    variables: {
      id
    }
  });

  return {
    error,
    data,
    loading
  }
}