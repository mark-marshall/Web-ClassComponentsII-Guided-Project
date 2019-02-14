import React from 'react';
import Friend from './Friend';


export default function Friends({ friends, deleteFriend, setCurrentFriendId }) {
  return (
    <div className="sub-container">
      <h3>These are my friends:</h3>
      {/* Make it so we get the `No friends!` h5 if there are no friends */}
      {
        friends.map(friend => (
          <Friend
            key={friend.id}
            friend={friend}
            deleteFriend={deleteFriend}
            setCurrentFriendId={setCurrentFriendId}
          />
        ))
      }
    </div>
  );
}
