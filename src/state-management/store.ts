/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers, Reducer, ReducersMapObject } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { reducer as UserReducer } from './user/reducer';
import { reducer as AuthReducer } from './auth/reducer';
import { ReduxStoreModel } from "../models/store";

const reducers: ReducersMapObject<ReduxStoreModel, any> = {
    user: UserReducer as Reducer<ReduxStoreModel['user'], any>,
    auth: AuthReducer as Reducer<ReduxStoreModel['auth'], any>,
}

const store = configureStore({
    reducer: combineReducers(reducers),
    devTools: import.meta.env.MODE !== 'production',
})

export default store