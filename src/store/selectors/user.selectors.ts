import { IRootReducer } from "../reducers";

export const getUserOrganization = (state:IRootReducer) => state.user.aggregatedUser?.organization;
export const getUserWallet = (state:IRootReducer) => state.user?.aggregatedUser?.wallet;
export const getUser = (state:IRootReducer) => state.user.aggregatedUser;