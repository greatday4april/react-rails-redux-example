import { apiReducer, middleWare } from 'redux-rails'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

import logger from "redux-logger";
import thunk from "redux-thunk";

const apiConfig = {
    baseUrl: "http://127.0.0.1:3000/api/",
    resources: {
        Users: {
            controller: "users",
        },
    },
    optimisticUpdateEnabled: false,
};

export const store = createStore(
    combineReducers({
        resources: apiReducer(apiConfig) // auto-generates reducers
    }),
    {},
    applyMiddleware(middleWare(apiConfig), thunk, logger)
);