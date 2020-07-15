import { createUser, fetchUsers } from "../../actions/user_actions"

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react"
import { connect } from "react-redux"

class Users extends React.Component {
  static propTypes = {
    fetchUsers: PropTypes.func,
    createUser: PropTypes.func,
    users: PropTypes.array,
  };

  componentDidMount() {
    // GET request to /users
    // Stores the result in redux and updates this component's models
    this.props.fetchUsers();
  }

  handleCreate = (userParams) => {
    // POST request to /users
    // The body of the post request will be JSON string of commentAttributes
    this.props.createUser(userParams);
  };

  render() {
    if (!this.props || !this.props.users) {
      return <p>Loading...</p>;
    }

    return (
      <React.Fragment>
        <h1>All Users</h1>
        <ul>
          {this.props.users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{`${user.fname} ${user.lname}`}</Link>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state?.users ? Object.values(state?.users) : undefined
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  createUser: (user) => dispatch(createUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
