import { gql, useQuery } from '@apollo/client';

const GET_MISSIONS = gql`
  query GetMissions {
    launchesPast(limit: 10) {
      id
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
  }
  }
`;

export const useMissions = () => {
  const { loading, error, data } = useQuery(GET_MISSIONS);

  return {
    error,
    data,
    loading
  }
}