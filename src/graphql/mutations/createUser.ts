import { gql } from '@apollo/client';

export interface ICreateUserDTO {
    email?: string,
    pass?: string,
    organizationId?: string,
}

export const createUserMutation = () => (
    gql`
        mutation createUser($input: CreateUserDTO!) {
            createUser(input: $input) {
                _id,
                email,
                roles,
                status,
                accessToken,
                wallet { _id, address },
                organization { symbol, name, _id },
            }
        }
    `
);