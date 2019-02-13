import React from 'react';
import Friend from './Friend';


export default function Friends(props) {
  return (
    <div className="sub-container">
      <h3>These are my friends:</h3>
      {
        props.friends.map(friend => (
          <Friend
            key={friend.id}
            friend={friend}
            deleteFriend={props.deleteFriend}
            setCurrentFriend={props.setCurrentFriend}
          />
        ))
      }
    </div>
  );
}
