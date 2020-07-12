import { apiReducer, middleWare } from 'redux-rails'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

import logger from "redux-logger";
import thunk from "redux-thunk";

const apiConfig = {
    baseUrl: "/api/",
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