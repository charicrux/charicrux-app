import { IAggregatedUser } from "../interfaces/aggregated-user.interface";

export enum EUserActions {
    SET_AGGREGATED_USER = "SET_AGGREGATED_USER",
    SET_USER_BALANCE = "SET_USER_BALANCE",
}

export interface ISetAggregatedUser {
    type: EUserActions.SET_AGGREGATED_USER,
    payload: IAggregatedUser,
}

export interface ISetUserBalance {
    type: EUserActions.SET_USER_BALANCE
    payload: number
}