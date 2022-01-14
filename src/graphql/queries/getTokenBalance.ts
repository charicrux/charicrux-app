import { gql } from '@apollo/client';

export const getTokenBalanceQuery = () => (
    gql`
        query getClientBalance($tokenId: String!) {
            getClientBalance(tokenId: $tokenId) {
                balance
            }
        }
    `
);