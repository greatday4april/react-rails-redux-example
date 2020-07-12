import React from "react"
import { connect } from "react-redux";
import { railsActions } from "redux-rails";

class User extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render () {
    const user = this.props.user;
    if (!user || this.props.loading) {
      return <p>Loading...</p>;
    }

    const attributes = user;
    return (
      <React.Fragment>{`${attributes.fname} ${attributes.lname}`}</React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.id;
  const model = state.resources.Users.models
    .filter(m => !m.loading)
    .filter(m => m.id === Number(userId))[0];

  return model ? {
    user: model.attributes,
    loading: model.loading,
  } : {};
};

const mapDispatchToProps = {
  fetchUser: (userId) => railsActions.show({ resource: "Users", id: userId }),
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
