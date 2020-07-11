import React from "react"
import PropTypes from "prop-types"
class Users extends React.Component {
  render () {
    return (
      <React.Fragment>
        Users: {this.props.users}
      </React.Fragment>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array
};
export default Users
