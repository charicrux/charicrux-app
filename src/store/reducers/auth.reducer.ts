import { EAuthActions } from "../constants/auth.constants";
import { IAction } from "../interfaces/action.interface";

interface IAuthReducer {
    accessToken: string | null,
}

const initialState = {
    accessToken: null,
};

const authReducer = (state:IAuthReducer = initialState, action:IAction) : IAuthReducer => {
    switch(action.type) {
        case EAuthActions.SET_ACCESS_TOKEN: 
            return { ...state, accessToken: action.payload }
        default: return state; 
    }
}

export { authReducer, IAuthReducer };