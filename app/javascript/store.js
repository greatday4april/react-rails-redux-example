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

const middlewares = [middleWare(apiConfig), thunk];
if (process.env.NODE_ENV !== "production") {
    // must use 'require' (import only allowed at top of file)
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => createStore(
    combineReducers(
        { resources: apiReducer(apiConfig) } // auto-generated reducers
    ),
    preloadedState,
    applyMiddleware(...middlewares)
);

export default configureStore;
