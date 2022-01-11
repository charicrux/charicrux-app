import { gql } from '@apollo/client';

export const getFundraisersQuery = () => (
    gql`
        query getFundraisers($query: String!) {
            getFundraisers(query: $query) {
                _id,
                name,
                goal,
                raised
            }
        }
    `
);