import { IAggregatedUser } from "../interfaces/aggregated-user.interface";

export enum EUserActions {
    SET_AGGREGATED_USER = "SET_AGGREGATED_USER",
}

export interface ISetAggregatedUser {
    type: EUserActions.SET_AGGREGATED_USER,
    payload: IAggregatedUser,
}