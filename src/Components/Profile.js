import React, { Component } from 'react';


class Profile extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.match.params.username}
      </div>
    );
  }
}

export default Profile;
