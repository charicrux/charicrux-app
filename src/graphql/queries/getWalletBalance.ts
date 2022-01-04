import { gql } from '@apollo/client';

export const getWalletBalanceQuery = () => (
    gql`
        query getWalletBalanceQuery {
            getWalletBalance
        }
    `
);