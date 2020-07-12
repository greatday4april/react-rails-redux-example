import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react"
import { connect } from "react-redux"
import { railsActions } from "redux-rails";

class Users extends React.Component {
  static propTypes = {
    fetchUsers: PropTypes.func,
    createUser: PropTypes.func,
    loading: PropTypes.bool,
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
    if (!this.props || this.props.loading) {
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
  users: state.resources.Users.models
    .map(user => user.attributes),
  loading: state.resources.Users.loading,
});

const mapDispatchToProps = {
  fetchUsers: () => railsActions.index({ resource: "Users" }),
  createUser: () => railsActions.create({resource: "Users" })
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
