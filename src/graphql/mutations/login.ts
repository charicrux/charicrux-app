import { gql } from "@apollo/client";

export interface ILoginDTO {
    email?: string,
    pass?: string,
}

export const loginClientMutation = gql`
        mutation loginClient($input: LoginUserDTO!) {
            loginUser(input: $input) {
                email,
                accessToken,
                organization { symbol, name },
            }
        }
    `