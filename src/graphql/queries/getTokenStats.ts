import { gql } from '@apollo/client';

export const getTokenStatsQuery = () => (
    gql`
        query getTokenStats($input: TokenStatsDTO!) {
            getTokenStats(input: $input) {
                price
            }
        }
    `
);