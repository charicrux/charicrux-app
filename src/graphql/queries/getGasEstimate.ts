import { gql } from '@apollo/client';

export interface IGasEstimateResponse {
    gasCostETH: number,
    maxGasCostETH: number
}

export const getGasEstimateQuery = () => (
    gql`
        query getGasEstimate($input: GetGasEstimateDTO!) {
            getGasEstimate(input: $input) {
                gasCostETH,
                maxGasCostETH,
            }
        }
    `
);