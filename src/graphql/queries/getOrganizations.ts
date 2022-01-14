import { gql } from '@apollo/client';

export const getOrganizationsQuery = () => (
    gql`
        query getOrganizations($query: String!) {
            getOrganizations(query: $query) {
                _id,
                name,
                symbol,
                description,
            }
        }
    `
);