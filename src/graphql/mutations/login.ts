import { gql } from '@apollo/client';

export interface ILoginDTO {
    email?: string,
    pass?: string,
}

export const loginMutation = ({ email, pass }: ILoginDTO) => {
    gql`
        
    `
}