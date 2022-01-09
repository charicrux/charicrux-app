import { gql } from '@apollo/client';


export const createTokenMutation = () => (
    gql`
        mutation createToken {
            createToken 
        }
    `
)