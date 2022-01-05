import { EUserActions, ISetAggregatedUser } from "../constants/user.constants";
import { IAggregatedUser } from "../interfaces/aggregated-user.interface";

export const setAggregatedUser = (payload:IAggregatedUser) : ISetAggregatedUser => ({
    type: EUserActions.SET_AGGREGATED_USER,
    payload,
})