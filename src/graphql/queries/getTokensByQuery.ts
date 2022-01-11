import { gql } from '@apollo/client';

export const getTokensByQuery = () => (
    gql`
        query getTokensByQuery($query: String!) {
            getAggregatedOrganizations(query: $query) {
                _id,
                name,
                symbol
            }
        }
    `
);