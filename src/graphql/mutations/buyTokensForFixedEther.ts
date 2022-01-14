import { gql } from "@apollo/client";

export interface IBuyTokensForFixedEtherDTO {
    ether: number,
    tokenId: string,
}

export const purchaseTokensForFixedEtherMutation = () => (
    gql`
        mutation purchaseTokensForFixedEther($input: TokensForFixedEtherDTO!) {
            purchaseTokensForFixedEther(input: $input) 
        }
    `
)