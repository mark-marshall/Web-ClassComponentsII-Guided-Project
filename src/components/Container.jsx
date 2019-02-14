import React from 'react';
import uuid from 'uuid';
import Friends from './Friends';
import FriendEditor from './FriendEditor';
import { runInThisContext } from 'vm';

const initialState = {
  friends: [
    { id: uuid(), name: 'Tom', age: '35' },
    { id: uuid(), name: 'Luke', age: '27' },
    { id: uuid(), name: 'Josh', age: '34' }
  ],
  currentFriendId: null
};

class Container extends React.Component {
  state = initialState;

  addFriend = (name, age) => {
    // add a new friend object to `state.friends` using setState
    this.setState(prevState => ({
      friends: prevState.friends.concat({ id: uuid(), name: name, age: age })
    }));
  };

  updateFriend = (id, name, age) => {
    this.setState(prevState => ({
      friends: prevState.friends.map(friend => {
        if (friend.id === id) {
          friend.name = name;
          friend.age = age;
          return friend;
        } else {
          return friend;
        }
      })
    }));
  };

  deleteFriend = id => {
    // 1- delete an existing friend (the `id` tells us which) using setState
    // 2- also set currentFriendId to null
    this.setState(prevState => ({
      friends: prevState.friends.filter(friend => friend.id !== id),
      currentFriendId: null,
    }))
  };

  setCurrentFriendId = id => {
    // set state.currentFriendId to be `id`
    this.setState({
      currentFriendId: id,
    })
  };

  render() {
    // find the friend object that has an id of `state.currentFriendId`
    const currentFriend = this.state.friends.find(friend => friend.id === this.state.currentFriendId);

    return (
      <div className="container">
        <Friends
          friends={this.state.friends}
          deleteFriend={this.deleteFriend}
          setCurrentFriendId={this.setCurrentFriendId}
        />

        {!this.state.currentFriendId && (
          <FriendEditor addFriend={this.addFriend} />
        )}
        {this.state.currentFriendId && (
          <FriendEditor
            currentFriend={currentFriend}
            updateFriend={this.updateFriend}
            setCurrentFriendId={this.setCurrentFriendId}
          />
        )}
      </div>
    );
  }
}

export default Container;
