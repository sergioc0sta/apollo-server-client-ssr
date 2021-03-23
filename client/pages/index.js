import { useQuery, gql } from '@apollo/client'
import {initializeApollo} from '../src/config/client';
import GET_USERS from '../src/queries/getUsers'

export default function Home() {
  const {data} = useQuery(GET_USERS)
  return (
    <div>
      <p> { JSON.stringify(data.users)}</p>
    </div>
  )
};

export async function getStaticProps(){
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_USERS
  });

  return { props: { initialApolloState: apolloClient.cache.extract(),}}
};

