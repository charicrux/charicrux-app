import { gql } from '@apollo/client';

export interface IAggregatedPositionsResponse {
    _id: any;
    userId:string,
    tokenId:string,
    organization: {
        name: string,
        symbol: string,
    },
    token: {
        address:string,
    }
}

export const getAggregatedPositionsQuery = () => (
    gql`
        query getAggregatedPositionsQuery($userId: String!) {
            getTokenPositions(userId: $userId) {
                _id,
                userId,
                tokenId,
                organization {
                    _id,
                    name,
                    symbol,
                },
            }
        }
    `
);