import {combineReducers, legacy_createStore} from "redux";

const rootReducer = combineReducers({
    // reducers
})

export const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>