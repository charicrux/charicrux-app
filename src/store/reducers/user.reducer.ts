import { EUserActions } from "../constants/user.constants";
import { IAction } from "../interfaces/action.interface";
import { IAggregatedUser } from "../interfaces/aggregated-user.interface";

interface IUserReducer {
    aggregatedUser?: IAggregatedUser,
}

const initialState : IUserReducer = {
    aggregatedUser: undefined,
};

const userReducer = (state:IUserReducer = initialState, action:IAction) : IUserReducer => {
    switch(action.type) {
        case EUserActions.SET_AGGREGATED_USER: 
            return { ...state,  aggregatedUser: action.payload };
        default: return state; 
    }
}

export { userReducer, IUserReducer };