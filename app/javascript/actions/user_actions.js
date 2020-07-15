import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const removeUser = userId => ({
    type: REMOVE_USER,
    userId
});

export const fetchUsers = () => dispatch => (
    UserApiUtil.fetchUsers()
        .then(users => dispatch(receiveAllUsers(users)))
);

export const fetchUser = userId => dispatch => (
    UserApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
);

export const createUser = user => dispatch => (
    UserApiUtil.createUser(user)
        .then(data => dispatch(receiveUser(data)))
);

export const updateUser = user => dispatch => (
    UserApiUtil.updateUser(user)
        .then(data => dispatch(receiveUser(data)))
);

export const deleteUser = userId => dispatch => (
    UserApiUtil.deleteUser(userId)
        .then(() => dispatch(removeUser(userId)))
);