# React-Rails-Redux Example

This is an example using https://github.com/greatday4april/react-rails-skeleton with a complete user resource chain as the following. The packages does make things a lot easier for you

But use Redux only if you need to! Having state stored within the components is perfectly fine as long as your top-level components are not bloated

## Live Demo
https://react-redux-rails-example.herokuapp.com/

## Setup
run `bundle install && yarn install` and then run `rails db:setup && rails s`, you should be able to visit `http://127.0.0.1:3000/` to see a list of users

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
11. `BrowserRouter` is used and server default to serving html via `state_pages#root` so react-router takes care of routing

## Store state schema

```JavaScript
{
    users: {
        1: {id: 1, fname: "Marcel", lname: "Walter", url: "https://react-redux-rails-example.herokuapp.com/api/users/1"},
        2: {id: 2, fname: "Jeromy", lname: "Wisozk", url: "https://react-redux-rails-example.herokuapp.com/api/users/2"},
        3: {id: 3, fname: "Ned", lname: "Kihn", url: "https://react-redux-rails-example.herokuapp.com/api/users/3"},
        4: {id: 4, fname: "Beata", lname: "Quigley", url: "https://react-redux-rails-example.herokuapp.com/api/users/4"},
        5: {id: 5, fname: "Edwardo", lname: "Barton", url: "https://react-redux-rails-example.herokuapp.com/api/users/5"}
    }
}
```
