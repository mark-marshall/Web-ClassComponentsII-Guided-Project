import React from 'react';


const initialState = {
  nameValue: '',
  ageValue: '',
};

export class FriendAdder extends React.Component {
  state = initialState

  clearInputs = () => {
    this.setState(initialState);
  }

  onNameChange = event => {
    this.setState({
      nameValue: event.target.value,
    });
  }

  onAgeChange = event => {
    // only numers allowed! :)
    if (Number(event.target.value)) {
      this.setState({
        ageValue: event.target.value,
      });
    }
  }

  onFriendAdd = () => {
    // we don't want to do anything unless inputs are filled in
    if (this.state.nameValue.length && this.state.ageValue.length) {
      // the parent container provides us via props with the ability to add friend
      this.props.addFriend(this.state.nameValue, this.state.ageValue);
      this.clearInputs();
    }
  }

  render() {
    return (
      <div className='sub-container'>
        <h3>Add a friend!</h3>

        name:
        <input
          type="text"
          value={this.state.nameValue}
          onChange={this.onNameChange}
        />

        age:
        <input
          type="text"
          value={this.state.ageValue}
          onChange={this.onAgeChange}
        />

        <button onClick={this.onFriendAdd}>Add Friend!</button>
      </div>
    );
  }
}

export default FriendAdder;
