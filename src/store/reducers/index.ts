import { combineReducers } from "redux";
import { EDefaultActions } from "../constants";
export interface IRootReducer {
    default: IDefaultReducer,
}

interface IDefaultReducer {
    loading: boolean,
}

const initialState = {
    loading: false,
};

const defaultReducer = (state:IDefaultReducer=initialState, action:any) => {
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
});

export { reducers };