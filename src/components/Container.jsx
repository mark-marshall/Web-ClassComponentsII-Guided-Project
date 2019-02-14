import React from 'react';
import uuid from 'uuid';
import Friends from './Friends';
import FriendEditor from './FriendEditor';


const initialState = {
  friends: [
    { id: uuid(), name: 'Tom', age: '35' },
    { id: uuid(), name: 'Luke', age: '27' },
    { id: uuid(), name: 'Josh', age: '34' },
  ],
  currentFriendId: null,
};

class Container extends React.Component {
  state = initialState

  addFriend = (name, age) => {
    // add a new friend object to `state.friends`
    this.setState(lastState => ({
      friends: lastState.friends.concat({ id: uuid(), name, age }),
    }));
  }

  updateFriend = (id, name, age) => {
    this.setState(existingState => {
      const arrayWithoutTheFriendToBeUpdated = existingState.friends.filter(fr => fr.id !== id);
      const arrayWithTheUpdatedFriend = arrayWithoutTheFriendToBeUpdated.concat({ id, name, age });
      return { friends: arrayWithTheUpdatedFriend };
    });
  }

  updateFriend = (id, name, age) => {
    // update an existing friend (the `id` tells us which friend to update)
    this.setState(lastState => ({
      friends: lastState.friends.map(friend => {
        if (friend.id === id) {
          return { id, name, age };
        }
        return friend;
      }),
    }));
  }

  deleteFriend = id => {
    this.setState(prevState => ({
      friends: prevState.friends.filter(fr => fr.id !== id),
    }));
  }

  setCurrentFriendId = id => {
    this.setState({
      currentFriendId: id,
    });
  }

  render() {
    const currentFriend = this.state.friends.find(
      
      // find the friend object that has an id of `state.currentFriendId`
    );

    return (
      <div className='container'>
        <Friends
          friends={this.state.friends}
          deleteFriend={this.deleteFriend}
          setCurrentFriendId={this.setCurrentFriendId}
        />

        {
          !this.state.currentFriendId &&
          <FriendEditor
            addFriend={this.addFriend}
          />
        }
        {
          this.state.currentFriendId &&
          <FriendEditor
            currentFriend={currentFriend}
            updateFriend={this.updateFriend}
            setCurrentFriendId={this.setCurrentFriendId}
          />
        }
      </div>
    );
  }
}

export default Container;
