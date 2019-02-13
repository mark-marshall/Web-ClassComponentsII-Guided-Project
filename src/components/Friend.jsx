import React from 'react';


export default function Friend({ friend, deleteFriend }) {
  const onDelete = () => deleteFriend(friend.id);

  return (
    <div>
      <span key={friend.id}>{friend.name} is {friend.age}</span>
      <button className='small'>Edit Friend</button>
      <button onClick={onDelete} className='small danger'>Delete Friend</button>
    </div>
  );
}
