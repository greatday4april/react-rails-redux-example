import React from "react"
import { connect } from "react-redux";
import { railsActions } from "redux-rails";

class User extends React.Component {
  componentDidMount() {
    // cast to number otherwise redux-rails wont be able to match with the data from server
    this.props.fetchUser(Number(this.props.match.params.id));
  }

  render () {
    debugger;
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
  const userId = Number(ownProps.match.params.id);
  const model = state.resources.Users.models
    .filter(m => m.id === userId)[0];

  return model ? {
    user: model.attributes,
    loading: model.loading,
  } : {};
};

const mapDispatchToProps = {
  fetchUser: (userId) => railsActions.show({ resource: "Users", id: userId }),
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
