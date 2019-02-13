import React from 'react';

// Implement `Friends` component so it takes an array of friends,
// each friend being an object like so: { name: 'Peter' },
// and renders a list of friends' names.
// Wrap everything in a div with the class of 'sub-container' so styles will work.
export default function Friends(props) {
  return (
    <div className="sub-container">
      <h3>These are my friends:</h3>
      {
        props.friends.map(friend => (
          <div key={friend.id}>{friend.name} is {friend.age}</div>
        ))
      }
    </div>
  );
}
