import React from "react"
import PropTypes from "prop-types"
class User extends React.Component {
  render () {
    return (
      <React.Fragment>
        User: {this.props.user}
      </React.Fragment>
    );
  }
}

User.propTypes = {
  user: PropTypes.node
};
export default User
