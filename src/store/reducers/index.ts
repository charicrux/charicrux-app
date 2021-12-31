import { combineReducers } from "redux";
import { EDefaultActions } from "../constants";
import { IAction } from "../interfaces/action.interface";
import { authReducer, IAuthReducer } from "./auth.reducer";
export interface IRootReducer {
    default: IDefaultReducer,
    auth: IAuthReducer,
}

interface IDefaultReducer {
    loading: boolean,
}

const initialState = {
    loading: false,

};

const defaultReducer = (state:IDefaultReducer=initialState, action:IAction) : IDefaultReducer => {
    switch(action.type) {
        case EDefaultActions.SET_LOADING: {
            return { ...state, loading: action.payload };
        }
        default: {
            return state; 
        }
    }
};

const reducers = combineReducers({
    default: defaultReducer,
    auth: authReducer,
});

export { reducers };