import { EUserActions, ISetAggregatedUser, ISetUserBalance } from "../constants/user.constants";
import { IAggregatedUser } from "../interfaces/aggregated-user.interface";

export const setAggregatedUser = (payload:IAggregatedUser) : ISetAggregatedUser => ({
    type: EUserActions.SET_AGGREGATED_USER,
    payload,
})

export const setUserBalance = (payload:number) : ISetUserBalance => ({
    type: EUserActions.SET_USER_BALANCE,
    payload,
});