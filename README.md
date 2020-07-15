# React-Rails-Redux Example

This is an example using https://github.com/greatday4april/react-rails-skeleton with a complete user resource chain as the following. The packages does make things a lot easier for you

But use Redux only if you need to! Having state stored within the components is perfectly fine as long as your top-level components are not bloated

## Setup
run `bundle install && yarn install` and then run `rails db:setup && rails s`, you should be able to visit `http://127.0.0.1:3000/` to see a list of users

For a live demo, checkout: https://react-redux-rails-example.herokuapp.com/

## Features

`rails g model user && rails g scaffold_controller api/user --api` and `rails g react:component Users users:array` are used to generate files

1. `users` db table with `fname` and `lname` fields
2. `class User` model active record
3. `Api::UserController` with most of the implementation already filled
4. working jbuilders `index.json.jbuilder` and `show.json.jbuilder`
    4.1 `@api_user` replaced with `@user` in users_controller and jbuilders
    4.2 partial path fixed with `api/users/api_user`
5. routes added in `routes.rb`
6. store configured with the corresponding actions , thunk and logger in store.js
7. actions,  reducers configured
8. `react-router` configures frontend routing so `/` matches `UsersContainer` and `/users/:id` matches `UserContainer`
9. `UsersContainer` and `UserContainer` talks to the store directly, but if you dont need `UserContainer` as top-level component, you can just pass in user object as prop into `User` component
10. This repository is production ready except you need to remove `window.store = store` assignment.

## Store state schema

```JavaScript
{
    Users: {
        queryParams: {},
        loading: false,
        loadingError: undefined,
        models: [
            {
                loading: false,
                loadingError: undefined,
                id: 123,
                attributes: {
                    id: 123,
                    f_name: 'Leia',
                    l_name: 'Organa',
                }
            },
            {
                loading: false,
                loadingError: undefined,
                id: 124,
                attributes: {
                    id: 124,
                    f_name: 'Han',
                    l_name: 'Solo',
                }
            },
            {
                loading: false,
                loadingError: undefined,
                id: 125,
                attributes: {
                    id: 125,
                    f_name: 'Luke',
                    l_name: 'Skywalker',
                }
            }
        ]
    }
}
```
