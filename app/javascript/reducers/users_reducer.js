import {
    RECEIVE_ALL_USERS,
    RECEIVE_USER,
    REMOVE_USER,
} from '../actions/user_actions';

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return Object.assign({}, oldState, action.users)
        case RECEIVE_USER:
            return Object.assign({}, oldState, { [action.user.id]: action.user })
        case REMOVE_USER:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.userId]
            return nextState;
        default:
            return oldState;
    }
};

export default UsersReducer;
