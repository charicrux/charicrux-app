import { IRootReducer } from "../reducers";

export const getAccessToken = (state:IRootReducer) => state.auth.accessToken;