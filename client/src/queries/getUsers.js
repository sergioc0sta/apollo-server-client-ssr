import {gql} from '@apollo/client';

const GET_USERS = gql`
    query{
        users{
        age
        name
        email
        }
    }
`;

export default GET_USERS;