import { gql } from "@apollo/client";

export interface ICreateOrganizationMutation {
    name?: string,
    symbol?: string,
    description?: string,
    email?: string;
}

export const createOrganizationMutation = () => (
    gql`
        mutation createOrganization($input: CreateOrganizationDTO!) {
            createOrganization(input: $input) 
        }
    `
)