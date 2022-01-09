import { gql } from '@apollo/client';

export interface IAggregatedTokenResponse {
    symbol: string,
    name: string,
}

export const getAggregatedTokenQuery = () => (
    gql`
        query getAggregatedToken($input: GetAggregatedTokenDTO!) {
            getAggregatedToken(input: $input) {
                symbol,
                name
            }
        }
    `
);