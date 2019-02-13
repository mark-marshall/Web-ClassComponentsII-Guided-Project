import React from 'react';


const initialState = {
  nameValue: '',
  ageValue: '',
};

export class FriendAdder extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.currentFriend
      ? {
        nameValue: props.currentFriend.name,
        ageValue: props.currentFriend.age,
      }
      : initialState;
  }

  clearInputs = () => {
    // implement
  }

  onNameChange = event => {
    // implement
  }

  onAgeChange = event => {
    if (Number(event.target.value)) {
      // implement
    }
  }

  onFriendAdd = () => {
    if (this.state.nameValue.length && this.state.ageValue.length) {
      // 1- add friend using the `addFriend` function coming in via props
      // 2- clear the inputs
    }
  }

  onFriendUpdate = () => {
    if (this.state.nameValue.length && this.state.ageValue.length) {
      // 1- update friend using the `updateFriend` function coming in via props
      // 2- set the current friend id to null using function coming in via props
      // 3- clear the inputs
    }
  }

  render() {
    const isEditing = this.props.currentFriend;

    return (
      <div className='sub-container'>
        {
          isEditing
            ? <h3>Edit Friend</h3>
            : <h3>Add a friend!</h3>
        }

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

        {
          isEditing
            ? <button onClick={this.onFriendUpdate}>Update Friend!</button>
            : <button onClick={this.onFriendAdd}>Add Friend!</button>
        }
      </div>
    );
  }
}

export default FriendAdder;
