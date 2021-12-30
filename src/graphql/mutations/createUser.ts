import { gql } from '@apollo/client';

export interface ICreateUserDTO {
    email?: string,
    pass?: string,
}

export const createUserMutation = ({ email, pass } : ICreateUserDTO) => (
    gql`
        mutation createUser {
            createUser(input: { email:"${email}", pass:"${pass}" }) {
                _id,
                email,
                roles,
                status,
                accessToken,
            }
        }
    `
);