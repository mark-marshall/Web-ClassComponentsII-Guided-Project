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
    this.setState(
      st => ({ friends: st.friends.concat({ id: uuid(), name, age }) }),
    );
  }

  updateFriend = (id, name, age) => {
    this.setState(
      st => {
        const otherFriends = st.friends.filter(fr => fr.id !== id);
        return { friends: otherFriends.concat({ id, name, age }) };
      },
    );
  }

  deleteFriend = id => {
    this.setState(
      st => ({
        friends: st.friends.filter(fr => fr.id !== id),
        currentFriendId: null,
      }),
    );
  }

  setCurrentFriend = id => {
    this.setState({ currentFriendId: id });
  }

  render() {
    const currentFriend = this.state.friends.find(
      fr => fr.id === this.state.currentFriendId,
    );

    return (
      <div className='container'>
        <Friends
          friends={this.state.friends}
          deleteFriend={this.deleteFriend}
          setCurrentFriend={this.setCurrentFriend}
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
            setCurrentFriend={this.setCurrentFriend}
          />
        }
      </div>
    );
  }
}

export default Container;
