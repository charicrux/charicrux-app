import { EAuthActions } from "../constants/auth.constants";

export const setAccessToken = (payload:string) => ({
    type: EAuthActions.SET_ACCESS_TOKEN,
    payload,
})