import { Route, Switch } from "react-router-dom";

import React from "react";
import UserContainer from "./users/user_container";
import UsersContainer from "./users/users_container";

const App = () => (
  <div>
    <h1>
      <a href="https://github.com/greatday4april/react-rails-redux-example/blob/master/README.md">
        README
      </a>
    </h1>
    <Switch>
      <Route path="/users/:id" component={UserContainer} />
      <Route exact path="/" component={UsersContainer} />
    </Switch>
  </div>
);

export default App;