import { IRootReducer } from "../reducers";

export const getUserOrganization = (state:IRootReducer) => state.user.aggregatedUser?.organization;