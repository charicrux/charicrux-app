import { gql } from "@apollo/client";

export interface ICreateFundraiserDTO {
    name?: string,
    goal?: number,
    purpose?: string,
}

export const createFundraiserMutation = () => (
    gql`
        mutation createFundraiser($input: CreateFundraiserDTO!) {
            createFundraiser(input: $input) {
                _id,
            }
        }
    `
)