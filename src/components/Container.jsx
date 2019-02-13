import React from 'react';
import uuid from 'uuid';
import Count from './Count';
import Friends from './Friends';
import FriendAdder from './FriendAdder';


const initialState = {
  counter: 0,
  friends: [
    { id: uuid(), name: 'Tom', age: 35 },
    { id: uuid(), name: 'Luke', age: 27 },
  ],
};

class Container extends React.Component {
  state = initialState

  increment = howMuch => {
    this.setState(st => ({ counter: st.counter + howMuch }));
  }

  decrement = howMuch => {
    this.setState(st => ({ counter: st.counter - howMuch }));
  }

  addFriend = (name, age) => {
    this.setState(
      st => ({ friends: st.friends.concat({ id: uuid(), name, age }) }),
    );
  }

  deleteFriend = id => {
    this.setState(
      st => ({ friends: st.friends.filter(fr => fr.id !== id) }),
    );
  }

  render() {
    return (
      <div className='container'>
        <Count
          count={this.state.counter}
          increment={this.increment}
          decrement={this.decrement}
        />

        <Friends
          friends={this.state.friends}
          deleteFriend={this.deleteFriend}
        />

        <FriendAdder
          addFriend={this.addFriend}
        />
      </div>
    );
  }
}

export default Container;
