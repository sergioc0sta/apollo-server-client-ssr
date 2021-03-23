import { ApolloClient, HttpLink, } from '@apollo/client';
import cache  from './cache'

function clientGraphql(){
    return new ApolloClient({
        ssrMode: typeof window == 'undefined',
        link: new HttpLink({
            uri: 'http://localhost:4000/graphql',
        }),
        cache:cache,
    })
};

export default clientGraphql;