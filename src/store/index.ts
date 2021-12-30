import { 
    createStore, 
} from "redux";

import { reducers } from "./reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore  } from 'redux-persist';

const reducerPersisted = persistReducer({
    key: "root",
    storage: AsyncStorage,
    blacklist: [],
}, reducers);

const store = createStore(reducerPersisted);

const persistor = persistStore(store);

export { persistor };

export default store; 