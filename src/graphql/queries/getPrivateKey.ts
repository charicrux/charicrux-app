import { gql } from '@apollo/client';

export const getWalletPrivateKeyQuery = () => (
    gql`
        query getWalletPrivateKey {
            getWalletPrivateKey 
        }
    `
);