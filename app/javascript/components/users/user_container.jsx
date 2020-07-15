import React from "react"
import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";

class User extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render () {
    const user = this.props.user;
    if (!user) {
      return <p>Loading...</p>;
    }

    return (
      <React.Fragment>{`${user.fname} ${user.lname}`}</React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.id;
  const user = state.users ? state.users[userId] : undefined;

  return {user: user};
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
