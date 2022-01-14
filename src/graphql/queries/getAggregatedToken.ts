import { gql } from '@apollo/client';

export interface IAggregatedTokenResponse {
    description: any;
    _id: any;
    symbol: string,
    name: string,
    address?: string,
}

export const getAggregatedTokenQuery = () => (
    gql`
        query getAggregatedToken($input: GetAggregatedTokenDTO!) {
            getAggregatedToken(input: $input) {
                _id,
                symbol,
                name,
                address,
                description,
            }
        }
    `
);