import { gql } from "@apollo/client";

export interface ILoginDTO {
    email?: string,
    pass?: string,
}

export const loginQuery = () => (
    gql`
        query login($query: String!) {
            login(query: $query) {
                email,
                pass
            }
        }
    `
);