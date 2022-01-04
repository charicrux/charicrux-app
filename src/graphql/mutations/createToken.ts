import { gql } from '@apollo/client';

export interface ICreateTokenDTO {
    name?: string,
    symbol?: string,
}

export const createTokenMutation = ({ name, symbol } : ICreateTokenDTO) => (
    gql`
        mutation createToken {
            createToken(input: { name: "${name}", symbol: "${symbol}" }) {
                id,
                name,
                symbol,
                value,
            }
        }
    `
)