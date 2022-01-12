import { gql } from '@apollo/client';

export const getFundraisersQuery = () => (
    gql`
        query getFundraiserByQuery($query: String!) {
            getFundraiserByQuery(query: $query) {
                _id,
                name,
                goal
                organization {
                    symbol,
                    name
                }
            }
        }
    `
);