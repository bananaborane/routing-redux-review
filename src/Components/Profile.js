import React, { Component } from 'react';


class Profile extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>
          WELCOME, {this.props.match.params.username}
        </h2>
        <br></br>
        <h4>Would you like to change your profile pic?</h4>
        <input
          onChange={()=>{this.handleDatChange()}}
          name="pic"
          placeholder="Enter Picture URL here"
           />
        <button>Upload Pic</button>
      </div>
    );
  }
}

export default Profile;
