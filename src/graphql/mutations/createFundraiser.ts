import { gql } from "@apollo/client";

export interface ICreateFundraiserDTO {
    name?: string,
    goal?: number,
    raised?: number,
}

export const createFundraiserMutation = () => (
    gql`
        mutation createFundraiser($input: CreateFundraiserDTO!) {
            createFundraiser(input: $input) {
                _id,
                name,
                goal,
                raised
            }
        }
    `
)