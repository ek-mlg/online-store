import {combineReducers, legacy_createStore} from "redux";
import {ItemReducer} from "./item-reducer";

const rootReducer = combineReducers({
    item: ItemReducer
})

export const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>